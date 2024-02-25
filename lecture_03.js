// ............................. Difference between var & let .............................................




// // Always use let over var to dec chance of error

var a = 9 ;
var a = 6 ;
console.log(a) ;
// // // Here output is 6

// // let b = 3 ;

// // let a =6 ; //It thrown an error because we can not re-declare same identifier

{
  var a =10 ;
  console.log(a);
}
console.log(a); //var alway print latest data enter in it

{
  let b = 5 ;
  console.log(b);
}
console.log(b);
const author = "suraj";
console.log(author)
// const author = noob ; //we can to  re-declare ,change const identifier and its value respectively
