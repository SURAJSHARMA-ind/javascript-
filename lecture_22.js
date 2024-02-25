//..........................................Guess_the_no_game(Using random no).........................................................

// Code to generate random no b/w 0 to 100

const random = Math.floor(Math.random() * 100);
let i = 1;
let count = 0;
let input;
let input1;
alert('To terminate the programme enter 1192');
// alert(random);
do {
  input = prompt("Enter no b/w 0 to 100 "); // Taking input from user.
  input1 = Number.parseInt(input); //convert string in to integer.
  if (input1 == random) {
    console.log("you won");
  } else {
    console.log("try again");
    count = ++i;
    if (input1 > random) {
      console.log(`random is smaller then ${input1}`);
    } else {
      console.log(`random is greater then ${input1}`);
    }
  }
} while (input1 != random & input1 != 1192 & count != 10);

// console.log(typeof input1); // convert string in to integer.
// console.log(input1);
console.log(`You take ${count} chances`);
console.log(`The correct ans is ${random}`);
console.log(`your score is ${100-count}`);
