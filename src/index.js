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
const buttons = document.body.querySelectorAll("button");
buttons[0].classList.add("active");
generateHome(content);

for(const [idx, btn] of [...buttons.entries()]) {
    btn.addEventListener("click", () => {
        clearButtons();
        btn.classList.add("active");
        clearContent(content);
        switch(idx) {
            case 0: return generateHome(content);
            case 1: return generateMenu(content);
            case 2: return generateContact(content);
        };
    });
}