// Função para detectar o click do mouse
const drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach((button) => {
button.addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML.toLowerCase();
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
});

// Função para detectar o pressionamento da tecla
document.addEventListener("keydown", function (event) {
const keyPressed = event.key.toLowerCase();
makeSound(keyPressed);
buttonAnimation(keyPressed);
});

// Função para tocar o som correspondente à tecla/botão
function makeSound(key) {
switch (key) {
    case "a":
    new Audio("./sounds/crash.mp3").play();
    break;
    case "s":
    new Audio("./sounds/tom1.mp3").play();
    break;
    case "d":
    new Audio("./sounds/snare.mp3").play();
    break;
    case "g":
    new Audio("./sounds/kick-bass.mp3").play();
    break;
    case "j":
    new Audio("./sounds/tom3.mp3").play();
    break;
    case "k":
    new Audio("./sounds/tom2.mp3").play();
    break;
    case "l":
    new Audio("./sounds/crash.mp3").play();
    break;
    default:
    console.log("Tecla inválida: " + key);
}
}

// Função para animar o botão pressionado
function buttonAnimation(currentKey) {
const activeButton = document.querySelector("." + currentKey);
if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(() => {
    activeButton.classList.remove("pressed");
    }, 100);
}
}