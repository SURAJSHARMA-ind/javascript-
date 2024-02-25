//...............................................Array_Methods...........................................................


const num = [1,2,3,4,5,6];

// console.log(num);

// //  Convert array in to String.

// a = num.toString();
// console.log(a);
// console.log(a,typeof(a));

// // pop method is use to remove last element from array.

// b = num.pop();
// console.log(num); // Here 6 from array is removed because pop remove last element from array.
// console.log(b);  // here 6 is stored in b.

// // push method is use to add new element in given array.

// c = num.push(64);
// console.log(num);

// // Shift method  remove first element and return it
 
// rtn =num.shift();

// console.log(rtn);

// // unshift method add element in starting of an array and return array length.

// rtn1 = num.unshift(11);
// console.log(rtn1,num);

// ......................................forEach........................................................

//forEach is a method in JavaScript that allows you to iterate over an array and execute a function for each element of the array.



num.forEach(function(number) {
  console.log(number);
});

// for more about forEach method see calculator , to do list project

























