// Food items stored as key-value pairs (Fixed "fishbol" to "fishball")
const foodPrices = {
  burger: 60,
  fries: 50,
  fishball: 20,
  kikiam: 25
};

let total = 0;
let orderItems = [];

// DOM elements
const choice = document.getElementById("choice");
const quantity = document.getElementById("quantity");
const addItemBtn = document.getElementById("addItem");
const orderList = document.getElementById("orderList");
const totalDisplay = document.getElementById("total");
const cashInput = document.getElementById("cash");
const payBtn = document.getElementById("payBtn");
const changeDisplay = document.getElementById("change");

// Add item to order
addItemBtn.addEventListener("click", () => {
  const selectedFood = choice.value;
  const qty = parseInt(quantity.value);

  if (qty > 0 && foodPrices[selectedFood]) {
    const price = foodPrices[selectedFood] * qty;
    total += price;

    // Store order item
    orderItems.push({ item: selectedFood, qty, price });

    const li = document.createElement("li");
    li.textContent = `${qty}x ${selectedFood.charAt(0).toUpperCase() + selectedFood.slice(1)} = ${price} pesos`;
    orderList.appendChild(li);

    totalDisplay.textContent = total.toLocaleString();
    quantity.value = 1;
    
    // Visual feedback
    addItemBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      addItemBtn.style.transform = 'scale(1)';
    }, 150);
  }
});

// Payment calculation
payBtn.addEventListener("click", () => {
  const cash = parseInt(cashInput.value);

  if (cash >= total && cash > 0) {
    const change = cash - total;
    changeDisplay.textContent = `✅ Change: ${change.toLocaleString()} pesos`;
    changeDisplay.style.color = '#00b894';
    
    // Reset order
    setTimeout(() => {
      orderItems = [];
      total = 0;
      orderList.innerHTML = '';
      totalDisplay.textContent = '0';
      cashInput.value = '';
      changeDisplay.textContent = '';
    }, 3000);
  } else if (cash < total) {
    changeDisplay.textContent = '❌ Insufficient cash!';
    changeDisplay.style.color = '#e17055';
  } else {
    changeDisplay.textContent = '⚠️ Please enter cash amount';
    changeDisplay.style.color = '#f39c12';
  }

  cashInput.value = '';
});
