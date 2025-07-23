
// Splash Screen Code
document.querySelector('.splash-screen button').addEventListener('click', (e) => {
    document.querySelector('.splash-screen').classList.add('hide');
});

// Mobile Header Code
let menuOpen = false;
const menuBtn = document.querySelector('.mobile-header button');
const menuDiv = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', (e) => {
    if (!menuOpen) {
        menuBtn.classList.add('active');
        menuOpen = true;
        menuDiv.classList.add('active');
    } else {
        menuBtn.classList.remove('active');
        menuOpen = false;
        menuDiv.classList.remove('active');
    }
});

// Cookies Menu
const cookieBtn = document.querySelector('.cookies-btn');
const cookieMenu = document.querySelector('.cookies-menu');
const confirmBtn = document.querySelector('.cookies-menu button');

cookieBtn.addEventListener('click', (e) => {
    cookieMenu.classList.add('active');
});

confirmBtn.addEventListener('click', (e) => {
    cookieMenu.classList.remove('active');
});

if (window.innerWidth < 768) {
    cookieMenu.classList.add('active');
}
