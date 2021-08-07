// chair = 3 cft
// table = 10 cft 
// bed = 45 cft 

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    let perChair = 3;
    let perTable = 10;
    let perBed = 45;

    if(typeof chairQuantity != 'number' || typeof tableQuantity != 'number' || typeof bedQuantity != 'number'){
        console.log('Please Enter Valid Input');
    }else{
        const chairMultiply = perChair * chairQuantity;
        const tableMultiply = perTable * tableQuantity;
        const bedMultiply = perBed * bedQuantity;
    
        const totalWood = chairMultiply + tableMultiply + bedMultiply;
        return totalWood;
    }
    
        
    
}


let chairQ = 'k';
let tableQ = 2;
let bedQ = 1;
const allWood = woodCalculator(chairQ, tableQ, bedQ);
console.log(allWood);