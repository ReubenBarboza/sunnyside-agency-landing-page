/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");

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

})();

/******/ })()
;
//# sourceMappingURL=bundle66470bcd928f7635230c.js.map