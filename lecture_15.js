// .................................................Questions of CHAPTER 4 ...................................................................


// Q1
// What will following print in js ?
console.log("har\"".length); 

// ANSWER:
// It will print 4 as a length of string because  \" is called sequence counter which whole is taken as 1  .

//...................................................................................................................

// Q2 
// Explore/Search the includes , startwith & endwith functions of a string

//includes exp 1
let text = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result);                        //includes() returns true if a string contains a specified string
//includes exp 2

let deal = "price of this car is 10,00000";
console.log(deal.includes(5,00000));
//..............................................................

// startwith exp 1
let text1 = "Hello world, welcome to the universe.";
let result1 = text1.startsWith("Hello");
console.group(result1);         // It check whether the string start with word or not if yes it return true else false.
// startwith exp 2
let Name ="Suraj is going to market"
console.log(Name.startsWith("Suraj"));
//..............................................................

//endswith exp 1
let story_1 ="Hero won"
console.log(story_1.endsWith("loose"));
//endwith exp 2
let story_2 ="Hero won"
console.log(story_2.endsWith("won"));
//...............................................................

//Q3 WAP to convert a given string to lower case

let str_1 ="MY NAME IS SURAJ ";
let low = str_1.toLowerCase();

console.log(low);
//..........................................................
//Q4 Get last word from given string

let given = 'Are random sentences computer generated?';
//method 1
const store = given.split('');
console.log(store);
const value = store.pop();
console.log(value);   
//method 2
console.log(given.split('').pop(""));
//method 3
console.log(given.slice(30));  // by slice method
//.........................................................

//Q5 Tru to change 4th char of given string
let str_3 = "SURAJ"
console.log(str_3.replace("A","P"));


