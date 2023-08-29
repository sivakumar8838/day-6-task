
class uber {
    constructor(km){
        this.km = km;
    }

 UberPriceCalculate() {
    let minimumkm = 3;
    let minimumprice=100;
    if(minimumkm > this.km){
        console.log(`minimumprice=${minimumprice}`)
    }
    else{
let n = this.km - minimumkm;
let price = n*40 + minimumprice;
console.log(price);
    }
    

}


}
let  passenger1 = new uber(4);
passenger1.UberPriceCalculate();