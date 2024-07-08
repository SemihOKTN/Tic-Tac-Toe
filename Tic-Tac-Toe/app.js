const o = "<i class='fa-solid fa-o fa-3x'>";
const x = "<i class='fa-solid fa-xmark fa-3x'>";

const playGround = document.querySelector('.playGround');
const squares = document.querySelectorAll('.tictactoe div');

// playground
const player1PlayGroundName = document.querySelector('.playGround #player1Name');
const player2PlayGroundName = document.querySelector('.playGround #player2Name');
const player1PlayGroundScore = document.querySelector('.playGround #player1Score');
const player2PlayGroundScore = document.querySelector('.playGround #player2Score');

// winlines
const winLine1 = document.querySelector('.tictactoe #winLine1');
const winLine2 = document.querySelector('.tictactoe #winLine2');
const winLine3 = document.querySelector('.tictactoe #winLine3');
const winLine4 = document.querySelector('.tictactoe #winLine4');
const winLine5 = document.querySelector('.tictactoe #winLine5');
const winLine6 = document.querySelector('.tictactoe #winLine6');
const winLine7 = document.querySelector('.tictactoe #winLine7');
const winLine8 = document.querySelector('.tictactoe #winLine8');

// gamestart
const gameStartContainer = document.querySelector('.gameStart');
let player1StartName = document.querySelector('#player1StartName');
let player2StartName = document.querySelector('#player2StartName');
const player1Ready = document.querySelector('#player1Ready');
const player2Ready = document.querySelector('#player2Ready');
const startGameBtn = document.querySelector('#startGameBtn');
let player1Name = "";
let player2Name = "";

// endgame icon popup
const popupX = document.querySelector('.winPopup .fa-xmark');
const popupO = document.querySelector('.winPopup .fa-o');

// endgame scoreboard
const gameOverScoreboard = document.querySelector('.gameOverScoreboard');
const scoreBoardIcon = document.querySelector('.gameOverScoreboard i');
const whoWins = document.querySelector('.gameOverScoreboard .whoWins');
const scoreBoardPlayer1Name = document.querySelector('.gameOverScoreboard #scoreBoardPlayer1Name');
const scoreBoardPlayer2Name = document.querySelector('.gameOverScoreboard #scoreBoardPlayer2Name');
const scoreBoardPlayer1Score = document.querySelector('.gameOverScoreboard #scoreBoardPlayer1Score');
const scoreBoardPlayer2Score = document.querySelector('.gameOverScoreboard #scoreBoardPlayer2Score');
const quitBtn = document.querySelector('#quitBtn');
const continueBtn = document.querySelector('#continueBtn');


let turn = true;
let oClicked = [];
let xClicked = [];

let xScore = 0; 
let oScore = 0;

const wins = [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],
    ["1","4","7"],
    ["2","5","8"],
    ["3","6","9"],
    ["1","5","9"],
    ["3","5","7"]
]

