let playerMove = '';
let computerTurn = '';
let finalResult = '';
let count =JSON.parse(localStorage.getItem('count')) || {
        win : 0,
        loose : 0,
        tie : 0 
    }

countfunction();


function displayResult(){
    computerMove();
    document.querySelector(".resultText").innerHTML =
     `<p>You: <img src="../images/${playerMove}-emoji.png" alt="">  
     Computer: <img src="../images/${computerTurn}-emoji.png" alt="">
     Result: ${finalResult}</p>`;

    countfunction();
}

function computerMove(){
    let randomValue = Math.random();

    if(randomValue <= 1/3){
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
    localStorage.setItem('count', JSON.stringify(count));
}

function resetScore(){
    count.win = 0;
    count.loose = 0;
    count.tie = 0;
    localStorage.setItem('count', JSON.stringify(count));
    countfunction();
}

function countfunction(){
    document.querySelector(".winSpan").innerText = `${count.win}`;
    document.querySelector(".looseSpan").innerText = `${count.loose}`;
    document.querySelector(".tieSpan").innerText = `${count.tie}`;
}

document.querySelector('.rock-button').addEventListener("click",()=>{
    playerMove = 'Rock'; 
    displayResult();
})

document.querySelector('.paper-button').addEventListener("click",()=>{
    playerMove = 'Paper'; 
    displayResult();
})

document.querySelector('.sissor-button').addEventListener("click",()=>{
    playerMove = 'Sissor'; 
    displayResult();
})

document.querySelector('.reset-button').addEventListener('click', ()=>{
    resetScore();
})