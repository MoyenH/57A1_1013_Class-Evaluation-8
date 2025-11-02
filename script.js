const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=300&q=80"
  },
];

const productList = document.getElementById('product-list');
const cartTableBody = document.querySelector('#cart-table tbody');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

let cart = {};

function renderProducts() {
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = "col";
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${product.image}" class="card-img-top" alt="${product.name}"/>
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">$${product.price.toFixed(2)}</p>
          <button class="btn btn-primary mt-auto" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
    productList.appendChild(card);
  });
}

function addToCart(productId) {
  if(cart[productId]) {
    cart[productId].qty++;
  } else {
    const product = products.find(p => p.id === productId);
    cart[productId] = {...product, qty: 1};
  }
  updateCart();
}

function removeFromCart(productId) {
  delete cart[productId];
  updateCart();
}

function updateCart() {
  cartTableBody.innerHTML = '';
  let total = 0;
  let itemCount = 0;
  for(let key in cart) {
    const item = cart[key];
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    itemCount += item.qty;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>$${itemTotal.toFixed(2)}</td>
      <td><button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">&times;</button></td>
    `;
    cartTableBody.appendChild(row);
  }
  cartCount.textContent = itemCount;
  cartTotal.textContent = total.toFixed(2);
}

window.onload = () => {
  renderProducts();
  updateCart();
};
