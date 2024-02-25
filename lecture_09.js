// //...........................................FOR_Loop..........................................................
// //......................................For_in  & For_of_Loop..................................................


// for(i=0;i<=10;i++){
//     console.log(i) ;
// }
// console.log(i);

// // //WAP to add first n no's
// let ans = 0
// let n;
// n=prompt("enter nth term")
// for(i=0;i<n;i++){
   
//    ans += i;
// }
// alert(`sum of first ${n} natural no is `+ ans );

// // //WAP of factorial
// let o =4;
// let an =1;
// for(i=1;i<=o;i++){
// an = i*an;
// }
// console.log(an);


// //For in loop...............................................

let obj = {

    Suraj : 99,
    Vaibhav : 87,
    Shiven: 85,
    Aman : 83,
    Viraj : 60,

}

for(let a in obj){
    console.log(" Marks of "+ a +" is "+ obj[a] )
} 

// For of Loop....................................................................

let names = ["Suraj","Sharma","Vimal"]

for(let name of names){
    console.log(name);
}

