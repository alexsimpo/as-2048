window.addEventListener('load', init);

let gridArray = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
let score = 0;

const grid = document.querySelector('.grid-container');
const cells = document.querySelectorAll('.grid-item');
let scoreUpdate = document.querySelector('.score');
    txt = document.createTextNode(score);
    scoreUpdate.appendChild(txt);

function init() {
    setup();
    start();
    reset();
}

function coinToss() {
    if (Math.random() < 0.5) {
        return 2;
    } else {
        return 4;
    }
}

function squareValue() {
    return Math.round(Math.random() * 3);
}

function setup() {
    let value = squareValue(); let value2 = squareValue(); let value3 = squareValue(); let value4 = squareValue();
    while ((value == value3) && (value2 == value4)){
        value2 = squareValue();
    }
    let initialToss = coinToss(); let initialToss2 = coinToss();
    gridArray[value][value2] = initialToss; gridArray[value3][value4] = initialToss2;

    let square = document.querySelector(`#square-${value}-${value2}`);
    let squareTwo = document.querySelector(`#square-${value3}-${value4}`);
    square.innerHTML = initialToss;
    squareTwo.innerHTML = initialToss2;
    if (gridArray[value][value2] == 2) {
        square.style.color = "rgba(0, 0, 0, 0.75)";
        square.style.backgroundColor = "#FFD1C9";
    } else if (gridArray[value][value2] == 4) {
        square.style.color = "rgba(0, 0, 0, 0.75)";
        square.style.backgroundColor = "#FFCEDD";
    }
    if (gridArray[value3][value4] == 2) {
        squareTwo.style.color = "rgba(0, 0, 0, 0.75)";
        squareTwo.style.backgroundColor = "#FFD1C9";
    } else if (gridArray[value3][value4] == 4) {
        squareTwo.style.color = "rgba(0, 0, 0, 0.75)";
        squareTwo.style.backgroundColor = "#FFCEDD";
    }
}

function checkGridStatus() {
    for (i = 0;i < 4; i++){
        for (j = 0; j < 4; j++) {
            if(gridArray[i][j] == 0){
                return true;
            }
        }
    }
    return false;
}

function createNumber() {
    while (checkGridStatus()) {
        let value = squareValue(); let value2 = squareValue();
        let toss = coinToss();

        if (gridArray[value][value2] == 0) {
            gridArray[value][value2] = toss;
            let square = document.querySelector(`#square-${value}-${value2}`);
            square.innerHTML = toss;
            break;
        }
    }

    if (!checkGridStatus()) {
        console.log("loser loser");
    }
}

function updateGrid() {
    for (i = 0;i < 4; i++){
        for (j = 0; j < 4; j++) {
            let square = document.querySelector(`#square-${i}-${j}`);
            square.innerHTML = gridArray[i][j];
            if (gridArray[i][j] == 0){
                square.style.color = "rgba(255, 255, 255, 0)";
                square.style.backgroundColor = "#ffa4a2";
                square.style.fontSize = "4em";
                square.style.lineHeight = "1.75em";
            } else if (gridArray[i][j] == 2) {
                square.style.color = "rgba(0, 0, 0, 0.75)";
                square.style.backgroundColor = "#FFD1C9";
                square.style.fontSize = "4em";
                square.style.lineHeight = "1.75em";
            } else if (gridArray[i][j] == 4) {
                square.style.color = "rgba(0, 0, 0, 0.75)";
                square.style.backgroundColor = "#FFCEDD";
                square.style.fontSize = "4em";
                square.style.lineHeight = "1.75em";
            } else if (gridArray[i][j] == 8) {
                square.style.color = "rgba(255, 255, 255, 0.75)";
                square.style.backgroundColor = "#748EAD";
                square.style.fontSize = "4em";
                square.style.lineHeight = "1.75em";
            } else if (gridArray[i][j] == 16) {
                square.style.color = "rgba(255, 255, 255, 0.75)";
                square.style.backgroundColor = "#5374AD";
                square.style.fontSize = "4em";
                square.style.lineHeight = "1.75em";
            } else if (gridArray[i][j] == 32) {
                square.style.color = "rgba(255, 255, 255, 0.85)";
                square.style.backgroundColor = "#2A4DAD";
                square.style.fontSize = "4em";
                square.style.lineHeight = "1.75em";
            } else if (gridArray[i][j] == 64) {
                square.style.color = "rgba(255, 255, 255, 0.95)";
                square.style.backgroundColor = "#1C3373";
                square.style.fontSize = "4em";
                square.style.lineHeight = "1.75em";
            } else if (gridArray[i][j] == 128) {
                square.style.color = "rgba(255, 255, 255, 0.95)";
                square.style.backgroundColor = "#9ACCBF";
                square.style.fontSize = "3.25em";
                square.style.lineHeight = "2.15em";
            } else if (gridArray[i][j] == 256) {
                square.style.color = "rgba(255, 255, 255, 0.95)";
                square.style.backgroundColor = "#76CC8B";
                square.style.fontSize = "3.25em";
                square.style.lineHeight = "2.15em";
            } else if (gridArray[i][j] == 512) {
                square.style.color = "rgba(255, 255, 255, 0.95)";
                square.style.backgroundColor = "#3A9E6E";
                square.style.fontSize = "3.25em";
                square.style.lineHeight = "2.15em";
            } else if (gridArray[i][j] == 1024) {
                square.style.color = "rgba(255, 255, 255, 0.95)";
                square.style.backgroundColor = "#E384CE";
                square.style.fontSize = "2.5em";
                square.style.lineHeight = "2.75em";
            } else if (gridArray[i][j] == 2048) {
                square.style.color = "rgba(255, 255, 255, 0.95)";
                square.style.backgroundColor = "#CC2D9B";
                square.style.fontSize = "2.5em";
                square.style.lineHeight = "2.75em";
            }
            setTimeout(function(){ square.style.animation = null; }, 301);
        }
    }
}

