const container = document.querySelector(".navbar-btn-container");
const mainBtn = document.querySelector(".navbar-btn");

const btnBG1 = document.querySelector(".navbar-btn-bg1");
const btnBG2 = document.querySelector(".navbar-btn-bg2");

const containerRedBtn = document.querySelector('.container-redBtn');
const redBtn = document.querySelector('.redBtn');


// console.log(btnBG1, btnBG2);

// NavBar Button Red Background.

mainBtn.addEventListener("mouseover", function () {
  btnBG1.style.opacity = "1";
});

mainBtn.addEventListener("mouseleave", function () {
  btnBG1.style.opacity = "0";
});

mainBtn.addEventListener("mouseover", function () {
  btnBG2.style.opacity = "1";
});

mainBtn.addEventListener("mouseleave", function () {
  btnBG2.style.opacity = "0";
});


// Red Btn

redBtn.addEventListener('mouseover',function(){
  containerRedBtn.style.transform = ('scale(0.9)');
})
redBtn.addEventListener('mouseleave',function(){
  containerRedBtn.style.transform = ('scale(1)');
})


// Scrolling And NavBar Btns


const toolSec = document.querySelector('#Tools');
// console.log(toolSec);


