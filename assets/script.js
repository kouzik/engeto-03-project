const menuIcon = document.querySelector('.menu-icon i');
const menuIconContainer = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');
const menu = document.querySelector('.menu');
const menuItems = menu.querySelectorAll('li');
const form = document.querySelector('form');
const formName = document.querySelector('.fullName');
const formEmail = document.querySelector('.email');
const formPhrase = document.querySelector('.phrase');
const formPhraseCheck = document.querySelector('.phraseCheck');
const formNotification = document.querySelector('.formNotification');
const galleryImages = document.querySelectorAll('.img-wrapper');
const returnUpIcon = document.querySelector('.returnIcon');
const toggleMode = document.querySelector('.toggle-container');
const iconSun = document.querySelector('.fa-sun');
const iconMoon = document.querySelector('.fa-moon');
let colorMode = "light";

/* FUNCTIONS */

function toggleMenu() {
    if (menuIcon.classList.contains("fa-bars")) { 
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else if (menuIcon.classList.contains("fa-xmark")) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    } 
    menuList.style.display = (menuList.style.display === 'none' || menuList.style.display === '') ? 'block' : 'none';
}

function formCheck() {
    let fullName = formName.value
    let email = formEmail.value
    let phrase = formPhrase.value
    let phraseCheck = formPhraseCheck.value
    console.log(fullName, email, phrase, phraseCheck)
    if (fullName == '' || email == '' || phrase == '') displayNotification('Please fill in all fields.', 'rgb(255 134 140)');
    else if (phrase != phraseCheck) displayNotification('Secret phrases does not match.', 'rgb(255 134 140)');
    else {
        displayNotification('Thank you, I will contact you in no time.', 'rgb(157 255 137)');
        
        let inputFields = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
        inputFields.forEach(function(input) {
            input.value = '';
        });
    } 
}

function displayNotification(message, color) {
    formNotification.style.color = color;
    formNotification.textContent = message; 
}

function toggleColorMode() {
    if (colorMode == "dark") {
        document.documentElement.style.setProperty('--secondary-bg', '#6E6E6E');
        document.documentElement.style.setProperty('--gallery-bg', '#ffffff'); 
        document.documentElement.style.setProperty('--gallery-txt', '#000000'); 
        iconSun.style.display = 'block';
        iconMoon.style.display = 'none';
        colorMode = "light";
    }
    else if (colorMode == "light") {
        document.documentElement.style.setProperty('--secondary-bg', '#4A4A4A');
        document.documentElement.style.setProperty('--gallery-bg', '#000000'); 
        document.documentElement.style.setProperty('--gallery-txt', '#ffffff'); 
        iconSun.style.display = 'none';
        iconMoon.style.display = 'block';
        colorMode = "dark"
    }
}


/* EVENTS */

menuIcon.addEventListener('click', () => {
    toggleMenu();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formCheck();
})

galleryImages.forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.style.transform = "scale(1.03)";
    })
    element.addEventListener("mouseleave", () => {
        element.style.transform = "scale(1)";
    })    
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 30 ) returnUpIcon.style.display = "block"
    else returnUpIcon.style.display = "none"
})

returnUpIcon.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

menuItems.forEach(element => {
    element.addEventListener("click", () => {
        toggleMenu()
    })
});


toggleMode.addEventListener("click", () => {
    toggleColorMode();
})


