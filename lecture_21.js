//............................................Questions of Chapter_5..................................................................

//Q1 Push an element in array by user.
let arr =[21,3,2,4,1,1];

// let value = prompt('Enter a no in array');

console.log(arr);
arr.push(23);
console.log(arr);

//Q2 Filter for no divisble by 10 from a given array.

let arr1 = [21,10,21,22,50,60,80];
let ans = arr1.filter((value)=>{
    return value%10==0;
})
console.log(ans);

// Q3 create an array of square of a given numvers.

let arr2 =[1,2,3,4,5,6];

let val = arr2.map((value)=>
{
    return value*value
})
console.log(val);

// Q4 Use reduce to calculate factorial of a given no from an array of first n no

let arr3 = [1,2,3,4]

let ans1 = arr3.reduce((value,value1)=>{
    return value*value1;
})

console.log(ans1);










