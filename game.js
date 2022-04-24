const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let randomNumber;
let userChosenColor;
let level = 0;
let gameStarted = false;

function start() {
    if (gameStarted === false) {
        nextSequence();
        $("#level-title").text("Your current level is " + level);
    } else {
        // console.log("DICK");
}
}
$(document).keypress(start);

function nextSequence() {
    // randomNumber = Math.floor(Math.random() * 4);
    randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    console.log(randomNumber, randomChosenColor);
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
    $('#' + randomChosenColor).fadeOut(200).fadeIn(200);
    // ! MANUALLY ASSIGNING SOUNDS LIKE A NOOB
    // let audioBlue = new Audio("sounds/blue.mp3");
    // let audioRed = new Audio("sounds/red.mp3");
    // let audioYellow = new Audio("sounds/yellow.mp3");
    // let audioGreen = new Audio("sounds/green.mp3");
    // if (randomChosenColor === "blue") {
    //     audioBlue.play();
    // } else if (randomChosenColor === "red") {
    //     audioRed.play();
    // } else if (randomChosenColor === "green") {
    //     audioGreen.play();
    // } else if (randomChosenColor === "yellow") {
    //     audioYellow.play();
    // }
    // ! ASSIGNING SOUNDS WITH A VARIABLE LIKE A BETTER PERSON
    // let sound = new Audio("sounds/"+randomChosenColor+".mp3");
    // sound.play();
    playSound(randomChosenColor);
    level++;
    $("#level-title").text("Your current level is " + level);
    gameStarted = true;

};

$(".btn").on("click", function (event) {
    if (gameStarted === true) {
    userChosenColor = event.target.id;
    // $(this).fadeOut(200).fadeIn(200);
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    animatePress();
    // let clickedSound = new Audio ("/sounds/"+userChosenColor+".mp3");
    // clickedSound.play();
    playSound(userChosenColor);
    checkResult();
    nextSequence();}
});

function playSound(color) {
    let sound = new Audio("sounds/" + color + ".mp3");
    sound.play();
};

function animatePress() {
    $("." + userChosenColor).addClass("pressed");
    setTimeout(function () {
        $("." + userChosenColor).removeClass("pressed")
    }, 200);
}
function checkResult() {
if (gamePattern === userClickedPattern) {
    alert("YOU LOST") }
    else {
        
    }
}