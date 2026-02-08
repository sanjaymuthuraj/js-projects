let playerMove = '';
let computerTurn = '';
let finalResult = '';

function displayResult(){
    computerMove();
    document.querySelector(".resultText").innerText =
     ` You :${playerMove} | Computer:${computerTurn} | Result:${finalResult}`
     ;
}

function computerMove(){
    let randomValue = Math.random();

    if(randomValue >=0 && randomValue <= 1/3){
        computerTurn = 'Rock';
    }else if(randomValue > 1/3 && randomValue <= 2/3){
        computerTurn = 'Paper';
    }else if(randomValue > 2/3 && randomValue <= 1){
        computerTurn = 'Sissor';
    }
    resultCalculation();
}

function resultCalculation(){
    if(playerMove == 'Rock'){
        if(computerTurn == 'Rock'){
            finalResult = 'Tie';
        }else if(computerTurn == 'Paper'){
            finalResult = 'Loose';
        }else if(computerTurn == 'Sissor'){
            finalResult = 'Win';
        }
    }else if(playerMove == 'Paper'){
        if(computerTurn == 'Rock'){
            finalResult = 'Win';
        }else if(computerTurn == 'Paper'){
            finalResult = 'Tie';
        }else if(computerTurn == 'Sissor'){
            finalResult = 'Loose';
        }
    }else if(playerMove == 'Sissor'){
        if(computerTurn == 'Rock'){
            finalResult = 'Loose';
        }else if(computerTurn == 'Paper'){
            finalResult = 'Win';
        }else if(computerTurn == 'Sissor'){
            finalResult = 'Tie';
        }
    }
    console.log(finalResult);
}