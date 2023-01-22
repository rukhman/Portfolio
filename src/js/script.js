"use strict";

//=============== burger menu ==========================-------->
const burger = document.querySelector(".burger");
const nav = document.querySelector(".header__nav");
const persdata = document.querySelector(".header-wrapper");
const arrow = document.querySelector(".arrow");
burger.addEventListener("click", () => {
  nav.classList.toggle("menu");
  burger.classList.toggle("open");
});

//=============== nav ==========================-------->
const links = document.querySelectorAll(
  ".header__nav a[href], .your-site__link"
);

for (let link of links) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

//=============== about ==========================-------->

const aboutMore = document.querySelector(".about-more");
const aboutCotent = document.querySelector(".about-cotent");

aboutMore.addEventListener("click", () => {
  console.log(123);
  aboutCotent.classList.toggle("heigth");
});

//=============== skills & lang ==========================-------->
const skillList = document.querySelector(".skill-list");
const skillItems = document.querySelectorAll(".skill-item");
const lang = document.querySelector(".lang-list");

function getCoordsStart(elem) {
  let box = elem.getBoundingClientRect();
  return box.top + pageYOffset;
}
function getCoordsEnd(elem) {
  let box = elem.getBoundingClientRect();
  return box.bottom + pageYOffset;
}

let extraPX = 35;

function skillScroll() {
  const skillListYCoordsStart = getCoordsStart(skillList);
  const skillListYCoordsEnd = getCoordsEnd(skillList);
  const langStart = getCoordsStart(lang);
  const langEnd = getCoordsEnd(lang);
  const VHcenter = document.documentElement.clientHeight / 2;
  let scroll = window.scrollY + VHcenter;

  if (scroll > skillListYCoordsStart && scroll < skillListYCoordsEnd) {
    arrow.style.opacity = 0.3;
  } else {
    arrow.style.opacity = 0;
  }

  for (let i = 0; i < skillItems.length; i++) {
    let skillItemYCoordsStart = getCoordsStart(skillItems[i]);
    let skillItemYCoordsEnd = getCoordsEnd(skillItems[i]);
    if (
      scroll > skillItemYCoordsStart - extraPX &&
      scroll < skillItemYCoordsEnd + extraPX
    ) {
      skillItems[i].querySelector("span").classList.add("visi");
      skillItems[i].querySelector("img").classList.add("toleft");
    } else {
      skillItems[i].querySelector("span").classList.remove("visi");
      skillItems[i].querySelector("img").classList.remove("toleft");
    }
  }

  if (scroll > langStart - extraPX && scroll < langEnd + extraPX) {
    lang.classList.add("lang-effect");
  } else {
    lang.classList.remove("lang-effect");
  }
}

function checkMedia768(media) {
  if (media.matches) {
    window.removeEventListener("scroll", skillScroll);
  } else {
    window.addEventListener("scroll", skillScroll);
  }
}

let media768 = window.matchMedia("(min-width: 768px)");
media768.addListener(checkMedia768);
checkMedia768(media768);

//=============== other ==========================-------->

const ageTag = document.getElementById("age");
const myAge = new Date(1993, 0, 12).getFullYear();
ageTag.innerText = new Date().getFullYear() - myAge;
