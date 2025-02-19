import "./reset.css";
import "./styles.css";
import generateHome from "./home.js";
import generateMenu from "./menu.js";
import generateContact from "./contact.js";

const content = document.body.querySelector("#content");
const [home, menu, contact] = document.body.querySelectorAll("header nav button")

function clearContent(container) {
    container.replaceChildren();
}

generateHome(content);

home.addEventListener("click", () => {
    clearContent(content);
    generateHome(content);
});

menu.addEventListener("click", () => {
    clearContent(content);
    generateMenu(content);
});

contact.addEventListener("click", () => {
    clearContent(content);
    generateContact(content);
});