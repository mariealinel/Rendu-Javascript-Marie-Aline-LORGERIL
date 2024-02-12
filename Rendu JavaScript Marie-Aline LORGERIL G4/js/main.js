// MENU BURGER //

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  //quand on va clique sur le hamburger on veut activer les classes qui vont l'afficher
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

// Pour fermer le menu hamburger lorsqu'on appuie sur un lien
document.querySelectorAll(".link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  })
);

// TAB //

function tabNav() {
  const tabButton = document.querySelectorAll(".tablinks");
  const tabContent = document.querySelectorAll(".tab_content");

  console.log(tabButton);
  console.log(tabContent);

  tabButton.forEach((button) => {
    button.addEventListener("click", () => {
      tabButton.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
      tabContent.forEach((content) => {
        content.classList.remove("active");
      });
      const tabName = button.getAttribute("data-tab");
      document.getElementById(tabName).classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  tabNav();
});

// DARK MODE //

function darkMode() {
  const darkModeButtons = document.querySelectorAll(".darkMode-btn");
  const index = document.querySelectorAll("main");

  darkModeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      index.forEach((main) => {
        main.classList.toggle("dark-mode");
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  darkMode();
});

// FILTRAGE //

function filterCards() {
  const filterAll = document.getElementById("BtnAll");
  const filterGryff = document.getElementById("BtnGryff");
  const filterPouff = document.getElementById("BtnPouff");
  const filterSerdaigle = document.getElementById("BtnSerdaigle");
  const filterSerpentard = document.getElementById("BtnSerpen");

  const filterButtons = [
    filterAll,
    filterGryff,
    filterPouff,
    filterSerdaigle,
    filterSerpentard,
  ];

  filterButtons.forEach((button) => {
    // Pour chaque bouton du filtre
    button.addEventListener("click", () => {
      // Quand on clique sur un bouton
      filterButtons.forEach((btn) => {
        // Pour chaque bouton du filtre on enlève la classe active
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const maison = button.getAttribute("data-type");
      console.log(maison);

      filterCardsByType(maison);
    });
  });

  function filterCardsByType(maison) {
    const cards = document.querySelectorAll(".card_container");
    cards.forEach((card) => {
      const cardType = card.getAttribute("data-type");
      if (maison === "all" || maison === cardType) {
        card.style.display = "block"; // Afficher les cartes correspondantes
      } else {
        card.style.display = "none"; // Cacher les cartes qui ne correspondent pas
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  filterCards();
});

// SWIPER //

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 3000,
    },
  });
});

// FORMULAIRE //

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  // Annule le comportement par défaut (envoie le formulaire)
  event.preventDefault();

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let email = document.querySelector("#email");

  if (email.value === "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    let err = document.createElement("li");

    err.innerText = "Le champ email ne peut pas être vide";
    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  let pseudo = document.querySelector("#pseudo");

  if (pseudo.value.length < 6) {
    errorContainer.classList.add("visible");
    pseudo.classList.remove("success");

    let err = document.createElement("li");

    err.innerText = "Le pseudo doit faire au moins 6 caractères";
    errorList.appendChild(err);
  } else {
    pseudo.classList.add("success");
  }

  let passCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/;
  let password = document.querySelector("#password");

  if (password.value.length < 10 || !passCheck.test(password.value)) {
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    let err = document.createElement("li");

    err.innerText =
      "Le mot de passe doit faire au moins 10 caractères et doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.";
    errorList.appendChild(err);
  } else {
    password.classList.add("success");
  }

  let successContainer = document.querySelector(".message-success");

  if (
    email.classList.contains("success") &&
    pseudo.classList.contains("success") &&
    password.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});
