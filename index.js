var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({
    [item]: Math.floor(Math.random() * 100) + 1
  });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var result = 'In your cart, you have ';
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    for (var i = 0; i < cart.length; i++) {
      if (i === (cart.length - 1)) {
        result += `${Object.keys(cart[i])} at $${Object.values(cart[i])}.`;
      } else if (i === (cart.length - 2)) {
        result += cart.length === 2 ? `${Object.keys(cart[i])} at $${Object.values(cart[i])} and ` : `${Object.keys(cart[i])} at $${Object.values(cart[i])}, and `;
      } else {
        result += `${Object.keys(cart[i])} at $${Object.values(cart[i])}, `;
      }
    }
    console.log(result);
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}