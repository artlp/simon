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
        gameStarted = true;
    } else {
        // console.log("DICK");
    }
}
$(document).keypress(start);

function nextSequence() {
    // randomNumber = Math.floor(Math.random() * 4);
    userClickedPattern = [];
    level++;
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
    $("#level-title").text("Level " + level);
    // gameStarted = true;

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
        checkAnswer(userClickedPattern.length - 1); // ! WTF
    };
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

function checkAnswer(currentLevel) {
    let wrongAnswer = new Audio("sounds/wrong.mp3");
    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        // console.log("success");

        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(nextSequence, 1000);

        }

    } else {

        // console.log("wrong");
        wrongAnswer.play();
        $("body").addClass("game-over");
        setTimeout(function () { $("body").removeClass("game-over") }, 300);
        $("#level-title").text("You lost on level " + level + "! Press any key to restart");
        document.querySelector("body").addEventListener("keypress", startOver);
    }
};
function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    // console.log("RESTART");
    document.querySelector("body").removeEventListener("keypress", startOver);
    nextSequence();

}