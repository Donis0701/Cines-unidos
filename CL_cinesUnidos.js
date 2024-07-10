export default class CL_cinesUnidos{
    constructor(pelisG,pelisG2,pelisG3,pelisG4){
        this.pelisG = parseInt(pelisG);
        this.pelisG2 = parseInt(pelisG2);
        this.pelisG3 = parseInt(pelisG3);
        this.pelisG4 = parseInt(pelisG4);
    }
    set pelisG(pG){
        this._pelisG = +pG;
    }
    get pelisG(){
        return this._pelisG;
    }

    set pelisG2(pG2){
        this._pelisG2 = +pG2;
    }

    get pelisG2(){
        return this._pelisG2;
    }

    set pelisG3(pG3){
        this._pelisG3 = +pG3;
    }

    get pelisG3(){
        return this._pelisG3;
    }

    set pelisG4(pG4){
        this._pelisG4 = +pG4;
    }

    get pelisG4(){
        return this._pelisG4;
    } 
    
     totalRecaudado(){
        return this.pelisG + this.pelisG2 + this.pelisG3 + this.pelisG4;
    }
}