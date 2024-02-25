//..................................................Array_Method_2.....................................................

// delete operator .......................................................................................

let ary =[1,2,3,4,5,6,7,8,9,0];

delete ary[0];      // delete is not a method it is an operation.
console.log(ary);  // here 1st element is empty 
console.log(ary.length); // After deleting the element from array using delete operation still the length of array remains same.

// concat method is use to add two or more then two array..................................................

let ary_1 =[11,12,13,14,15,16,17,18];
let ary_2 =[21,22,23,24,25,26,27,28];

let new_ary = ary.concat(ary_1,ary_2);
console.log(new_ary);

// Sort method is use to sort array but in alphabetical order..............................................
let n_ary=[1,32,43,56,23,76,232,343,12];

console.log(n_ary.sort()); // It sort array in alphabetical order.

// NOW THE QUESTION ARRISES THAT  THEN  HOW TO SORT ARRAY IN ASCENDING AND DESCENDING ORDER IN JS .

// TO ARRANGE ARRAY IN ASCENDING AND DESCINDING ORDER WE USE COMPARE FUNCTION WITH SORT METHOD.


let compare = (a,b)=>{

    return a- b                   // For ascending order we return a-b  
                                  // For descending order we return b-a            
}

let n_ary_1=[1,32,43,56,23,76,232,343,12];

console.log(n_ary_1.sort(compare));

// working

// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// If the result is negative, a is sorted before b.

// If the result is positive, b is sorted before a.

// If the result is 0, no changes are done with the sort order of the two values.

// Example:

// The compare function compares all the values in the array, two values at a time (a, b).

// When comparing 40 and 100, the sort() method calls the compare function(40, 100).

// The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

//........................................................................................................................

//Splice method in js
//Exp 1
let n_ary_2 = [12,22,23,43,54,665,75,21];

n_ary_2.splice(2,0,122,222,112,1212);  // splice function it takes three argument.
console.log(n_ary_2);                  // 1) At which index we start.
                                       // 2) How much element should remove.
                                       // 3) element that should add in array.
//Exp 2
let n_ary_3 = [12,22,23,43,54,665,75,21];

let del_value =n_ary_3.splice(2,3,122,222,112,1212);
console.log(n_ary_3); 
console.log(del_value);    // It return deleted value
 
//Slice method in js.........................................................................

let new_ary1 = [21,12,32,31,41,42,54,56,8,4,5,34];

let val = new_ary1.slice(2);
let val_1 = new_ary1.slice(2,7);
console.log(val);
console.log(val_1);

//reverse method in js

console.log(new_ary1.reverse()) // use to reverse the given array.



