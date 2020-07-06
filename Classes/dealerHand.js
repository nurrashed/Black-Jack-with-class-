//14
class DealerHand extends Hand{
    constructor(){
        super();
    }
    get stay(){
        if(this._stay===true || this._result.score>16 || this._result.score_<=21 && this._cards.length >= 5){
            return true;
        }
        return false;
    }
    set stay(value){
        this._stay = value;
    }

}