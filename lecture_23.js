//..............................................Console_Methods.............................................................

console.log(console);  // command to log console object.
// return value of this is undefined.

console.error("This is an error")  // This method is use to show the error.

console.assert(54>5); // This method is use to check the assertion 

console.clear(); // This command is use to clear the console.


let obj = {a:1 , b:2 ,c:3};
console.table(obj);  // Convert object in to table.

console.warn("Dont say hi!")  // To warn the user.

console.info("This is an imp info"); // To show info in console similar to console.log().


//Console.time() and console.timeEnd() is used to check the time taken by some code...........
console.time("for_loop");
for(i=0;i<5;i++){
    console.log(i);
}
console.timeEnd("for_loop");

console.time('while_loop')
i=0;
while(i<5){
    console.log(i);
    i++;
}
console.timeEnd('while_loop')

























