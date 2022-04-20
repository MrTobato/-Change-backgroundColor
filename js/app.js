const button = document.getElementById('btn');
const color = document.querySelector('.clr');

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',]

button.addEventListener('click', () => {
    let hexColor = generateHex();
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function generateHex() {
    let hexColor = '#';
    for (let i = 0; i<6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    return hexColor;
}