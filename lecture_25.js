//...........................................Questions of Chapter 6.............................................................

// Q1) WAP to check whether user is able to drive or not take input using prompt and tell the user output using alert.

// let age = prompt("Enter your Age");

// if(age>=18){
//     alert("You can drive a car")
// }
// else{
//     alert("You can not drive a car")
// }

//Q2 In Q1 ask user want to reuse prompt using confirm...........................................
// let runagain = true;
// do {
//   let age1 = prompt("Enter your Age");
//   age1 = Number.parseInt(age1);

//   if (age1 >= 18) {
//     alert("You can drive a car");
//   } else {
//     alert("You can not drive a car");
//   }
//   runagain = confirm("Do you want to play again");        // Never declare inside bracket it throw an error the value is declared but never read;

// } while (runagain)

// Q3 In previous question if the entered age is negative then show an error..................
// let runagain =true;
// do{
//   let age1 = prompt("Enter your Age");
//   age1 =Number.parseInt(age1);
//   if (age1<0){
//     console.error("Age can not be negative")
//     break;
//   }
//   else if (age1 >= 18) {
//     alert("You can drive a car");
//   } else {
//     alert("You can not drive a car");
//   }
//   runagain = confirm("Do you want to play again");

// } while (runagain)

//......................................................CWH SOLUTION...................................................................

//Q1) WAP to check whether user is able to drive or not take input using prompt and tell the user output using alert.

// let age = prompt('Enter your age');

// age =Number.parseInt(age);

// const canDrive = (age)=>{

//   return age>18?true:false
// }
// if(canDrive(age)){
//   alert("You can drive a car");
// }else{
//   alert("You can not drive a car");
// }

//Q2 In Q1 ask user want to reuse prompt using confirm.....................................

// let runagain = true;
// const canDrive = (age)=>{

//   return age>18?true:false
// }

// while(runagain){
// let age = prompt('Enter your age');
// age =Number.parseInt(age);

// if(canDrive(age)){
//   alert("You can drive a car");
// }else{
//   alert("You can not drive a car");
// }
//  runagain = confirm("You want to play again")
// }

// Q3 In previous question if the entered age is negative then show an error..........................

// let runagain = true;
// const canDrive = (age) => {
//   return age > 18 ? true : false;
// };

// while (runagain) {
//   let age = prompt("Enter your age");
//   age = Number.parseInt(age);
  
//   if(age<0){
//     console.error('age can not be negative');
//     break;
//   }
//   if (canDrive(age)) {
//     alert("You can drive a car");
//   } else {
//     alert("You can not drive a car");
//   }
//   runagain = confirm("You want to play again");
// }

//Q4 WAP that if user enter a no greater then 4  then redirect it to google.confirm.....................

// const canDrive = (number) => {
//     return number > 18 ? true : false;
//   };

//   let number = prompt("Enter no greater then 4 for magic")
//   number = Number.parseInt(number);

//   if(number>4){

//     location.href = "https://google.com"

//   }

// Q5 WAP to change page color according to user input;

// let color = prompt("Enter the background color u want");
// document.body.style.backgroundColor = "red"    // This code is not working in Vs code and it work in other website...

let color =prompt("Enter the color")
document.body.style.background = color;
// function changeBackground(color) {
//     document.body.style.background = color;
//  }

 
//  window.addEventListener("load",function() { changeBackground(color) });


