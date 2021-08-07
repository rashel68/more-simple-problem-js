let person = ['minhaj', 'rokib', 'tamjid', 'minhaj', 'rokib', 'hasan', 'ibrahim', 'muhit', 'hasan'];

let uniqPerson = [];
for(const friends of person){
    if(uniqPerson.indexOf(friends) == -1){
        uniqPerson.push(friends);
    }
}
// console.log(uniqPerson);

// useing function 
function removeDuplicate(arr){
    let uniqFriends = [];
    for(const friends of arr){
        if(uniqFriends.indexOf(friends) == -1){
            uniqFriends.push(friends);
        }
    }
    return uniqFriends;
}
const allUniqFriends = removeDuplicate(person);
// console.log(allUniqFriends);
