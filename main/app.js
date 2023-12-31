const scrollHeader = () =>{ 
    const header = document.getElementById("navbar")
    this.scrollY >= 250 ? header.classList.add('scroll-header')
                        : header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


// locomotive

const body = document.body;
const backToTop = document.querySelector(".back-to-top");
const opacityClass = "opacity-0";
const visibilityClass = "invisible";

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
  multiplier: 0.5,
}); 

const arrayOfColors = [
  "#0a9396",
  "#005f73",
  "#ae2012",
  "#3d405b",
  "#003049",
  "#bc6c25",
  "#ff006e",
  "#ef476f",
  "#1982c4",
  "#ee964b",
  "#0ead69",
  "#390099",
  "#f6aa1c",
  "#54101d",
  "#2b2c28",
  "#85c7f2",
  "#e15a97",
  "#2b70e3",
  "#b36a5e"
];

function getRandomColor() {
  const arrayLength = arrayOfColors.length;
  const randomValue = Math.random() * arrayLength;
  const roundedNumber = Math.floor(randomValue);
  const color = arrayOfColors[roundedNumber];
  return color;
}

scroll.on("call", (value, way, obj) => {
  if (value === "randomizeTextColor") {
    if (way === "enter") {
      obj.el.style.color = getRandomColor();
    }
  } else if (value === "toggleBackToTop") {
    if (way === "enter") {
      backToTop.classList.add(opacityClass, visibilityClass);
    } else {
      backToTop.classList.remove(opacityClass, visibilityClass);
    }
  }
});

scroll.on("scroll", (instance) => {
  const visibleSubSectionHeading = document.querySelector(
    ".sub-section h2.is-inview"
  );

  if (visibleSubSectionHeading) {
    const parentSection = visibleSubSectionHeading.parentElement.parentElement;
    body.style.backgroundColor = parentSection.dataset.bgColor;
  } else {
    body.style.backgroundColor = "";
  }
});

//footer

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

//sign up login

document.getElementById('contact').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the anchor link
  toggleFormVisibility();
});

function toggleFormVisibility() {
  var formWrap = document.querySelector('.form-wrap');
  formWrap.style.display = (formWrap.style.display === 'none' || formWrap.style.display === '') ? 'block' : 'none';
}

//gsap

  


