//10
class Result{
    constructor(){
        this._score =0;
        this._cards =[];
        this._hasAce = false;
        this._cardAdded = false;
    }

    get cardOutput(){
        let output = '';
        this._cards.forEach(card => {
            output += `${card.symbol}`;
        });
        return output;
    }
    get cards(){
        return this._cards;
    }
    get score(){
        return this._score;
    }
    get isBust(){
        if(this._score > 21)
            return true;
        return false;
    }

    get isBlackJack(){
        if(this._score===21 && this._cards.length===2)
            return true;
        return false;
    }
    get hasAce(){
        return this._hasAce;
    }
    get cardAdded(){
        return this._cardAdded;
    }
    set cardAdded(value){
        this._cardAdded = value;
    }
//10
    calculateScore=(cards)=>{
        this._cards= cards;
        this._score=0;
        this._hasAce = cards.find(card=>card.value===1)!==undefined;
        this._cards.forEach((card)=> this._score += card.value);
    
    if(this._hasAce && this._score + 10 <= 21){
        this._score = this._score + 10;
    }
    return this._score;
    }

}