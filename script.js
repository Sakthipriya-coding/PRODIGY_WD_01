function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY || window.pageYOffset; // Consider cross-browser compatibility
    if (scroll < 200) {
        navbar.classList.remove('BgColour');
    } else {
        navbar.classList.add('BgColour');
    }
}

window.addEventListener('scroll', scrollValue);
