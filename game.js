const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let randomNumber;
function nextSequence() {
    // randomNumber = Math.floor(Math.random() * 4);
    return randomNumber = Math.floor(Math.random() * 4);
};
nextSequence();
let randomChosenColor = buttonColors[randomNumber];
console.log(randomNumber, randomChosenColor);
gamePattern.push(randomChosenColor);
console.log(gamePattern);
$('#' + randomChosenColor).fadeOut(200).fadeIn(200);
let audioBlue = new Audio("sounds/blue.mp3");
let audioRed = new Audio("sounds/red.mp3");
let audioYellow = new Audio("sounds/yellow.mp3");
let audioGreen = new Audio("sounds/green.mp3");
if (randomChosenColor === "blue") {
    audioBlue.play();
} else if (randomChosenColor === "red") {
    audioRed.play();
} else if (randomChosenColor === "green") {
    audioGreen.play();
} else if (randomChosenColor === "yellow") {
    audioYellow.play();
}