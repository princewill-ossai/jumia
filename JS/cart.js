document.querySelector(".toggle").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("active");
});

let itemQuantty = 1;
const minusBtn = document.querySelectorAll(".minus");
const addBtn = document.querySelectorAll(".add");
const itemNum = document.querySelectorAll(".minus + span");
const cartImg = document.getElementById("cartImg");
const cartItemName = document.getElementById("cart-item-name");
const cartItemPrice = document.getElementById("cart-item-price");
const cartItemOldPrice = document.getElementById("cart-item-old-price");

if (cartImg && cartItemPrice && cartItemOldPrice) {
  const savedImgSrc = localStorage.getItem("cartImgSrc");
  const savedItemName = localStorage.getItem("cartItemName");
  const savedItemPrice = localStorage.getItem("cartItemPrice");
  const savedItemOldPrice = localStorage.getItem("cartItemOldPrice");

  if (savedImgSrc && savedItemPrice) {
    cartImg.src = savedImgSrc;
    cartItemName.innerHTML = savedItemName;
    cartItemPrice.innerHTML = savedItemPrice;

    if (savedItemOldPrice) {
      cartItemOldPrice.innerHTML = savedItemOldPrice;
    } else {
      cartItemOldPrice.style.display = "none";
    }
  } else {
    console.error("Some cart item data is missing in localStorage.");
  }
} else {
  console.error("One or more cart item elements not found in the DOM.");
}

function addCartItem() {
  itemNum.forEach((span) => {
    span.innerHTML = itemQuantty;
  });

  addBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        let itemQuantty = parseInt(targetElement.innerHTML);
        itemQuantty++;
        targetElement.innerHTML = itemQuantty;
      }
    });
  });

  document.getElementById("total-span").innerHTML =
    localStorage.getItem("cartItemPrice");
  document.getElementById('checkout').innerHTML = localStorage.getItem('cartItemPrice')
}

addBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    addCartItem()
  })
})



function deductCartItem() {
  itemNum.forEach((span) => {
    span.innerHTML = itemQuantty;
  });

  minusBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        let itemQuantty = parseInt(targetElement.innerHTML);
        itemQuantty--;
        targetElement.innerHTML = itemQuantty;
      }
    });
  });
}

document.getElementById("total-span").innerHTML =
  localStorage.getItem("cartItemPrice");

addCartItem();
minusBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    deductCartItem()
  });
});
