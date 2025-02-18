import restaurantImage from "./picture.jpg";

export default function () {
    const container = document.body.querySelector("#content");

    const image = document.createElement("img");
    image.src = restaurantImage;
    container.appendChild(image);

    const headline = document.createElement("h1");
    headline.textContent = "Restaurant headline";
    container.appendChild(headline);

    const paragraph = document.createElement("p");
    paragraph.textContent  = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur aliquam velit aliquam vehicula. Etiam fringilla lectus viverra purus posuere mattis. Suspendisse feugiat in arcu a tempus. Maecenas eu massa nisi. Mauris vitae sem non purus sodales commodo rutrum sit amet nisi. Quisque id turpis venenatis, dictum mi finibus, facilisis elit. Donec at risus ultrices, convallis risus ut, commodo dui.";
    container.appendChild(paragraph);
}