const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Shirt GSW",
    img: "ao-gsw.jpg",
    price: 220000,
  },
  {
    id: 2,
    name: "Kobe 5 - White, Cyber, Purple, Red",
    img: "kobe 5 white cyber purple red.png",
    price: 680000,
  },
  {
    id: 3,
    name: "Kobe 5 - Yellow, Black",
    img: "kobe 5 yellow black.jpg",
    price: 1100000,
  },
  {
    id: 4,
    name: "Kobe 4 - FTB Fade To Black",
    img: "kobe 4 ftb fade to black.jpg",
    price: 440000,
  },
  {
    id: 5,
    name: "Molten Ball",
    img: "molten ball.jpg",
    price: 300000,
  },
  {
    id: 6,
    name: "Laker Jersey",
    img: "ao-laker.jpg",
    price: 220000,
  },
];

let listCards = [];

const initApp = () => {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
    <img src="img/${value.img}"/>
    <div class="title">${value.name}</div>
    <div class="price">${value.price.toLocaleString()}</div>
    <button onclick="addToCard(${key})">Add To Card</button>
    `;
    list.appendChild(newDiv);
  });
};

initApp();

function addToCard(key) {
  if (listCard[key] == null) {
    listCards[key] = products[key];
    listCards[key].quantity = 1;
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = ``;
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
      <div><img src="img/${value.img}"/></div>
      <div>${value.name}</div>
      <div>${value.price.toLocaleString()}</div>
      <div>
      <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
      <div class="count">${value.quantity}</div>
      <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
      </div>
      `;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
