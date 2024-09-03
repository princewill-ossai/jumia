document.querySelector(".toggle").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("active");
});

const cartBtns = document.querySelectorAll(".card-btn");
const minusBtn = document.querySelectorAll(".minus");
const addBtn = document.querySelectorAll(".add");
const cartItemNum = document.querySelectorAll(".cartItemNum");
const itemNum = document.querySelectorAll(".minus + span");
let itemQuantty = 1;

document.addEventListener("DOMContentLoaded", () => {
  addToCart();
});

document.getElementById("search-btn").addEventListener("click", () => {
  let input = document.getElementById("input").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    let itemDescription = card.querySelector(".Item-name").innerHTML.toLowerCase().trim();

    if (itemDescription.includes(input)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});

function addToCart() {
  cartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.style.display = "none";

      const targetId = btn.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.style.display = "flex";
      }
    });
  });

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
}

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const button = card.querySelector(".card-btn");
  const img = card.querySelector("img");
  const itemName = card.querySelector(".Item-name");
  const itemPrice = card.querySelector(".item-price");
  const oldPrice = card.querySelector(".item-old-price");

  if (button) {
    button.addEventListener("click", () => {
      if (img && itemPrice && itemName) {
        let cardImg = img.src;
        let cardItemName = itemName.innerHTML;
        let cardItemPrice = itemPrice.innerHTML;
        let cardItemOldPrice = oldPrice ? oldPrice.innerHTML : "";

        localStorage.setItem("cartImgSrc", cardImg);
        localStorage.setItem("cartItemName", cardItemName);
        localStorage.setItem("cartItemPrice", cardItemPrice);
        localStorage.setItem("cartItemOldPrice", cardItemOldPrice);
      } else {
        console.error("Some elements are missing in the card:", card);
      }
    });
  }
});

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


minusBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    deductCartItem();
  });
});