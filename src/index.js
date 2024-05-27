import "./style.css";
import renderHome from "./js/renderHome.js";
import renderMenu from "./js/renderMenu.js";
import renderContact from "./js/renderContact.js";

const navbarDOM = document.querySelector(".nav");
const contentDOM = document.getElementById("content");

renderHome(contentDOM);

navbarDOM.addEventListener("click", function (e) {
  const childNodes = Array.from(this.children);
  if (
    e.target.classList.contains("tab") &&
    !e.target.classList.contains("active")
  ) {
    childNodes.forEach((n) => n.classList.remove("active"));
    e.target.classList.add("active");
  }
  switch (e.target.dataset.tab) {
    case "home":
      console.log("I clickec home tab");
      renderHome(contentDOM);
      break;
    case "menu":
      console.log("I clicked menu tab");
      renderMenu(contentDOM);
      break;
    case "contact":
      console.log("I clicked contact tab");
      renderContact(contentDOM);
      break;
  }
});