function reset() {
    $(document).keydown(function(objEvent) {
        if (objEvent.keyCode == 9) {  //tab pressed
            objEvent.preventDefault(); // stops its action
            window.location.reload();
        }
    })
}

function updateScore() {
    txt = document.createTextNode(score);
    scoreUpdate.replaceChild(txt, scoreUpdate.childNodes[0]);
    console.log(score);
}

function start() {
    $(document).keydown(function(event){
        
        switch (event.keyCode){
            case 37:  //left
                event.preventDefault();
                moveLeft();
                createNumber();
                updateGrid();
                updateScore();
                break;
            case 38:  //up
                event.preventDefault();
                moveUp();
                createNumber();
                updateGrid();
                updateScore();
                break;
            case 39:  //right
                event.preventDefault();
                moveRight();
                createNumber();
                updateGrid();
                updateScore();
                break;
            case 40:   //down
                event.preventDefault();
                moveDown();
                createNumber();
                updateGrid();
                updateScore();
                break;
            default:
                break;
    
        }
    });
}

function moveDown() {
    for (j = 0; j < 4; j++) {
        for (i = 2; i >= 0; i--){
            row = i;
            while (row + 1 < 4) {
                if (gridArray[row + 1][j] == 0) {
                    gridArray[row + 1][j] = gridArray[row][j];
                    gridArray[row][j] = 0;
                    row++;
                } else if (gridArray[row][j] == gridArray[row + 1][j]) {
                    gridArray[row + 1][j] *= 2;
                    gridArray[row][j] = 0;
                    let anim2 = document.querySelector(`#square-${row + 1}-${j}`);
                    anim2.style.animation = "push 0.3s linear 1";
                    score += gridArray[row + 1][j];
                    break;
                } else {
                    break;
                }
            }
            
        }
    }
}

function moveUp() {
    for (j = 0; j < 4; j++) {
        for (i = 1; i <= 3; i++){
            row = i;
            while (row - 1 > -1) {
                if (gridArray[row - 1][j] == 0) {
                    gridArray[row - 1][j] = gridArray[row][j];
                    gridArray[row][j] = 0;
                    row--;
                } else if (gridArray[row][j] == gridArray[row - 1][j]) {
                    gridArray[row - 1][j] *= 2;
                    gridArray[row][j] = 0;
                    let anim = document.querySelector(`#square-${row - 1}-${j}`);
                    anim.style.animation = "push 0.3s linear 1";
                    score += gridArray[row - 1][j];
                    break;
                } else {
                    break;
                }
            }
            
        }
    }
}

function moveLeft() {
    for (i = 0; i < 4; i++) {
        for (j = 1; j <= 3; j++){
            col = j;
            while (col - 1 > -1) {
                if (gridArray[i][col - 1] == 0) {
                    gridArray[i][col - 1] = gridArray[i][col];
                    gridArray[i][col] = 0;
                    col--;
                } else if (gridArray[i][col] == gridArray[i][col - 1]) {
                    gridArray[i][col - 1] *= 2;
                    gridArray[i][col] = 0;
                    let anim = document.querySelector(`#square-${i}-${col - 1}`);
                    anim.style.animation = "push 0.3s linear 1";
                    score += gridArray[i][col - 1];
                    break;
                } else {
                    break;
                }
            }
            
        }
    }
}

function moveRight() {
    for (i = 0; i < 4; i++) {
        for (j = 2; j >= 0; j--){
            col = j;
            while (col + 1 < 4) {
                if (gridArray[i][col + 1] == 0) {
                    gridArray[i][col + 1] = gridArray[i][col];
                    gridArray[i][col] = 0;
                    col++;
                } else if (gridArray[i][col] == gridArray[i][col + 1]) {
                    gridArray[i][col + 1] *= 2;
                    gridArray[i][col] = 0;
                    let anim = document.querySelector(`#square-${i}-${col + 1}`);
                    anim.style.animation = "push 0.3s linear 1";
                    score += gridArray[i][col + 1];
                    break;
                } else {
                    break;
                }
            }
            
        }
    }
}