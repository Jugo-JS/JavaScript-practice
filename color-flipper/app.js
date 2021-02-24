const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomNummber = getRandomNummber();
    document.body.style.backgroundColor = colors[randomNummber];
    color.textContent = colors[randomNummber];
});

function getRandomNummber() {
    return Math.floor(Math.random() * colors.length);
}