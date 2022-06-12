import "./styles/main.scss";
// import imageTransformImage from "../images/desktop/image-transform.jpg";
// import imageStandOutImage from "../images/desktop/image-stand-out.jpg";

// const imageTransformElement = document.getElementById("image-transform");
// const imageStandOutElement = document.getElementById("image-stand-out");

// function addSrc(element, src) {
//   element.src = src;
// }
// function pushToElementImageMap(element, image) {
//   elementImageMap.push({ element, image });
// }

// const elementImageMap = [
//   //   { element: imageTransformElement, image: imageTransformImage },
//   //   { element: imageStandOutElement, image: imageStandOutImage },
// ];
// pushToElementImageMap(imageTransformElement, imageTransformImage);
// pushToElementImageMap(imageStandOutElement, imageStandOutImage);

// elementImageMap.map((entry) => {
//   addSrc(entry.element, entry.image);
// });

//expand nav
const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector("#menu");
menuBtn.addEventListener("click", () => {
  menu.classList.add("activated");
  let isExpanded = JSON.parse(menuBtn.getAttribute("aria-expanded"));
  menuBtn.setAttribute("aria-expanded", isExpanded ? "false" : "true");
  isExpanded && setTimeout(() => menu.classList.add("hidden--mobile"), 400);
  !isExpanded && menu.classList.remove("hidden--mobile");
});

//active navitem

const navList = document.querySelector(".nav__list");
navList.addEventListener("click", (e) => {
  if (e.target.nodeName === "A") {
    const activeLink = document.querySelector(".nav--active");
    activeLink.classList.remove("nav--active");
    e.target.classList.add("nav--active");
  }
});
