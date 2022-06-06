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

//nav active
const navList = document.querySelector(".nav__list");
const navListMobile = document.querySelector(".nav__mobile__list");

navList.addEventListener("click", handleNavListClick);

function handleNavListClick(e) {
  if (e.target.nodeName === "A") {
    const activeNavItem = navList.querySelector(".nav--active");

    const activeNavMobileItem = navListMobile.querySelector(
      ".nav__mobile--active"
    );
    const isCurrentNavMobile = false;
    handleNavActiveToggles(
      e,
      isCurrentNavMobile,
      activeNavItem,
      activeNavMobileItem,
      navList,
      navListMobile
    );
  }
}

function handleNavActiveToggles(
  e,
  isCurrentNavMobile,
  currentActiveNavItem,
  currentOppositeActiveNavItem
) {
  currentActiveNavItem.classList.remove(
    isCurrentNavMobile ? "nav__mobile--active" : "nav--active"
  );
  e.target.classList.add(
    isCurrentNavMobile ? "nav__mobile--active" : "nav--active"
  );
  //Suppose isCurrentNavMobile is false
  //I want the styles of active mobile nav to change to the particular element I click on the desktop nav but with mobile styles on mobile navbar. I do this by sharing the link's hash which are the same on both navbars.
  const targetHash = e.target.hash;

  //changing mobile active state

  currentOppositeActiveNavItem.classList.remove(
    isCurrentNavMobile ? "nav--active" : "nav__mobile--active"
  );

  //I want the mobile menu to imitate the active state of the desktop navbar but with mobile styles
  currentOppositeActiveNavItem.parentNode.childNodes.forEach((oppositeLink) => {
    if (oppositeLink.hash === targetHash) {
      oppositeLink.classList.add(
        isCurrentNavMobile ? "nav--active" : "nav__mobile--active"
      );
    }
  });
}

navListMobile.addEventListener("click", handleNavListMobileClick);

function handleNavListMobileClick(e) {
  if (e.target.nodeName === "A") {
    const activeNavMobileItem = navListMobile.querySelector(
      ".nav__mobile--active"
    );
    const activeNavItem = navList.querySelector(".nav--active");
    const isCurrentNavMobile = true;

    handleNavActiveToggles(
      e,
      isCurrentNavMobile,
      activeNavMobileItem,
      activeNavItem
    );
  }
}

//Mobile Nav

const navListWrapperMobile = document.querySelector(".nav__mobile__wrapper");
const navHamburger = document.querySelector(".nav__hamburger");

navHamburger.addEventListener("click", handleHamburgerClick);

function handleHamburgerClick() {
  navListWrapperMobile.classList.toggle("nav__mobile--hidden");
}
