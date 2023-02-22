const images = document.querySelectorAll(".slideshow-image");

function randomMovement() {
  const movements = ["left-to-right", "right-to-left", "top-to-bottom", "bottom-to-top", "zoom-in", "zoom-out"];
  return movements[Math.floor(Math.random() * movements.length)];
}

function randomOrder() {
  return Math.random() - 0.5;
}

function moveImage(image) {
  const movement = randomMovement();

  switch (movement) {
    case "left-to-right":
      image.style.left = "-100%";
      break;
    case "right-to-left":
      image.style.left = "100%";
      break;
    case "top-to-bottom":
      image.style.top = "-100%";
      break;
    case "bottom-to-top":
      image.style.top = "100%";
      break;
    case "zoom-in":
      image.style.transform = "scale(0)";
      break;
    case "zoom-out":
      image.style.transform = "scale(2)";
      break;
  }
}

function startSlideshow() {
  let index = 0;
  images[index].style.opacity = 1;
  moveImage(images[index]);

  setInterval(() => {
    index = (index + 1) % images.length;
    images[index].style.opacity = 1;
    images[index].style.transform = "scale(1)";
    moveImage(images[index]);

    setTimeout(() => {
      images[index].style.opacity = 0;
      images[index].style.transform = "scale(1)";
    }, 3000);
  }, 5000);
}

images.forEach((image) => {
  image.addEventListener("load", () => {
    image.classList.add(randomMovement());
  });
});

images.forEach((image) => {
  image.addEventListener("transitionend", () => {
    if (image.style.opacity === "0") {
      image.classList.remove(...image.classList);
      image.classList.add(randomMovement());
      image.style.top = "";
      image.style.bottom = "";
      image.style.left = "";
      image.style.right = "";
      image.style.transform = "";
    }
  });
});

images.forEach((image) => {
  image.style.order = Math.floor(Math.random() * images.length);
});

startSlideshow();
