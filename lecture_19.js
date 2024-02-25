//..............................................Using Loops with Array.....................................................

// for loop...............................

let num = [2,3,4,5,6];

for(i=0;i<num.length;i++){

console.log(num[i]);
}

// forEach loop............................

num.forEach((element) => {
    console.log(element * element)     // It is used to access every element of an array.
});

// for...of loop    
for(let i of num){      // shortest method to access array element.
    console.log(i);    //  alternate of for loop.
}

// for...in loop
for(let i in num){
    console.log(i);    // It is used to print element keys or index no.

}

//Array.from is used to convert html object or strings to array..........

let nme = "Suraj is good boy"
let ans =Array.from(nme);
console.log(ans);

// Array.from method is used to convert every char of  string or object in to array.
// spit method is used to convert string in to array but not every char it converts every 
let ans1 =nme.split();
console.log(ans1);


















