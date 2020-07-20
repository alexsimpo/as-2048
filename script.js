window.addEventListener('load', init);

let gridArray = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

const grid = document.querySelector('.grid-container');
const cells = document.querySelectorAll('.grid-item');

function init() {
    setup();
    start();
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
            } else {
                square.style.color = "rgba(255, 255, 255, 0.75)";
            }
        }
    }
}

function start() {
    $(document).keydown(function(event){
        
        switch (event.keyCode){
            case 37:  //left
                event.preventDefault();
                createNumber();
                break;
            case 38:  //up
                event.preventDefault();
                createNumber();
                break;
            case 39:  //right
                event.preventDefault();
                createNumber();
                break;
            case 40:   //down
                event.preventDefault();
                moveDown();
                createNumber();
                updateGrid();
                console.log(gridArray);
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
                    break;
                } else {
                    break;
                }
            }
            
        }
    }
}