const sliders = document.querySelectorAll(".slider");
let counter = 0;

const hamburger_button = document.querySelector(".hamburger-button");
const close_button = document.querySelector(".close-button");
const sidebar = document.querySelector(".navbar-list ul");
const menu_item = document.querySelectorAll(".navbar-list a");

hamburger_button.addEventListener("click", () => {
  sidebar.classList.toggle("is-active");
  close_button.classList.toggle("is-active");
});

close_button.addEventListener("click", () => {
  sidebar.classList.toggle("is-active");
  close_button.classList.toggle("is-active");
});

for (let i = 0; i < menu_item.length; i++) {
  menu_item[i].addEventListener("click", () => {
    sidebar.classList.toggle("is-active");
    close_button.classList.toggle("is-active");
  });
}

sliders.forEach((slider, index) => {
  slider.style.left = `${index * 100}%`;
});

const sliderImage = () => {
  sliders.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const goPrev = () => {
  if (counter > 0) {
    counter--;
    sliderImage();
  }
};

const goNext = () => {
  if (counter >= 10) {
    counter = -1;
  }
  counter++;
  sliderImage();
};
