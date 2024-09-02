let scoreHome = 0
let scoreGuest = 0
let scoreHomeDisplay = document.getElementById("score-home")
let scoreGuestDisplay = document.getElementById("score-guest")


function homePlusOne() {
    scoreHome += 1
    scoreHomeDisplay.textContent = scoreHome 
}

function homePlusTwo() {
    scoreHome += 2
    scoreHomeDisplay.textContent = scoreHome
}

function homePlusThree() {
    scoreHome += 3
    scoreHomeDisplay.textContent = scoreHome
}

function guestPlusOne() {
    scoreGuest += 1
    scoreGuestDisplay.textContent = scoreGuest 
}

function guestPlusTwo() {
    scoreGuest += 2
    scoreGuestDisplay.textContent = scoreGuest 
}

function guestPlusThree() {
    scoreGuest += 3
    scoreGuestDisplay.textContent = scoreGuest 
}