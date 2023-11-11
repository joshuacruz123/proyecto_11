const body = document.querySelector("body");
const toogle = document.getElementById("toggle");

toogle.addEventListener('click', () => {
    toogle.classList.toggle("toggleBlanco");
    body.classList.toggle("toggleBlanco");
})