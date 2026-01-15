let gruntTile;
let auditorTile;
let engineerTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setGrunt, 800); 
    setInterval(setAuditor, 2000); 
    setInterval(setEngineer, 850);
}

function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setGrunt() {
    if (gameOver) {
        return;
    }
    if (gruntTile) {
        gruntTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "/Whack-A-Mole/img/Grunt_modern.webp";

    let num = getRandomTile();
    if (auditorTile && auditorTile.id == num) {
        return;
    }
    gruntTile = document.getElementById(num);
    gruntTile.appendChild(mole);
}

/*function setEngineer() {
    if (gameOver) {
        return;
    }
    if (engineerTile) {
        engineerTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "/Whack-A-Mole/img/Engineer_modern.webp";

    let num = getRandomTile();
    if (auditorTile && auditorTile.id == num) {
        return;
    }
    engineerTile = document.getElementById(num);
    engineerTile.appendChild(mole);
}*/

/*function setAuditor() {
    if (gameOver) {
        return;
    }
    if (auditorTile) {
        auditorTile.innerHTML = "";
    }
    let auditor = document.createElement("img");
    auditor.src = "/Whack-A-Mole/img/TRANS_AUD12.webp";

    let num = getRandomTile();
    if (gruntTile && gruntTile.id == num) {
        return;
    }
    auditorTile = document.getElementById(num);
    auditorTile.appendChild(auditor);
}*/

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == gruntTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
   /* if (this == engineerTile){
        score += 20;
        document.getElementById("score").innerText = score.toString(); //update score html
    }*/
    /*else if (this == auditorTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }*/
}