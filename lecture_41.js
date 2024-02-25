//....................................Introduction to Callbacks........................

// // Synchronous programming example .
// // here code execute line by line.

// let a = prompt("What is ur name")
// let b = prompt("What is ur age")
// let c = prompt("What is ur fav color")


// console.log(`${a} is ${b} year old and has ${c} favourite color`);

// // Asynchronous programming example.

// // Asynchronous programming refers to a programming paradigm in which a program can continue executing other code while waiting for a blocking operation to complete. In JavaScript, this can be achieved using callback functions, Promises, and async/await.
// // For example, using a callback function, you can make an HTTP request and execute a function once the request is complete:

// console.log("start")

// setTimeout( function() {
//     console.log("HEllO Guys")
// },3000)


// console.log("end")

// //EXP 1 .......................................

// // Already enrolled student list

const studentList =[
 {name :"Suraj" , subject: "Javascript"},
 {name :"Vimal" , subject: "Networking"},
]
console.log(studentList)

//enroll new student 

function enrollstudent(student,callback){
    setTimeout(() => {
        studentList.push(student)
        callback();
    }, 1000);
}


function getstudent() {
    setTimeout(()=>{
        let str ="";
        studentList.forEach(function(student){
            str += `<li>${student.name}</li>`
            console.log(str);
        });
    document.getElementById("students").innerHTML =str;
    

    },2000)
}

let newstudent = {name:"viraj" ,subject: "python"}
enrollstudent(newstudent,getstudent);
  
// Exp 2 .................................................................................

// const calculate = (a,b,operation)=>{
//  return operation(a,b);
// };

// const add = calculate(3,4,function(a,b){
//  return a+b
// })

// console.log(add)

// const sub = (a,b)=>{
//  return a-b
// }


// const resultsub = calculate(6,5,sub)

// console.log(resultsub);

// //.................................Callback Hell...............................................

// // Callback hell, also known as the "pyramid of doom," is a situation in asynchronous JavaScript programming where multiple nested callback functions make the code hard to read, understand, and maintain. This occurs when you have several asynchronous operations that depend on each other, leading to deeply nested callback functions.



