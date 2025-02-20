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
    const locationHeadline = document.createElement("h3");
    locationHeadline.textContent = "LOCATION";
    const locationDetails = document.createElement("p");
    locationDetails.innerHTML = "123 Food St.<br/>Real City, XY 123456";
    locationCard.appendChild(locationHeadline);
    locationCard.appendChild(locationDetails);
    cardContainer.appendChild(locationCard);

    // Hours card
    const hoursCard = document.createElement("div");
    hoursCard.classList.add("card", "hours");
    const hoursHeadline = document.createElement("h2");
    hoursHeadline.textContent = "OPEN HOURS";
    hoursCard.appendChild(hoursHeadline);
    const hoursDetails = document.createElement("ul");
    const details = [
        {day: "Monday - Thursday", opens: "10AM", closes: "10PM",},
        {day: "Friday", opens: "10AM", closes: "2AM",},
        {day: "Saturday - Sunday", opens: "8AM", closes: "10PM",},
    ];
    for(let obj of details) {
        const item = document.createElement("li");
        const days = document.createElement("span");
        days.textContent = obj.day;
        days.classList.add("days");
        item.appendChild(days);
        const hrsContainer = document.createElement("div");
        hrsContainer.classList.add("hrs-container");
        item.appendChild(hrsContainer);
        const open = document.createElement("span");
        open.textContent = obj.opens;
        open.classList.add("hrs-open");
        const separator = document.createElement("span");
        separator.textContent = "-";
        const close = document.createElement("span");
        close.textContent = obj.closes;
        close.classList.add("hrs-close");
        for(let span of [open, separator, close]) hrsContainer.appendChild(span);
        hoursDetails.appendChild(item);
    }
    hoursCard.appendChild(hoursDetails);
    cardContainer.appendChild(hoursCard);

    // Staff card
    const staffCard = document.createElement("div");
    staffCard.classList.add("card", "staff");
    const staffHeadline = document.createElement("h3");
    staffHeadline.textContent = "OUR STAFF";
    const staffInfo = document.createElement("p");
    staffInfo.innerHTML = "Chef: Bob Bobbins<br/>Mobile: 123-456-789<br/>Email: bobby@restaurant.com<br/>";
    staffCard.appendChild(staffHeadline);
    staffCard.appendChild(staffInfo);
    cardContainer.appendChild(staffCard);
}