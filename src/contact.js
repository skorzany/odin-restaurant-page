export default function(container) {
    const headline = document.createElement("h1");
    headline.textContent = "ABOUT US";
    container.appendChild(headline);

    // Location card
    const locationCard = document.createElement("div");
    const locationHeadline = document.createElement("h2");
    locationHeadline.textContent = "LOCATION";
    const locationDetails = document.createElement("p");
    locationDetails.innerHTML = "123 Food St.<br/>Real City, XY 123456";
    locationCard.appendChild(locationHeadline);
    locationCard.appendChild(locationDetails);
    container.appendChild(locationCard);

    // Hours card
    const hoursCard = document.createElement("div");
    const hoursHeadline = document.createElement("h2");
    hoursHeadline.textContent = "OPEN HOURS";
    hoursCard.appendChild(hoursHeadline);
    const hoursDetails = document.createElement("ul");
    const details = [
        {day: "Monday - Thursday", hours: "10AM - 10PM",},
        {day: "Friday", hours: "10AM - 2AM"},
        {day: "Saturday - Sunday", hours: "8AM - 10PM"},
    ];
    for(let obj of details) {
        const item = document.createElement("ul");
        const days = document.createElement("span");
        days.textContent = obj.day;
        const hours = document.createElement("span");
        hours.textContent = obj.hours;
        item.appendChild(days);
        item.appendChild(hours);
        hoursDetails.appendChild(item);
    }
    hoursCard.appendChild(hoursDetails);
    container.appendChild(hoursCard);

    // Staff card
    const staffCard = document.createElement("div");
    const staffHeadline = document.createElement("h2");
    staffHeadline.textContent = "OUR STAFF";
    const staffInfo = document.createElement("p");
    staffInfo.innerHTML = "Chef: Bob Bobbins<br/>Mobile: 123-456-789<br/>Email: bobby@restaurant.com<br/>";
    staffCard.appendChild(staffHeadline);
    staffCard.appendChild(staffInfo);
    container.appendChild(staffCard);
}