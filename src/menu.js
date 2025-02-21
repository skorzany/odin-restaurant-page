import {menuImage, dishes} from "./data";

export default function(container) {
    const image = document.createElement("img");
    image.src = menuImage;
    image.alt = "A plate of pasta";
    container.appendChild(image);

    const headline = document.createElement("h1");
    headline.textContent = "MENU";
    container.appendChild(headline);

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    let menu = "<ul>";
    for(let obj of dishes) {
        const item = `
            <li>
                <span>${obj.name}</span>
                <span>${obj.price} PLN</span>
            </li>
        `;
        menu += item;
    }
    menuContainer.innerHTML = menu + "</ul>";
    container.appendChild(menuContainer);
}