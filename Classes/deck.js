class Deck{
    constructor(){
        this._cards =[];

    }

    get cards(){
        return this._cards;
    }
    newDeck() {
        //https://altcodeunicode.com/alt-codes-playing-card-symbols/
        this._cards = [];
        let value = 127137; //Decimal value for Unicode Ace of Spades
        for (let suit = 0; suit < 4; suit++) {
            for (let symbol = 0; symbol < 14; symbol++) {
                // Skip knights
                if (value !== 127148 && value !== 127164 && value !== 127180 && value !== 127196) {
                    let cardValue = symbol > 9 ? 10 : symbol + 1;
                    this._cards.push(new Card(cardValue, `&#${value}`));
                }
                value++;
            }
 
            value += 2; // Skip jokers and gap in sequence (missing characters)
        }
        
    }

//8
    shuffleCards=()=>{
        let tmpCards = this._cards.slice(0);
        this._cards = [];
        while(tmpCards.length>0){
            let pos = Math.floor((Math.random()* tmpCards.length));
            let card = tmpCards.splice(pos, 1);
            this._cards.push(...card);

        }
    }
    //9
    drawCard=()=>{
        return this._cards.shift();
    }
 
   
}

