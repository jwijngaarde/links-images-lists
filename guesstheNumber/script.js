function myFunction() {
    let persoon = prompt("Welkom! Wat is je naam");
    if (persoon != null) {
        document.getElementById("demo").innerHTML =
            "Hey " + persoon + "! Hoe gaat het vandaag?";
    }
}

let secretNum = Math.trunc(Math.random() * 25) + 1;
document.querySelector(`.number`).textContent = secretNum;
let message = document.querySelector(`.message`);
let score = 5;

document.querySelector(`.check`).addEventListener(`click`, function(event) {
    let highscore = 0;
    let guess = Number(document.querySelector(`.guess`).value);

    document.querySelector(`.score`).textContent = score;
    if (score !== 1) {
        if (guess !== secretNum) {
            console.log(score);
            score--;
            if (guess > secretNum) {
                message.textContent = `Wrong number, its too high, try again`;
            } else if (guess < secretNum) {
                message.textContent = `Wrong number, its too low , try again`;
            }
        } else {
            score > highscore ? (highscore += score) : (highscore = highscore);
            message.textContent = `Correct!!!`;
            console.log(highscore);
            document.querySelector(`.highscore`).textContent = highscore;
        }
    } else {
        message.textContent = `you lost the game`;
    }
});

document.querySelector(`.again`).addEventListener(`click`, function() {
    secretNum = Math.trunc(Math.random() * 25) + 1;
    document.querySelector(`.number`).textContent = secretNum;
    score = 5;
    document.querySelector(`.score`).value = 5;
    message.textContent = `Start guessing`;
    document.querySelector(`.guess`).value = ``;
});