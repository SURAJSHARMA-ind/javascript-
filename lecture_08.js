// //............................................Questions of chapter 2.............................................



// //Q1 Use logical operator to find that the no is blw 10 to 20 or not
let a;
a = prompt("Enter a no");

if (a < 20 && a > 10) {
  alert(`${a} is  b/w 10 to 20`);
} else {
  alert(`${a} is not b/w 10 to 20`);
}

// //Q2 Demonstrate the use case of switch statement 

switch(operator){

    case '+' : document.write(a+b);break;
    case '-' : document.write(a-b);break;
    case '*' : document.write(a*b);break;
    case '/' : document.write(a/b);break;
    case '%' : document.write(a%b);break;

    default : document.write("Operand is not available")
}

//Q3 WAP to find whether a no is divisible by either 2 or 3

let no;
no = prompt("Enter no")

if(no%2 == 0 || no%3 ==0)
{
    alert(`${no} is divisible by either 2 or 3`);
}
else(
    alert(`${no} is not divisible by either 2 or 3`)
)

//Q4 WAP to check whether person age is proper to drive car using ternary operator


let age;
age = prompt("Enter age");

a = age>18?"you can drive ":"You can not drive";

alert(a);