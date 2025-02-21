import "./reset.css";
import "./styles.css";
import generateHome from "./home.js";
import generateMenu from "./menu.js";
import generateContact from "./contact.js";

function clearContent(container) {
    container.replaceChildren();
}

function clearButtons() {
    for(let btn of buttons) btn.classList.remove("active");
}
// ======== END OF IMPORTS & UTILS ========


const content = document.body.querySelector("#content");
const buttons = document.body.querySelectorAll("header nav button");
const [home, menu, contact] = [...buttons];
home.classList.add("active");
generateHome(content);

home.addEventListener("click", (e) => {
    clearButtons();
    e.target.classList.add("active");
    clearContent(content);
    generateHome(content);
});

menu.addEventListener("click", (e) => {
    clearButtons();
    e.target.classList.add("active");
    clearContent(content);
    generateMenu(content);
});

contact.addEventListener("click", (e) => {
    clearButtons();
    e.target.classList.add("active");
    clearContent(content);
    generateContact(content);
});