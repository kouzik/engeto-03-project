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
console.log(iconSun)




console.log(menuItems)

function toggleMenuIcon(icon) {
    if (icon.classList.contains("fa-bars")) { 
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else if (icon.classList.contains("fa-xmark")) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    } 
}

function displayNotification(message, color) {
    formNotification.style.color = color;
    formNotification.textContent = message; 
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

menuIcon.addEventListener('click', () => {
    toggleMenuIcon(menuIcon)
    menuList.style.display = (menuList.style.display === 'none' || menuList.style.display === '') ? 'block' : 'none';
});

form.addEventListener("submit", (e) => {
    e.preventDefault()
    formCheck()
})

galleryImages.forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.style.transform = "scale(1.03)"
    })
    element.addEventListener("mouseleave", () => {
        element.style.transform = "scale(1)"
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
        if (menuList.style.display === 'block') {
            menuList.style.display = 'none'
            toggleMenuIcon(menuIcon)
        }
    })
});

function setColorMode(mode) {
    if (mode == "light") {
        document.documentElement.style.setProperty('--secondary-bg', '#6E6E6E');
        document.documentElement.style.setProperty('--gallery-bg', '#ffffff'); 
        document.documentElement.style.setProperty('--gallery-txt', '#000000'); 
    }
    else if (mode == "dark") {
        document.documentElement.style.setProperty('--secondary-bg', '#4A4A4A');
        document.documentElement.style.setProperty('--gallery-bg', '#000'); 
        document.documentElement.style.setProperty('--gallery-txt', '#ffffff'); 
    }
}

toggleMode.addEventListener("click", () => {
    let iconSunDisplay = window.getComputedStyle(iconSun).getPropertyValue('display')
    if (iconSunDisplay === 'block') {
        iconSun.style.display = 'none';
        iconMoon.style.display = 'block';
        setColorMode("dark");
    }
    else {
        iconSun.style.display = 'block';
        iconMoon.style.display = 'none';
        setColorMode("light");
    }
})


