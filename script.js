const Menu = document.querySelector(".navigation");
const Bars = document.querySelector(".barsContainer");
Bars.addEventListener("click", () => {
  Bars.classList.toggle("active");
  Menu.classList.toggle("active");
});
let images = [
  "assets/pexels-uriel-mont-6271680.jpg",
  "assets/pexels-pixabay-163491.jpg",
  "assets/pexels-pixabay-163491.jpg",
];

// let divMore = document.createElement("div")
// images.forEach( => { 
// });

let hamburger = document.getElementById("ham");


