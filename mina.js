
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const cancelBtn = document.querySelector(".save-btn-1");
const modal = document.getElementById("modal");
const form = document.querySelector("#modal form");

const nameInput = document.getElementById("contactName");
const phoneInput = document.getElementById("contactNumber");
const emailInput = document.getElementById("emailAddress");
const addressInput = document.getElementById("contactAddress");
const groupInput = document.getElementById("contactGroup");

const container = document.querySelector(".contacts-container");


openBtn.addEventListener("click", function () {
  modal.classList.add("open");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open");
});
cancelBtn.addEventListener("click", function () {
  modal.classList.remove("open");
});
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("open");
  }
});
 


form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim() || "New Contact";
  const firstLetter = name.charAt(0).toUpperCase();

  const card = document.createElement("div");
  card.className = "contact-card";

  const container = document.querySelector(".contacts-container");
const totalContacts = document.getElementById("total-contacts");
  card.innerHTML = `
    <div class="card-header">
      <div class="avatar"></div>
      <div class="card-info">
        <h3 class="c-name"></h3>
        <p><i class="fa-solid fa-phone"></i> <span class="c-phone"></span></p>
      </div>
    </div>
    <div class="card-body">
      <p><i class="fa-solid fa-envelope"></i> <span class="c-email"></span></p>
      <p><i class="fa-solid fa-location-dot"></i> <span class="c-address"></span></p>
      <span class="group-badge"></span> </div>`;

  card.querySelector(".avatar").textContent = firstLetter;
  card.querySelector(".c-name").textContent = name;
  card.querySelector(".c-phone").textContent = phoneInput.value.trim();
  card.querySelector(".c-email").textContent = emailInput.value.trim();
  card.querySelector(".c-address").textContent = addressInput.value.trim();
  card.querySelector(".group-badge").textContent = groupInput.value.trim();

  container.appendChild(card);
  emptyBox.hidden = true;

totalContacts.textContent =
  document.querySelectorAll(".contacts-container .contact-card").length;
  form.reset();
  modal.classList.remove("open");
});
