function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == gruntTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    if (this == engineerTile){
        score += 20;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == auditorTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}