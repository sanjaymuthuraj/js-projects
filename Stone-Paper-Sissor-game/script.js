let playerMove = '';
let computerTurn = '';
let finalResult = '';
let count = {
        win : 0,
        loose : 0,
        tie : 0 
    }

function displayResult(){
    computerMove();
    document.querySelector(".resultText").innerHTML =
     `<p>You: <img src="../images/${playerMove}-emoji.png" alt="">  
     Computer: <img src="../images/${computerTurn}-emoji.png" alt="">
     Result: ${finalResult}</p>`
     ;

     document.querySelector(".resultCount").innerText = 
     `Wins: ${count.win} | Losses: ${count.loose} | Tie: ${count.tie}`
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
    counting();
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
}

function counting(){
    if(finalResult == 'Win'){
        count.win += 1;
    }else if(finalResult == 'Loose'){
        count.loose += 1;
    }else if(finalResult == 'Tie'){
        count.tie += 1;
    }
}

function resetScore(){
    count.win = 0;
    count.loose = 0;
    count.tie = 0;
    document.querySelector(".resultCount").innerText = 
     `Wins: ${count.win} | Losses: ${count.loose} | Tie: ${count.tie}`
     ;
}