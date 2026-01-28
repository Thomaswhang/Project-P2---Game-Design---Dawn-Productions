



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

// function setEngineer() {
//     if (gameOver) {
//         return;
//     }
//     if (engineerTile) {
//         engineerTile.innerHTML = "";
//     }
//     let mole = document.createElement("img");
//     mole.src = "/Whack-A-Mole/img/Engineer_modern.webp";

//     let num = getRandomTile();
//     if (auditorTile && auditorTile.id == num) {
//         return;
//     }
//     engineerTile = document.getElementById(num);
//     engineerTile.appendChild(mole);
// }

function setAuditor() {
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
}

