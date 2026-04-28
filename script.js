// Food items stored as key-value pairs
const foodPrices = {
  burger: 60,
  fries: 50,
  fishbol: 20,
  kikiam: 25
};

let total = 0;

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

  if (qty > 0) {
    const price = foodPrices[selectedFood] * qty;
    total += price;

    const li = document.createElement("li");
    li.textContent = `${qty} x ${selectedFood} = ${price} pesos`;
    orderList.appendChild(li);

    totalDisplay.textContent = total;
  }
});

// Payment calculation
payBtn.addEventListener("click", () => {
  const cash = parseInt(cashInput.value);

  if (cash >= total) {
    const change = cash - total;
    changeDisplay.textContent = `Change: ${change} pesos`;
  } else {
    changeDisplay.textContent = "Insufficient cash!";
  }
});
