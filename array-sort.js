
let price = [10, 55, 75, 45, 20, 35, 5, 25, 24, 60, 80];

// assending order 
const priceSort = price.sort(function(a,b){return a-b});
console.log('Assending Order ', priceSort);

// dessending order 
const dSort = price.sort(function(a,b){return b-a});
console.log('Dessending Order ', dSort);