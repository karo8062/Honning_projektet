//lav variablen "btn", der henviser til "toggle-btn"
//lav variablen "menu", der henviser til ".main-menu"
const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".menu");

//lav funktionen "toggleMenu()" med følgende funktionalitet:
function toggleMenu() {
  // a) toggle klassen "shown" på menu vha. classlist.toggle
  menu.classList.toggle("shown");
  let menuShown = menu.classList.contains("shown");
}

//tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);
