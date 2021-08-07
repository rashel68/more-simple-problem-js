// chair = 3 cft
// table = 10 cft 
// bed = 45 cft 

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    let perChair = 3;
    let perTable = 10;
    let perBed = 45;

    const chairMultiply = perChair * chairQuantity;
    const tableMultiply = perTable * tableQuantity;
    const bedMultiply = perBed * bedQuantity;

    const totalWood = chairMultiply + tableMultiply + bedMultiply;
    return totalWood;
}


let chairQ = 4;
let tableQ = 2;
let bedQ = 1;
const allWood = woodCalculator(chairQ, tableQ, bedQ);
// console.log('apnar total kat lagbe ', allWood, ' cft');