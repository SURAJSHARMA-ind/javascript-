// ..............................................STRING ..................................................................

const Name = "SurajSharma"

console.log(Name)
var n = console.log(Name.length)

console.log(Name[0])
// ......................................PRINT_STRING_VERTICALLY..........................................................
// let i
// for(i=0;i<n;i++){                   This code is not working because inside bracket it can not fetch the value of n
//     console.log(Name[i])
// }

let i
for(i=0;i<Name.length;i++){                         
    console.log(Name[i])
}

// .........................................Template Literal............................................................................
let boy1 = "suraj" 
let boy2 = "pikachu"
let sentence = `${boy2} is the best friend of ${boy1}`       //  `` = This symbol is known as backticks. we can use single and double quotes inside backticks
// We can insert variable directly in template literal.This is called string interpolation.
console.log(sentence) 

// .......................................Escape Sequence Characters...........................................................................


let fruit = "Banana\"as"   
let fruit1 = "Apple\'s"   
let Vegitable = 'Tomato\'s'

console.log(fruit)  
console.log(fruit1)  
console.log(fruit.length) // Here it show 9  whether it have 10 symbol . It is because it take (\") as one symbol which is escape sequence
console.log(Vegitable)

// other escape character are as follows
//  \n   = NEW LINE
//  \t   = TAB
//  \r   = CARRIAGE RETURN

let New = "my\nname\nis\nsuraj"  // \n is use for new line
console.log(New)

let space = "my\tname\tis\tsuraj"  // \t is use for space
console.log(space)

let r = "my\rname\ris\rsuraj"  // \t is use for space
console.log(r)


















