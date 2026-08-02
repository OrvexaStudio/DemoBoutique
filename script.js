document.addEventListener("DOMContentLoaded", () => {


// =============================
// NAVBAR SCROLL EFFECT
// =============================


const nav = document.querySelector("nav");


window.addEventListener("scroll", () => {


if(window.scrollY > 80){

nav.style.background = "rgba(0,0,0,0.75)";
nav.style.backdropFilter = "blur(10px)";
nav.style.transition = "0.4s";


}else{

nav.style.background = "transparent";

}


});








// =============================
// SCROLL REVEAL
// =============================


const elements = document.querySelectorAll(
".intro, .cards article, .banner, .contact"
);



elements.forEach(element => {

element.style.opacity = "0";
element.style.transform = "translateY(40px)";
element.style.transition = "1s ease";

});




const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0)";

observer.unobserve(entry.target);

}


});


},{
threshold:0.15
});




elements.forEach(element=>{

observer.observe(element);

});








// =============================
// SMOOTH BUTTON EXPERIENCE
// =============================


const links = document.querySelectorAll(
'a[href^="#"]'
);


links.forEach(link=>{


link.addEventListener("click", function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});








// =============================
// FOOTER YEAR
// =============================


const year =
document.querySelector(".year");


if(year){

year.textContent =
new Date().getFullYear();

}



});
