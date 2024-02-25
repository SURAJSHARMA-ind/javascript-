//.....................................Questions of  CHAPTER 1.........................................................


// Q1 Create a variable of type string and try to add a number to it.

let sname = "suraj";
let num = 9;

console.log(sname + num);

// Q2 use typeof operator to find the datatype of the string in last question.

console.log(typeof sname);
console.log(typeof num );
// console.log(typeof (sname + num));

// Q3   Create a const obj in js  can u change  it to hold a number  later 

const item = {
    phone : " Mi note 10s ",
    colour : " Purple",
    ram : "6gb",
    Storage : "64gb",
    1 : true,
}
console.log(item["1"])

// item = 4  Ans: No we can not change it to hold no later

//Q4 Try to add new key to const which u created in Qno 3 ? Were u able to do it

item['owner']= "suraj sharma"
item['storage']= "128gb"
console.log(item)
//  Ans : yes i am able to add new key to const

//Q5 Write a js programme to create a word-meaning dictionary of 5 words

const dict = {
    Amotivation : "Having no motivation or purpose",
    Angeliferous : "A person with a beautiful, sweet or innocent face, like that of an angel.",
    yakka : "Work , Especially Hard Work",
    'BARE-BONES' : "THE BASIC OR ESSENTIAL ELEMENTS OF SOMETHING; BASIC, SIMPLE, MINIMAL.",
    BLERT  : "A PERSON WHO IS WEAK OR USELESS, A COWARDLY PERSON"
}

console.log(dict)

console.log(dict.BLERT)