squares.forEach(box => {
    box.addEventListener('click', function(){
        if(turn) {
            box.innerHTML = x;
            setTimeout(() => box.classList.add('reveal'), 0);
            box.classList.add('pe-none');
            turn = false;
            xClicked.push(box.getAttribute('id'));
            // wins.forEach(e => {
            //     let isXWon = e.every(i => xClicked.includes(i));
            //     if(isXWon) {
            //         console.log('x kazandi');
            //         // winLine1.classList.add('full');
            //         winLine1.style.width = '66%';
            //     }   
            // })  
            for (let i=0; i<8; i++) {
                let isXWon = wins[i].every(j => xClicked.includes(j));
                if(isXWon) {
                    console.log('x kazandi');
                    xScore++;
                    // winLine1.classList.add('full');
                    switch(i) {
                        case 0:
                            winLine1.style.width = '66%';
                            winLine1.style.background = '#03AED2'
                            break;
                        case 1:
                            winLine2.style.width = '66%';
                            winLine2.style.background = '#03AED2'
                            break;
                        case 2:
                            winLine3.style.width = '66%';
                            winLine3.style.background = '#03AED2'
                            break;
                        case 3:
                            winLine4.style.height = '66%';
                            winLine4.style.background = '#03AED2'
                            break;
                        case 4:
                            winLine5.style.height = '66%';
                            winLine5.style.background = '#03AED2'
                            break;
                        case 5:
                            winLine6.style.height = '66%';
                            winLine6.style.background = '#03AED2'
                            break;
                        case 6:
                            winLine7.style.width = '96%';
                            winLine7.style.background = '#03AED2'
                            break;
                        case 7:
                            winLine8.style.width = '96%';
                            winLine8.style.background = '#03AED2'
                            break;
                    }
                    playGround.classList.add('pe-none');
                    whoWins.innerHTML = player1Name + ' Wins';
                    setTimeout(() => {
                        playGround.classList.add('animate__zoomOut');
                    }, 700)
                    setTimeout(() => {
                        popupX.style.opacity = "1";
                        popupX.classList.add('animate__zoomIn');
                    }, 800);  
                    setTimeout(() => {
                        // popupX.style.opacity = "1";
                        popupX.classList.remove('animate__zoomIn');
                        popupX.classList.add('animate__backOutLeft');
                    }, 1800);
                    setTimeout(() => {
                        scoreBoardIcon.className =  "fa-solid fa-xmark fa-5x";
                        gameOverScoreboard.classList.add('active');
                        gameOverScoreboard.classList.add('animate__zoomIn');
                        scoreBoardPlayer1Score.innerHTML = xScore;
                    }, 2000);
                    gameOverScoreboard.classList.remove('pe-none');
                    player1PlayGroundScore.innerHTML = xScore;
                } 
            }
        } else {
            box.innerHTML = o;
            setTimeout(() => box.classList.add('reveal'), 0);
            box.classList.add('pe-none');
            turn = true;
            oClicked.push(box.getAttribute('id'));
            // wins.forEach(e => {
            //     let isOWon = e.every(i => oClicked.includes(i));
            //     if(isOWon) {
            //         console.log('o kazandi');
            //     }   
            // })  
            for (let i=0; i<8; i++) {
                let isOWon = wins[i].every(j => oClicked.includes(j));
                if(isOWon) {
                    console.log('o kazandi');
                    oScore++;
                    // winLine1.classList.add('full');
                    switch(i) {
                        case 0:
                            winLine1.style.width = '66%';
                            winLine1.style.background = '#FF0080'
                            break;
                        case 1:
                            winLine2.style.width = '66%';
                            winLine2.style.background = '#FF0080'
                            break;
                        case 2:
                            winLine3.style.width = '66%';
                            winLine3.style.background = '#FF0080'
                            break;
                        case 3:
                            winLine4.style.height = '66%';
                            winLine4.style.background = '#FF0080'
                            break;
                        case 4:
                            winLine5.style.height = '66%';
                            winLine5.style.background = '#FF0080'
                            break;
                        case 5:
                            winLine6.style.height = '66%';
                            winLine6.style.background = '#FF0080'
                            break;
                        case 6:
                            winLine7.style.width = '96%';
                            winLine7.style.background = '#FF0080'
                            break;
                        case 7:
                            winLine8.style.width = '96%';
                            winLine8.style.background = '#FF0080'
                            break;
                    }
                    playGround.classList.add('pe-none');
                    whoWins.innerHTML = player2Name + ' Wins';
                    setTimeout(() => {
                        playGround.classList.add('animate__zoomOut');
                    }, 700)
                    setTimeout(() => {
                        popupO.style.opacity = "1";
                        popupO.classList.add('animate__zoomIn');
                    }, 800);  
                    setTimeout(() => {
                        // popupX.style.opacity = "1";
                        popupO.classList.remove('animate__zoomIn');
                        popupO.classList.add('animate__backOutRight');
                    }, 1800);
                    setTimeout(() => {
                        scoreBoardIcon.className =  "fa-solid fa-o fa-5x";
                        gameOverScoreboard.classList.add('active');
                        gameOverScoreboard.classList.add('animate__zoomIn');
                        scoreBoardPlayer2Score.innerHTML = oScore;
                    }, 2000);
                    gameOverScoreboard.classList.remove('pe-none');
                    player2PlayGroundScore.innerHTML = oScore;
                } 
            }
        }
    })
})


player1Ready.addEventListener('click', () => {  
    let isReady = player1Ready.getAttribute('isReady');
    if (player1StartName.value == "") {
        player1StartName.setAttribute('placeholder', 'Plase enter a name first');
        setTimeout(() => {player1StartName.setAttribute('placeholder', "Enter X Player's Name");},1200);
    } else {
        if (isReady == 'unready') {
            player1Ready.className = "fa-solid fa-square-check fa-2x text-success";
            player1Ready.setAttribute('isReady', 'ready');
            player1Name = player1StartName.value;
            player1StartName.classList.add('pe-none');
            scoreBoardPlayer1Name.innerText = player1Name;
            player1PlayGroundName.innerHTML = player1Name;
        } else {
            player1Ready.className = "fa-solid fa-square-xmark fa-2x text-danger";
            player1Ready.setAttribute('isReady', 'unready');
            player1StartName.classList.remove('pe-none');
        }
    }
})

