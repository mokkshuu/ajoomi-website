// MOBILE MENU

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// CLOSE MENU AFTER CLICK

document.querySelectorAll(".nav-link").forEach(n =>
    n.addEventListener("click", () => {
        navMenu.classList.remove("active");
    })
);


// SCROLL ANIMATION

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){

    entries.forEach(entry => {

        if(!entry.isIntersecting){
            return;
        }

        entry.target.classList.add("show");
        observer.unobserve(entry.target);

    });

}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// NAVBAR SHADOW

window.addEventListener("scroll", function(){

    const navbar = document.getElementById("navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    }else{
        navbar.style.boxShadow = "none";
    }

});


// BOOKING FORM

const form = document.getElementById("bookingForm");

if(form){
form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let service = document.getElementById("service").value;

    alert("Thank you " + name + "! Your " + service + " service has been booked.");

    form.reset();

});
}


// DOM CONTENT LOADED

document.addEventListener("DOMContentLoaded", function(){

const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

bookingForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Service booked successfully! Our professional will contact you.");

});

}

const partnerForm = document.getElementById("partnerForm");

if(partnerForm){

partnerForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you for joining Sevigo! Our team will contact you.");

});

}

});


// TESTIMONIAL CARD ANIMATION

const testimonialCards = document.querySelectorAll(".testimonial-card");

const testimonialObserver = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

}, { threshold: 0.2 });

testimonialCards.forEach(card => {

testimonialObserver.observe(card);

});
// DARK LIGHT MODE TOGGLE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

const icon = themeToggle.querySelector("i");

if(document.body.classList.contains("dark-mode")){
icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");
}else{
icon.classList.remove("fa-sun");
icon.classList.add("fa-moon");
}

});
function openAbout(){
document.getElementById("aboutPopup").style.display = "flex";
}

function closeAbout(){
document.getElementById("aboutPopup").style.display = "none";
}
function openHelp(){
document.getElementById("helpPopup").style.display="flex";
}

function closeHelp(){
document.getElementById("helpPopup").style.display="none";
}
function openTerms(){
document.getElementById("termsPopup").style.display="flex";
}

function closeTerms(){
document.getElementById("termsPopup").style.display="none";
}
function openPrivacy(){
document.getElementById("privacyPopup").style.display="flex";
}

function closePrivacy(){
document.getElementById("privacyPopup").style.display="none";
}
function openCareers(){
document.getElementById("careersPopup").style.display="flex";
}

function closeCareers(){
document.getElementById("careersPopup").style.display="none";
}

function openBlog(){
document.getElementById("blogPopup").style.display="flex";
}

function closeBlog(){
document.getElementById("blogPopup").style.display="none";
}
function openLogin(){
document.getElementById("loginPopup").style.display="flex";
}

function closeLogin(){
document.getElementById("loginPopup").style.display="none";
}
function openAppPopup(){
document.getElementById("appPopup").style.display="flex";
}

function closeAppPopup(){
document.getElementById("appPopup").style.display="none";
}
function openBooking(){
document.getElementById("bookingPopup").style.display="flex";
}

function closeBooking(){
document.getElementById("bookingPopup").style.display="none";
}


document.addEventListener("DOMContentLoaded", function(){

const popups = document.querySelectorAll(".popup");

popups.forEach(popup => {

    const content = popup.querySelector(".popup-content");

    popup.addEventListener("click", function(e){
        if(e.target === popup){
            popup.style.display = "none";
        }
    });

    if(content){
        content.addEventListener("click", function(e){
            e.stopPropagation();
        });
    }
});

document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        popups.forEach(p => p.style.display = "none");
    }
});

window.openTerms = () => openPopup("termsPopup");
window.openPrivacy = () => openPopup("privacyPopup");
window.openHelp = () => openPopup("helpPopup");
window.openAbout = () => openPopup("aboutPopup");
window.openCareers = () => openPopup("careersPopup");
window.openBlog = () => openPopup("blogPopup");
window.openLogin = () => openPopup("loginPopup");
window.openBooking = () => openPopup("bookingPopup");

window.closeTerms = () => closePopup("termsPopup");
window.closePrivacy = () => closePopup("privacyPopup");
window.closeHelp = () => closePopup("helpPopup");
window.closeAbout = () => closePopup("aboutPopup");
window.closeCareers = () => closePopup("careersPopup");
window.closeBlog = () => closePopup("blogPopup");
window.closeLogin = () => closePopup("loginPopup");
window.closeBooking = () => closePopup("bookingPopup");

function openPopup(id){
    const el = document.getElementById(id);
    el.style.display = "flex";

    const content = el.querySelector(".popup-content");
    if(content){
        content.scrollTop = 0;
    }
}

function closePopup(id){
    document.getElementById(id).style.display = "none";
}

});