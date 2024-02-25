// ............................................. STRING METHODS ....................................................................

let Name = "suraj";
let str = "This is test string"
const ary = ["suraj","Vimal", "sharma","hemu_bhai"]

// for string
console.log(Name.length);            // To get the length of string.

console.log(Name.toLowerCase());   // Convert string to uppercase.
console.log(Name.toUpperCase());  // convert string to owercase.
console.log(Name.slice(2,4));    // slice char from index 2 to 4 but last index char is not included. 
console.log(Name.slice(2));     // slice char from index 2 to  last index  included.
console.log(str.split(''));      // slpit convert string in to array.
console.log(Name.replace("su","vi"));  // use to replace char in string or to  replace string from another string.

let fan = "Iron-Man";

console.log(Name.concat(" is a fan of " , fan , " and spiderman" ));

let test = "     Space   man     ";

console.log(test);
console.log(test.trim());  // trim method is use to remove space from start and end of the string in string.

// NOTE: STRINGS ARE IMMUTABLE MEAN (THE ORIGINAL STRING CAN NOT BE CHANGE , ONLY NEW STRING WILL RETURN).


// for array
console.log(ary.pop());  // Pop is used to remove the last element from an array and return the removed element.





























