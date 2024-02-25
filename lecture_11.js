// ................................................. Functions .......................................................

function sum(a, b) {
  return (c = a + b);
}

console.log(sum(9, 9));

function avg(x,y){
    return z=(x+y)/2
}
console.log(avg(2,3))

// new method of declaring function which is called Aroow function 
const username =() =>{
    console.log("Hey my name is Suraj ")
    return "hi"
}
rtn = username();         // to store  return value
console.log(rtn);     // to log return value
username();
