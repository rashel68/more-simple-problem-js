let myTxt = 'Hello World';
function getReverse(txt){
    let letterStore = '';
    for(const letter of txt){
        letterStore = letter + letterStore;
    }
    return letterStore;
}

const reversed = getReverse(myTxt);
console.log(reversed);