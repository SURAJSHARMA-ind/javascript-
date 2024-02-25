// ....................................Conditional_Statement..................................................


let a =prompt("Enter ur age")
console.log(a)
console.log(typeof (a)) //output before parseint

a = Number.parseInt(a)  //converting the string in to number

console.log(typeof(a)) //output after parseint
//  write a programme to find biggest no?
let b = 7;
let c = 6;
let d = 8;
if (b > c && b > d) {
  alert(`${b} is the biggest no`);
} else if (c > d) {
  alert(`${c} is the biggest no`);
} else {
  alert(`${d} is the biggest no`);
}

// Switch for fruit shop
let fruit;
fruit = prompt("Which fruit you want to buy sir");
switch (fruit) {
  case "Orange":
    document.write("Orange is 60 Rs per kg");
    break;
  case "Banana":
    document.write("Banana is 60 Rs per kg");
    break;
  case "Mango":
    document.write("Mango is 60 Rs per kg");
    break;
  case "Papaya":
    document.write("Papaya is 60 Rs per kg");
    break;

  default:
    document.write(`${fruit} is not Available`);
}
// use switch for making mini calculator

let operator ;
let e ;
let f ;
e = prompt("Enter 1st operand");
operator = prompt("Enter operator");
f = prompt("Enter 2nd operand");


e = Number.parseInt(a);
f = Number.parseInt(b);

// console.log(typeof(a));
// console.log(typeof(b));

switch(operator){

    case '+' : document.write(a+b);break;
    case '-' : document.write(a-b);break;
    case '*' : document.write(a*b);break;
    case '/' : document.write(a/b);break;
    case '%' : document.write(a%b);break;

    default : document.write(` ${operator}  Operator is not defined`)
}