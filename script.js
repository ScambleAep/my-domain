const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive Beech?",
    "Beech please...",
    "Onn Chinthich nok chakkare!",
    "Dont say no, I know you lie ammi...",
    "Kallatharam parayale...",
    "Ith nthayalum thookana...",
    "Sheri chotikula...",
    "Enta chakkare alle ! 🥹❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}