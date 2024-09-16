document.querySelector(".toggle").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("active");
});

const cards = document.querySelectorAll(".card");
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

cards.forEach((card) => {
  card.querySelector('.minus').addEventListener('click', () => {
    deductCartItem();
  })
})



 const product = [{
  image: '/IMG/1.jpg',
  name: 'Portable Bluetooth wireless Speakers USB/TF/FM',
  newPrice: '₦ 16,500',
  oldPrice: '₦ 20,000'
},
{
  image: '/IMG/2.jpg',
  name: 'Zealot S32 Portable Wireless Bluetooth Speaker 5W Subwoofer',
  newPrice: '₦ 18,402',
  oldPrice: '₦ 29,510'
},
{
  image: '/IMG/3.jpg',
  name: 'Portable Heavy Duty Smart Bluetooth Speaker',
  newPrice: '₦ 5,490',
  oldPrice: '₦ 17,500,000'
},
{
  image: '/IMG/4.jpg',
  name: 'Zealot S51 Portable Wireless Bluetooth Speaker IPX5 Waterproof',
  newPrice: '₦ 24,990',
  oldPrice: '₦ 51,600'
},
{
  image: '/IMG/5.jpg',
  name: 'Zealot S67 Portable 60W Wireless Bluetooth Speaker',
  newPrice: '₦ 73,500',
  oldPrice: '₦ 155,000'
},
{
  image: '/IMG/6.jpg',
  name: 'Multi-Function Bluetooth Speakers With Digital Alarm Clock',
  newPrice: '₦ 11,990',
  oldPrice: '₦ 15,390'
},
{
  image: '/IMG/7.jpg',
  name: 'Outdoor BT Speakers Waterproof RGB Light Subwoofer Portable',
  newPrice: '₦ 9,990',
  oldPrice: '₦ 25,607'
},
{
  image: '/IMG/8.jpg',
  name: 'Zealot S53 Mini Bluetooth Speaker Portable Waterproof Stereo',
  newPrice: '₦ 26,380',
  oldPrice: '₦ 49,980'
},
{
  image: '/IMG/9.jpg',
  name: 'Zealot S34 Portable Wireless Speaker With BT 5.0 Technology',
  newPrice: '₦ 23,400',
  oldPrice: '₦ 36,600'
},
{
  image: '/IMG/10.jpg',
  name: 'Zealot S51 Wireless BT Speaker Bass Stereo Waterproof Portable',
  newPrice: '₦ 22,740',
  oldPrice: '₦ 52,440'
},
{
  image: '/IMG/11.jpg',
  name: 'Zealot S67 Waterproof Bluetooth Bass Speaker',
  newPrice: '₦ 71,990',
  oldPrice: '₦ 98,000'
},
{
  image: '/IMG/tv-1.jpg',
  name: 'Nexus 32" Inches FHD TV (H620B(SA) - Black + 2 Years Warranty)',
  newPrice: '₦ 139,135',
  oldPrice: '₦ 142,135'
},
{
  image: '/IMG/tv-2.jpg',
  name: 'itel 32 Inches LED TV (A3250) + 1 year Warranty',
  newPrice: '₦ 101,635',
  oldPrice: '₦ 111,635'
},
{
  image: '/IMG/tv-3.jpg',
  name: 'itel 32" Inches DLED HD TV (A3250) OvervoltageProtection - Black + 1 Year Warranty ',
  newPrice: '₦ 109,286',
  oldPrice: '₦ 159,348'
},
{
  image: '/IMG/tv-4.jpg',
  name: 'Hikers 43 Frameless FHD LED TV -Black',
  newPrice: '₦ 184,412',
  oldPrice: '₦ 234,423'
},
{
  image: '/IMG/tv-5.jpg',
  name: 'Hikers 32 Inches Frameless HD LED TV-Black',
  newPrice: '₦ 100,380',
  oldPrice: '₦ 165,000'
},
{
  image: '/IMG/bag-1.jpg',
  name: 'GATWIGA 3 IN 1 Bag Set Pencil/Crossbody/Laptop Backpack Grey',
  newPrice: '₦ 6,533',
  oldPrice: '₦ 15,999'
},
{
  image: '/IMG/bag-2.jpg',
  name: 'Backpack Casual Laptop School Bag',
  newPrice: '₦ 6,256',
  oldPrice: '₦ 12,900'
},
{
  image: '/IMG/bag-3.jpg',
  name: 'Men Bags Backpacks School Bags Laptop Bags Bookbags Satchel',
  newPrice: '₦ 9,120',
  oldPrice: '₦ 19,990'
},
{
  image: '/IMG/bag-4.jpg',
  name: 'EILIFINTE B06 Casual Crossbody Shoulder Chest Bag-Grey',
  newPrice: '₦ 1,779',
  oldPrice: '₦ 6,000'
},
{
  image: '/IMG/bag-5.jpg',
  name: 'Ladies Casual Backpack Women Bags School Waterproof Portable Female Travel',
  newPrice: '₦ 11,178',
  oldPrice: '₦ 15,612'
},
{
  image: '/IMG/shoe-1.jpg',
  name: 'Shoes Men Lofers Classic Business Men Formal Shoes Slip Ons',
  newPrice: '₦ 7,990',
  oldPrice: '₦ 9,999'
},
{
  image: 'IMG/shoe-2.jpg',
  name: 'ADIDAS Advantage Lifestyle Court Lace Shoes. Brand: ADIDAS | Similar products from ADIDAS',
  newPrice: '₦ 30,611',
  oldPrice: '₦ 61,220'
},
{
  image: '/IMG/shoe-3.jpg',
  name: 'Mens Italian Loafer Oxford Bright Plaid Fringed Leather Corporate Shoes Black',
  newPrice: '₦ 21,390',
  oldPrice: '₦ 42,990'
},
{
  image: '/IMG/shoe-4.jpg',
  name: 'Cooperate Business Mens Leather Luxury Wedding Office Formal Shoes - Black',
  newPrice: '₦ 13,126 - ₦ 14,900',
  oldPrice: '₦ 24,000'
},
{
  image: '/IMG/shoe-5.jpg',
  name: 'Men Glossy Tassel Brogue Leather Shoes Loafers & Slip-ons Formal Corporate Black',
  newPrice: '₦ 23,717',
  oldPrice: '₦ 20,704'
},
{
  image: '/IMG/shirt-1.jpg',
  name: 'T Shirt Men Autumn Winter Men Long Sleeve T-shirt Stripe Shirt New Tshirt O-Neck Casual-White',
  newPrice: '₦ 4,188',
  oldPrice: '₦ 6,276 - ₦ 6,950'
},
{
  image: '/IMG/shirt-2.jpg',
  name: 'Mens Short Sleeve Round Neck T-Shirt',
  newPrice: '₦ 3,433',
  oldPrice: '₦ 7,522'
},
{
  image: '/IMG/shirt-3.jpg',
  name: 'Mens Casual Long Sleeve Cotton T-Shirts Vintage Printed Shirt Tops',
  newPrice: '₦ 8,368',
  oldPrice: '₦ 12,500'
},
{
  image: '/IMG/shirt-4.jpg',
  name: 'Mens 2 In 1 Short Sleeve Round Neck T-Shirt & Shorts Set - Blue+White',
  newPrice: '₦ 7,980',
  oldPrice: '₦ 10,900'
},
{
  image: '/IMG/shirt-5.jpg',
  name: 'T-Shirts +Shorts 100% Cotton Mens Short Sleeve Set-White',
  newPrice: '₦ 8,950',
  oldPrice: '₦ 10,592'
},
{
  image: '/IMG/shirt-6.jpg',
  name: 'T-Shirts +Shorts 100% Cotton Mens Short Sleeve Set-Black',
  newPrice: '₦ 8,950',
  oldPrice: '₦ 10,000'
}
];

