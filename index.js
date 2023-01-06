let startingScoreH = 0
let startingScoreG = 0

let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")

function plusH1(){
    startingScoreH += 1
    homeScore.textContent = startingScoreH
}

function plusH2(){
    startingScoreH += 2
    homeScore.textContent = startingScoreH
}

function plusH3(){
    startingScoreH += 3
    homeScore.textContent = startingScoreH
}

function plusG1(){
    startingScoreG += 1
    guestScore.textContent = startingScoreG
}

function plusG2(){
    startingScoreG += 2
    guestScore.textContent = startingScoreG
}

function plusG3(){
    startingScoreG += 3
    guestScore.textContent = startingScoreG
}