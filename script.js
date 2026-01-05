// Simple baseline JavaScript
// This can be expanded later (cart, backend, payments)

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".product-card button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Item added to cart (demo)");
    });
  });
});
