let phone = [
    {brand: 'Samsung', model: 's6', price: 45000},
    {brand: "Symphony", model: 'h20', price: 8000},
    {brand: 'Xiomi', model: 'note 6', price: 16000},
    {brand: 'nokia', model: 'i10', price: 4500},
    {brand: 'htc', model: 'h46', price: 9500},
    {brand: 'apple', model: 'i6', price: 75000}
];

let myBudget = 10000;
for(const allPhone of phone){
    if(allPhone.price <= myBudget && allPhone.price > 9000){
        // console.log(allPhone);
    }
}


// shopping cart calculation 
let shop = [
    {product: 'Laptop', price: 45000, quantity: 1},
    {product: 'watch', price: 4000, quantity: 1},
    {product: 'phone', price: 15000, quantity: 1},
    {product: 'shirt', price: 400, quantity: 2}
];

let totalPrice = 0;
for(const products of shop){
    let productPrice = products.price * products.quantity;
    totalPrice = totalPrice + productPrice;
}
// console.log(totalPrice);



// automation quantiy shopping cart 
let shoppingCart = [
    {product: 'Phone', price: 15000},
    {product: 'watch', price: 2000},
    {product: 'shirt', price: 400}
];

function cart(shop)