let productHTML = '';

product.forEach((product) => {
  productHTML += `
    <div class="card">
            <img src="${product.image}" alt="" />
            <div>
              <p class="Item-name">
                ${product.name}
              </p>
              <h5 class="item-price">${product.price}</h5>
              <p class="Item-old-price"><strike>${product.oldPrice}</strike></p>
              <div class="stars">
                <div><img src="/IMG/rate-star.jpg" alt="" /></div>
                <div><img src="/IMG/rate-star.jpg" alt="" /></div>
                <div><img src="/IMG/rate-star.jpg" alt="" /></div>
                <div><img src="/IMG/rate-star.jpg" alt="" /></div>
                <div><img src="/IMG/rate-star.jpg" alt="" /></div>
              </div>
            </div>
            <button class="card-btn" data-target="item32">ADD TO CART</button>
            <div class="cartItemNum" id="item32">
              <button class="minus">-</button>
              <span id="add32"></span>
              <button class="add" data-target="add32">+</button>
            </div>
          </div>
  `
});

document.querySelector('.js-grid-container').innerHTML = productHTML;



document.addEventListener("DOMContentLoaded", () => {
  // Function to handle Add to Cart logic
  function addToCart() {
    const cartBtns = document.querySelectorAll(".card-btn");
    const addBtn = document.querySelectorAll(".add");
    const minusBtn = document.querySelectorAll(".minus");
    const itemNum = document.querySelectorAll(".cartItemNum span");

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

    addBtn.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          let itemQuantty = parseInt(targetElement.querySelector("span").innerHTML) || 0;
          itemQuantty++;
          targetElement.querySelector("span").innerHTML = itemQuantty;
        }
      });
    });

    minusBtn.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          let itemQuantty = parseInt(targetElement.querySelector("span").innerHTML) || 0;
          itemQuantty = Math.max(0, itemQuantty - 1);
          targetElement.querySelector("span").innerHTML = itemQuantty;
        }
      });
    });
  }

  // Create product HTML
  const productHTML = product.map((p, index) => `
    <div class="card">
      <img src="${p.image}" alt="" />
      <div>
        <p class="Item-name">${p.name}</p>
        <h5 class="item-price">${p.newPrice}</h5>
        <p class="Item-old-price"><strike>${p.oldPrice}</strike></p>
        <div class="stars">
          <div><img src="/IMG/rate-star.jpg" alt="" /></div>
          <div><img src="/IMG/rate-star.jpg" alt="" /></div>
          <div><img src="/IMG/rate-star.jpg" alt="" /></div>
          <div><img src="/IMG/rate-star.jpg" alt="" /></div>
          <div><img src="/IMG/rate-star.jpg" alt="" /></div>
        </div>
      </div>
      <button class="card-btn" data-target="item${index}">ADD TO CART</button>
      <div class="cartItemNum" id="item${index}">
        <button class="minus" data-target="item${index}">-</button>
        <span>1</span>
        <button class="add" data-target="item${index}">+</button>
      </div>
    </div>
  `).join('');

  document.querySelector('.js-grid-container').innerHTML = productHTML;

  // Bind event listeners after HTML is injected
  addToCart();

  // Search functionality
  document.getElementById("search-btn").addEventListener("click", () => {
    let input = document.getElementById("input").value.toLowerCase();
    document.querySelectorAll(".card").forEach((card) => {
      let itemDescription = card.querySelector(".Item-name").innerHTML.toLowerCase().trim();
      card.style.display = itemDescription.includes(input) ? "" : "none";
    });
  });
});
