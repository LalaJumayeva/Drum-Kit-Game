const numberOfDrumButtons = document.querySelectorAll(".drum").length;

document.addEventListener("keydown", function (event) {
    console.log(event)

    let buttonID = event.key;
    playSound(buttonID);
    buttonAnimation(buttonID);
})

for (let i = 0; 1 < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonID = this.id;
        playSound(buttonID);
        buttonAnimation(buttonID);
    });
}

function playSound(lale) {
    let audio;
    switch (lale) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default:
            console.log(lale);
    }
}

function buttonAnimation(currentKey){
let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
setTimeout(function(){activeButton.classList.remove("pressed");}, 100);

}
