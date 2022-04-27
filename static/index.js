var randomNumber1 = Math.floor(Math.random() * 6 + 1);
document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

var whoWin = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    whoWin.textContent = "🚩Player1 Wins!";
} 
else if (randomNumber1 < randomNumber2) {
    whoWin.textContent = "Player2 Wins!🚩";
} 
else {
    whoWin.textContent = "Draw!";
}