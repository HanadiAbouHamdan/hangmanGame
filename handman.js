
const words = ["lion", "tiger", "elephant", "giraffe", "monkey", "gorilla", "chimpanzee", "bear", "wolf", "fox", "deer", "moose", "elk", "kangaroo", "koala", "platypus", "dolphin", "whale", "shark", "octopus", "jellyfish", "crab", "lobster", "snail", "butterfly", "bee", "ant", "grasshopper", "spider", "snake", "lizard", "crocodile", "alligator", "turtle", "penguin", "ostrich", "emu", "chicken", "cow", "pig", "sheep", "goat"];
const word = words[Math.floor(Math.random() * words.length)];
const guesses = [];
const guesses_not_known = [];
const maxGuesses = 6;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.beginPath();
context.moveTo(50, 450);
context.lineTo(200, 450);
context.moveTo(125, 450);
context.lineTo(125, 50);
context.lineTo(300, 50);
context.lineTo(300, 100);
context.moveTo(275, 50);
context.lineTo(275, 100);
context.lineTo(225, 100);
context.lineTo(225, 125);
context.stroke();


let displayWord = "The name of the animal is: ";
for (let i = 0; i < word.length; i++) {
    displayWord += "_ ";
}
document.getElementById("word").innerHTML = displayWord;
document.addEventListener("keydown", function(event) {

    const key = event.key.toLowerCase();
    if (guesses.includes(key)) {
        document.getElementById("message").innerHTML = "You already guessed that letter.";
        return;
    }
    guesses.push(key);

    if (word.includes(key)) {
    
        displayWord = "The name of the animal is: ";
        for (let i = 0; i < word.length; i++) {
            if (guesses.includes(word[i])) {
                displayWord += word[i] + " ";
            } else {
                displayWord += "_ ";
            }
        }
        document.getElementById("word").innerHTML = displayWord;

        if (!displayWord.includes("_")) {
            document.getElementById("message").innerHTML = "Congratulations, you won!";
        }
    } else {
        guesses_not_known.push(key);
        document.getElementById("guesses").innerHTML = "Incorrect guesses: " + guesses_not_known.join(", ");

        switch (guesses_not_known.length) {
            case 1:
                
                context.beginPath();
                context.arc(275, 150, 25, 0, 2 * Math.PI);
                context.stroke();
                break;
                case 2:
                context.beginPath();
                context.moveTo(275, 175);
                context.lineTo(275, 275);
                context.stroke();
                break;
            case 3:
                context.beginPath();
                context.moveTo(275, 200);
                context.lineTo(225, 225);
                context.stroke();
                break;
            case 4:
                context.beginPath();
                context.moveTo(275, 200);
                context.lineTo(325, 225);
                context.stroke();
                break;
            case 5:
                context.beginPath();
                context.moveTo(275, 275);
                context.lineTo(225, 325);
                context.stroke();
                break;
            case 6:
                context.beginPath();
                context.moveTo(275, 275);
                context.lineTo(325, 325);
                context.stroke();

                document.getElementById("word").innerHTML = word.split("").join(" ");

                document.getElementById("message").innerHTML = "Game over, you lose!";
                document.getElementById("letter").innerHTML="No More Chances!";
                break;
        }
    }
});