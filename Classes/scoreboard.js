//17

class Scoreboard{
    constructor(scoreboard){
        this._scoreboard= scoreboard;
            if(localStorage.scoreboard!==undefined){
                scoreboard.innerHTML= localStorage.scoreboard;
            }
    }


   addScore=(player,dealer, winner)=>{
    let color ='';
    console.log(winner);
      if (winner.includes("Dealer")) {
          color = 'text-danger';
      } 
      else if (winner.includes("Player")) {
        color = 'text-success';
    } 
    else {
        color = 'text-warning';
    } 
    let tdPlayer= `<td>${player.result.cardOutput} ${player.result.score}</td>`;
    let tdDealer = `<td>${dealer.result.cardOutput} ${dealer.result.score}</td>`;
    let tdWinner = `<td class='${color}'>${winner}</td>`;
    let tr = `<tr>${tdPlayer}${tdDealer}${tdWinner}</tr>`;
    //let scores = scoreboard.innerHTML;
    this._scoreboard.innerHTML += tr;
    localStorage.scoreboard = this._scoreboard.innerHTML;

    clearScoreboard=()=>{
        localStorage.scoreboard='';
        this._scoreboard.innerHTML = '';
        //localStorage.scoreboard = this._scoreboard.innerHTML;
    }
    }
}