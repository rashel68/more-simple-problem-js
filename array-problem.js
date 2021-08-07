// Remove the duplicate item from an array 

let person = ['Minhaj', 'Rokib', 'Ibrahim', 'Rokib', 'Hasan', 'Ibrahim', 'Muhit', 'Tamjid', 'Rashel', 'Rokib', 'Ibrahim', 'Hasan'];

/* let uniqPerson = [];
for(const allPerson of person){
    
    if(uniqPerson.indexOf(allPerson) == -1){
        uniqPerson.push(allPerson);
    }
}
console.log(uniqPerson); */








let price = [95, 10, 45, 5, 7, 58, 2, 8, 1 , 9, 98];
// min item of an Array 
let max = price[0];
for(i = 0; i<price.length; i++){
    let allPrice = price[i]
    if(allPrice > max){
        max = allPrice;
    }
}
// console.log(max);


/* 
let min = 0;
for(i=0; i<price.length; i++){
    let priceList = price[i];
    if(priceList < min){
        min = priceList;
    }
}
console.log(min);
 */


function samllestNumber(num){
    let min = num[0];
    for(i=0; i<num.length; i++){
        let allNum = num[i];
        if(allNum < min){
            min = allNum;
        }
    }
    return min;
}

const result = samllestNumber(price);
// console.log(result);



// array largesNumber using function 
function largestNumber(number){
    let max = number[0];
    for(i = 0; i<price.length; i++){
        let allNumber = price[i];
        if(allNumber > max){
            max = allNumber;
        }
    }
    return max;
}
const out = largestNumber(price);
// console.log(out);


// random number push of an array without duplicate
let array = [];
/* 
for(i = 0; i<=10; i++){
    let number = Math.round(Math.random() * 50);
    if(array.indexOf(number) == -1){
        array.push(number);
    }else{
        console.log(array, number);
    }
}
console.log(array);
 */


// Explore
/* 
for(i = 0; i<20; i++){
    let mr = i;
    array.push(mr);
}
console.log(array);
 */

// push all even number 1 to 50
/* 
for(i = 1; i<=50; i++){
    let myNumber = i;
    if(myNumber%2 == 0){
        array.push(myNumber);
    }
}
console.log(array);
 */
let array2 = [];
let array3 = [];
for(i = 1; i<=100; i++){
    let myNum = i;
    if(myNum%3==0 && myNum%5==0){
        array.push(myNum);
    }
    else if(myNum%3==0){
        array2.push(myNum);
    }
    else if(myNum%5==0){
        array3.push(myNum);
    }
}
// console.log('3 and 5 divisible array', array);
// console.log('only 3 divisible array', array2);
// console.log('Only 5 divisible array', array3);