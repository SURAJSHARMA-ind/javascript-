//......................................Data-Types..........................................................

// 1) primitive data-type.
// 2) Non primitive data-type.


// * primitive data-type

// nn bb ss u 
// (number,null)(BigInt,boolean)(string,symbol)(Undefined)

let a = 56;
let b = null ;
let c = BigInt("567") + BigInt("3") ;
let d = true;
let e = "suraj";
let f = Symbol("I am Suraj");
let g = undefined;

console.log(a,b,c,d,e,f,g);

// Non primitive data-type or Object in js 

const item = {
    car : "Tata Suv",
    colour: "Asthetic ",
    Model : "naxon Ev",
    Rpm : undefined,
   "No of seats" : 5
}

console.log(item["car"]);
console.log(item["Rpm"]);
console.log(item["colour"]);

