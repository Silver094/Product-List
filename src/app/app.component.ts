import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  productNumber = 0;
  title = 'Product List';
  addProduct() {
    const productSelect = document.getElementById('product-select') as HTMLSelectElement;
    const quantitySelect = document.getElementById('quantity-select') as HTMLSelectElement;
    if (productSelect.value && quantitySelect.value) {
      const orderItems = document.getElementById('order-items');
      const product = document.getElementById('product');
      if (quantitySelect.value == '0')
        alert("Quantity can not be zero");
      else {
        this.productNumber++;
        if (orderItems && this.productNumber < 9) {
          const newRow = document.createElement('tr');
          newRow.innerHTML = `<td >${productSelect.value}</td><td >${quantitySelect.value}</td>`;
          const newRow1 = document.createElement('tr');
          newRow1.innerHTML = `<td>${productSelect.value}</td><td>${quantitySelect.value}</td><td>Added</td>`;
          orderItems.appendChild(newRow);
          product?.appendChild(newRow1);
          alert("Added");
        } else {
          console.error("Element with id 'order-items' not found.");
        }
        productSelect.value = "";
        quantitySelect.value = "";
      }
    }
    else
      alert("Please select both product and quantity.");

}
showOrder() {
  const orderList = document.getElementById('order-list');
  if (orderList)
    orderList.style.visibility = 'visible';
  else
    alert("Order is Empty");
}
readOrder() {
  const orderItems = document.getElementById('order-items');
  if (orderItems) {
    const text = orderItems.innerText;
    const apiKey = 'aaf1bdded69c442b890eb41494c2ee1b'; 
    const textToSpeechAPI = `https://api.voicerss.org/?key=${apiKey}&hl=en-us&src=${encodeURIComponent(text)}`;

    console.log('Generated TTS API URL:', textToSpeechAPI); 

    const audio = new Audio(textToSpeechAPI);
    audio.addEventListener('error', (error) => {
      console.error('Audio playback error:', error);
      alert('Error occurred during audio playback. Check console for details.');
    });
    audio.play();
  } else {
    console.error("Element with id 'order-items' not found.");
    alert('Order items element not found. Cannot read order.');
  }
}
}
