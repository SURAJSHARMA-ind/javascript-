//..................................................Arrays.......................................................................

a = [1,2,3,4,5,5];

// print array in console

console.log(a); 
console.log(a[0]); 
console.log(a[1]); 
console.log(a[2]); 
console.log(a[3]); 

// print all element inside array usinf for loop

for(i=0;i<6;i++)
{
    console.log(a[i]);   
};

// find length of given array

let ary =[2,1,21,"as",null,undefined]
console.log("length of array is : ", ary.length);
console.log(ary.length);

// Add element in array

ary[6]="New"   // here a[6] is a[index no]
console.log(ary)
console.log(ary.length);
// change existing value inside array

ary[6]='New1'
console.log(ary);

// NOTE : ARRAY IS MUTABLE WHICH MEANS ITS VALUE CAN BE CHANGE.
//NOTE : IN JS TYPE OF ARRAY IS OBJECT.

console.log(typeof(ary));
console.log(typeof ary);




