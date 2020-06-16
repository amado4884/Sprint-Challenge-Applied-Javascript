/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  const images = ["mountains", "computer", "trees", "turntable"];

  const carousel = document.createElement("div");
  carousel.classList.add("carousel");

  const leftButton = document.createElement("div");
  leftButton.classList.add("left-button");
  leftButton.textContent = " < ";
  leftButton.addEventListener("click", (e) => {
    let newIndex = parseInt(img.getAttribute("id")) - 1;
    newIndex = newIndex < 0 ? images.length - 1 : newIndex;

    img.classList.add("hidden");
    setTimeout(() => {
      img.src = `./assets/carousel/${images[newIndex]}.jpeg`;
      img.setAttribute("id", newIndex);
      img.classList.remove("hidden");
    }, 500);
  });
  carousel.appendChild(leftButton);

  const img = document.createElement("img");
  img.src = `./assets/carousel/${images[0]}.jpeg`;
  img.setAttribute("id", 0);
  carousel.appendChild(img);

  const rightButton = document.createElement("div");
  rightButton.classList.add("right-button");
  rightButton.textContent = " > ";
  rightButton.addEventListener("click", (e) => {
    let newIndex = parseInt(img.getAttribute("id")) + 1;
    newIndex = newIndex > images.length - 1 ? 0 : newIndex;
    img.classList.add("hidden");
    setTimeout(() => {
      img.src = `./assets/carousel/${images[newIndex]}.jpeg`;
      img.setAttribute("id", newIndex);
      img.classList.remove("hidden");
    }, 500);
  });
  carousel.appendChild(rightButton);

  return carousel;
}

const container = document.querySelector("div.carousel-container");
container.appendChild(Carousel());
