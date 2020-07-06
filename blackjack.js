//2
const startButton = document.getElementById('start-button');
const drawButton = document.getElementById('draw-button');
const stayButton = document.getElementById('stay-button');
const clearButton = document.getElementById('clear-scoreboard-button');
const playerContent = document.getElementById('player-content');
const dealerContent = document.getElementById('dealer-content');
const resultContent = document.getElementById('result-content');
const deckContent = document.getElementById('deck-content');
const scoreboardContent = document.getElementById('scoreboard-content');
const table = new Table();
const scoreboard = new Scoreboard(scoreboardContent);

//3

clearTable=()=>{
    playerContent.innerHTML = '';
    dealerContent.innerHTML = '';
    resultContent.innerHTML = '';
    deckContent.innerHTML = '';
    //scoreboardContent.innerHTML= '';
}

disableButtons=(start=false, draw=true, stay=true)=>{
    if(start){
        startButton.setAttribute('disabled', 'disabled');
    }else{
        startButton.removeAttribute('disabled');
    }

    if(draw){
        drawButton.setAttribute('disabled','disabled');
    } else{
        drawButton.removeAttribute('disabled');
    }

    if(stay){
        stayButton.setAttribute('disabled','disabled');
    } else{
        stayButton.removeAttribute('disabled');
    }

}


startButton.addEventListener('click',()=>{
 console.log('Start Button is clicked');
 clearTable();
 disableButtons(true, false, false);
 table.newGame();
 //table.newDeck();
 displayOutput(deckContent,table.displayRemainingCards());
 displayOutput(playerContent, table.getPlayerOutput()); //12
 //table.getPlayerOutput();
displayOutput(dealerContent, table.getDealerOutput());  //15
displayWinner(); //16
})

drawButton.addEventListener('click',()=>{
    console.log('Draw Button is clicked');
    table.drawPlayerCard();                                        //13
    displayOutput(deckContent,table.displayRemainingCards());      //13
    displayOutput(playerContent, table.getPlayerOutput());                                  //13
    displayWinner();       //16
    
   })
stayButton.addEventListener('click', ()=>{
    console.log('Stay Button is clicked');
    disableButtons();

    table.drawDealerCards();
    displayOutput(dealerContent, table.getDealerOutput());     //15
    let winner = displayWinner(true);
    scoreboard.addScore(table._player, table._dealer, winner);
})


clearButton.addEventListener('click',()=>{
    console.log('Clear Button is clicked');
    scoreboardContent.innerHTML = '';    //17
    
   })

displayOutput=(htmlContainer, output)=>{
  //output.innerHTML += htmlContainer;
  htmlContainer.innerHTML = output;
}
//16
displayWinner=(playerStayed=false)=>{
let winner = table.findWinner(playerStayed);
displayOutput(resultContent, winner);
if(winner!==''){
    disableButtons();
    scoreboard.addScore(table._player, table._dealer, winner);
}
    return winner;
}