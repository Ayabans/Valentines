const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

noButton.addEventListener('click', () => {
    moveNoButton();
});

yesButton.addEventListener('click', () => {
    alert("Yay! Alam ko namang papayag ka. I love you so much My Loveee! 💖");
});

function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}