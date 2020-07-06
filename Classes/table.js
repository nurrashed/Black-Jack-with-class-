class Table{
    constructor(){
        this._player= null;
        this._dealer= null;
        this._deck= null;
        this._dealerWins= 'Dealer Wins';
        this._playerWins='Player Wins';
        this._draw = 'Draw';
    }
    newGame=()=>{
        console.log('New Game function');
        this._deck = new Deck();
        this._player = new Hand();
        this._dealer = new DealerHand(); //15
        this._deck.newDeck();
        this._deck.shuffleCards(); //8
        this.drawPlayerCard();         //12
        this.drawPlayerCard();         //12
        this.drawDealerCard();         //15
        this.drawDealerCard();         //15
    }

    displayRemainingCards(){
        let output = "";
        this._deck.cards.forEach(card => {
                    output += card.symbol; // + ' ' + card.value + ' ';
                });
        return output;
            }
//12
    drawPlayerCard=()=>{
    this._player.addCard(this._deck);
    }
    getPlayerOutput=()=>{
        let output='';
        this._player.result.cards.forEach(card=>{
            output += `${card.symbol} `;
        });
        output+= + this._player.result.score;
        return output;
    }

    drawDealerCard=()=>{                            //15
        this._dealer.addCard(this._deck);
    }

    drawDealerCards=()=>{                        //15
        while(this._dealer.stay===false){
            this.drawDealerCard();         
        }
    }

    getDealerOutput=()=>{
        let output='';
        this._dealer.result.cards.forEach(card=>{
            output += `${card.symbol} `;
        })
        output+= + this._dealer.result.score;
        return output;
    }
    //16
    findWinner=(playerStayed=false)=>{
        let pr = this._player.result;
        let dr = this._dealer.result;
        if(playerStayed){
            this._player.stay= playerStayed;
        }
        if(this._player.result.isBust){
            return this._dealerWins;
        }
        else if(this._dealer.result.isBust){
            return this._playerWins;
        }
        else if(this._player.result.isBlackJack){
            return this._playerWins;
        }
        else if(this._dealer.result.isBlackJack){
            return this._dealerWins;
        }
        else if(this._player.stay && this._dealer.result.score > this._player.result.score){
            return this._dealerWins;
        }
        else if(this._player.stay && this._player.result.score > this._dealer.result.score){
            return this._playerWins;
        }
        else if(this._player.stay && this._player.result.score===this._dealer.result.score){
             return this._draw;
        }else
        return '';

    }
}
