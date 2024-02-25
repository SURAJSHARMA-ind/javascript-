//...............................................Local_Storage........................................................


let key = prompt("Enter key");
let value = prompt("Enter value");

//setitem
localStorage.setItem(key,value);

// removeitem
if(key==0){
    localStorage.removeItem(key)
}

//get item

console.log(`your entered key is ${(key)}`) // to get key don't write localstorage
console.log(`your entered value is ${localStorage.getItem(key)}`)

//clear local storage
// localStorage.clear();
















