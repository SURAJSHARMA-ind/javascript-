// Map , filter & reduce high order methods 


// // Map() .........................................(Create new array by performing some operations on each array element)
let num =[ 12,14,16,19];
// // console.log(num)

// let a = num.map((value,index,array)=>{             // value, index, array are parameter here use in map
//     console.log(value,index,array);
//     return value + 1
// })
// console.log(a);

//filter() .......(The filter() method creates a new array filled with elements that pass a test provided by a function.)
let arr =[12,2,30,4,43];
let b = arr.filter((value)=>{
    return value<10;
})

console.log(b)

// // Array reduce method........................

let arr1 = [1,3,4,5,6,7,4];

let c = arr1.reduce((value,val,val1)=>{    
    return value + val + val1
})
console.log(c);







