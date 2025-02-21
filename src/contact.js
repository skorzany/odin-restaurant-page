import {hours} from "./data";

export default function(container) {
    const headline = document.createElement("h1");
    headline.textContent = "ABOUT US";
    container.appendChild(headline);

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    container.appendChild(cardContainer);

    // Location card
    const locationCard = document.createElement("div");
    locationCard.classList.add("card", "location");
    locationCard.innerHTML = `
        <h3>LOCATION</h3>
        <p>123 Food St.<br/>Real City, XY 123456</p>
    `;
    cardContainer.appendChild(locationCard);

    // Hours card
    const hoursCard = document.createElement("div");
    hoursCard.classList.add("card", "hours");
    let cardHtml = `
        <h2>OPEN HOURS</h2>
        <ul>
    `;
    for(let obj of hours) {
        const item = `
            <li>
                <span class="days">${obj.day}</span>
                <div class="hrs-container">
                    <span class="hrs-open">${obj.opens}</span>
                    -
                    <span class="hrs-close">${obj.closes}</span>
                </div>
            </li>
        `;
        cardHtml += item;
    }
    hoursCard.innerHTML = cardHtml + "</ul>";
    cardContainer.appendChild(hoursCard);

    // Staff card
    const staffCard = document.createElement("div");
    staffCard.classList.add("card", "staff");
    staffCard.innerHTML = `
        <h3>OUR STAFF</h3>
        <p>Chef: Bob Bobbins<br/>
            Mobile: 123-456-789<br/>
            Email: bobby@restaurant.com
        </p>
    `;
    cardContainer.appendChild(staffCard);
}