player2Ready.addEventListener('click', () => {
    let isReady = player2Ready.getAttribute('isReady');
    if (player2StartName.value == "") {
        player2StartName.setAttribute('placeholder', 'Plase enter a name first');
        setTimeout(() => {player2StartName.setAttribute('placeholder', "Enter X Player's Name");},1200);
    } else {
        if (isReady == 'unready') {
            player2Ready.className = "fa-solid fa-square-check fa-2x text-success";
            player2Ready.setAttribute('isReady', 'ready');
            player2Name = player2StartName.value;
            player2StartName.classList.add('pe-none');
            scoreBoardPlayer2Name.innerText = player2Name;
            player2PlayGroundName.innerHTML = player2Name;
        } else {
            player2Ready.className = "fa-solid fa-square-xmark fa-2x text-danger";
            player2Ready.setAttribute('isReady', 'unready');
            player2StartName.classList.remove('pe-none');
        }
    }
})


startGameBtn.addEventListener('click', () => {
    let isXReady = player1Ready.getAttribute('isReady');
    let isOReady = player2Ready.getAttribute('isReady');
    if (isXReady == 'ready' && isOReady == 'ready') {
        setTimeout(() => {
            gameStartContainer.classList.add('animate__backOutUp');
        },100);
        setTimeout(() => {
            playGround.classList.remove('opacity-0');
            playGround.classList.remove('pe-none');
            playGround.classList.add('animate__backInUp');
        }, 200);
    } else {
        console.log('baslatamam');
        const alert = document.querySelector('.alert');
        alert.classList.remove('d-none');
        setTimeout(() => {alert.classList.add('d-none')}, 2000);
    }    
})

continueBtn.addEventListener('click', () => {
    // gameOverScoreboard.classList.remove('active');
    gameOverScoreboard.classList.remove('animate__zoomIn');
    gameOverScoreboard.classList.add('animate__rollOut');
    playGround.classList.remove('animate__zoomOut');
    playGround.classList.add('animate__zoomIn');
    playGround.classList.remove('pe-none');
    squares.forEach(boxx => {
        boxx.innerHTML = "";
        boxx.classList.remove('pe-none');
        boxx.classList.remove('reveal');
    })
    oClicked = [];
    xClicked = [];
    winLine1.style.width = "0";
    winLine2.style.width = "0";
    winLine3.style.width = "0";
    winLine4.style.height = "0";
    winLine5.style.height = "0";
    winLine6.style.height = "0";
    winLine7.style.width = "0";
    winLine8.style.width = "0";
    gameOverScoreboard.classList.add('pe-none');
})

quitBtn.addEventListener('click', () => {
    gameOverScoreboard.classList.remove('animate__zoomIn');
    gameOverScoreboard.classList.add('animate__flipOutY');
    gameOverScoreboard.classList.add('pe-none');
    gameStartContainer.classList.remove('animate__backOutUp');
    gameStartContainer.classList.add('animate__flipInY');
    playGround.classList.remove('animate__backInUp');
    playGround.classList.add('pe-none');    
    playGround.classList.add('opacity-0');    
    playGround.classList.remove('animate__zoomOut');
    playGround.classList.remove('animate__backInUp');
    playGround.classList.remove('animate__zoomIn');
    setTimeout(() => {
        gameStartContainer.classList.remove('animate__flipInY');
    },500);
    squares.forEach(boxx => {
        boxx.innerHTML = "";
        boxx.classList.remove('pe-none');
        boxx.classList.remove('reveal');
    })
    oClicked = [];
    xClicked = [];
    winLine1.style.width = "0";
    winLine2.style.width = "0";
    winLine3.style.width = "0";
    winLine4.style.height = "0";
    winLine5.style.height = "0";
    winLine6.style.height = "0";
    winLine7.style.width = "0";
    winLine8.style.width = "0";
    oScore = 0;
    xScore = 0;
    player1StartName.value = "";
    player2StartName.value = "";
    player1Ready.setAttribute('isReady', 'unready');
    player2Ready.setAttribute('isReady', 'unready');
    scoreBoardPlayer1Score.innerHTML = "0";
    scoreBoardPlayer2Score.innerHTML = "0";
    player1Ready.className = "fa-solid fa-square-xmark fa-2x text-danger";
    player2Ready.className = "fa-solid fa-square-xmark fa-2x text-danger";
    player1StartName.classList.remove('pe-none');
    player2StartName.classList.remove('pe-none');
    turn = true;
    player1PlayGroundScore.innerHTML = "0";
    player2PlayGroundScore.innerHTML = "0";
})