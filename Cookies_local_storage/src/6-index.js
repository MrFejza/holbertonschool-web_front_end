// Array of available items
const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

// Check if session storage is available
if (typeof Storage === "undefined") {
  alert(
    "Sorry, your browser does not support Web storage. Try again with a better one."
  );
} else {
  // Session storage is available, initialize the store and cart
  createStore();
  displayCart();
}

// Function to add an item to the cart (session storage)
function addItemToCart(item) {
  sessionStorage.setItem(item, "true");
  displayCart();
}

// Function to create the store
function createStore() {
  const storeContainer = document.getElementById("storeContainer");
  const ul = document.createElement("ul");

  availableItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.style.cursor = "pointer";
    li.addEventListener("click", () => addItemToCart(item));
    ul.appendChild(li);
  });

  storeContainer.appendChild(ul);
}

// Function to display the cart
function displayCart() {
  const cartContainer = document.getElementById("cartContainer");
  cartContainer.innerHTML = ""; // Clear the cart container

  const itemsInCart = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    if (sessionStorage.getItem(key) === "true") {
      itemsInCart.push(key);
    }
  }

  if (itemsInCart.length > 0) {
    const p = document.createElement("p");
    p.textContent = `You previously had ${itemsInCart.length} item(s) in your cart.`;
    cartContainer.appendChild(p);
  }
}