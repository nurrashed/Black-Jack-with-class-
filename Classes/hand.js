//11
class Hand{
    constructor(){
    this._cards = [];
    this._stay = false;
    this._result = new Result();
    }
    get stay(){
        if(this._stay===true||this._result.isBust===true||this._result.isBlackJack===true)
            return true;
        return false;
    }
    set stay(value){
        this._stay = value;
    }
    get result(){
        return this._result;
    }

    addCard(deck){                                        // parameter should be deck(in the instruction it is card which is wrong)
        this._result.addCard=false;
        if(this._result.stay!==false){
           let card = deck.drawCard();
           this._cards.push(card);
           this._result.calculateScore(this._cards);
           this._result.cardAdded = true;
        }

    }
}