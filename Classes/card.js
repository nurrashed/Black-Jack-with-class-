class Card{
    constructor(value, symbol){
        this._value= value;
        this._symbol= symbol;
    }
    get value(){
        return this._value;
    }
    get symbol(){
        return this._symbol;
    }
    get isAce(){
       if(this._value=== 1){
        return true;
       }
       return false;
    }

}