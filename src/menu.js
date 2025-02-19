export default function(container) {
    const headline = document.createElement("h1");
    headline.textContent = "MENU";
    container.appendChild(headline);

    const menuContainer = document.createElement("div");
    const menu = document.createElement("ol");
    const dishes = [
        {name: "Pizza", price: 50,},
        {name: "Pasta", price: 75,},
        {name: "Bread", price: 15,},
        {name: "Wine", price: 100,},
    ]
    for(let obj of dishes) {
        const dishBox = document.createElement("li");
        const nameBox = document.createElement("span");
        nameBox.textContent = obj.name;
        const priceBox = document.createElement("span");
        priceBox.textContent = `${obj.price}PLN`;
        dishBox.appendChild(nameBox);
        dishBox.appendChild(priceBox);
        menu.appendChild(dishBox);
    }
    menuContainer.appendChild(menu);
    container.appendChild(menuContainer);
}