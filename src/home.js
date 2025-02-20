import restaurantImage from "./picture.jpg";

export default function (container) {
    const image = document.createElement("img");
    image.src = restaurantImage;
    image.alt = "A laid table";
    container.appendChild(image);

    const headline = document.createElement("h1");
    headline.textContent = "Fancy-Restaurant-Name";
    container.appendChild(headline);

    const paragraph = document.createElement("p");
    paragraph.textContent  = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur aliquam velit aliquam vehicula. Etiam fringilla lectus viverra purus posuere mattis. Suspendisse feugiat in arcu a tempus. Maecenas eu massa nisi. Mauris vitae sem non purus sodales commodo rutrum sit amet nisi. Quisque id turpis venenatis, dictum mi finibus, facilisis elit. Donec at risus ultrices, convallis risus ut, commodo dui.";
    container.appendChild(paragraph);
}