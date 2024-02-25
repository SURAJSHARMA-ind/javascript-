//..........................................Promise...............................................................
 

// new Promise((resolve, reject) => {
//     if(true){
//         resolve('Yes');
//     }else{
//         reject('No');
//     }
//     resolve();
// })
//     .then((succ) => {
//         console.log(succ);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// //...................Example 1............................

// function fun1(){
//     return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             const error = false
//             if(error!=true){
//                 console.log("Function : your promise has been resolved")
//                 resolve()
//             }else{
//                 console.log("Function : your promise has not been resolved");
//                 reject("sorry error occured") 
//             }
//          }, 2000);
//     })
// }

// fun1().then(function(){
//     console.log("Suraj : Thanks for resloving")
// }).catch(function(){
//     console.log("Suraj : Oh no");
// })

// // Example 2..............................

const studentList =[
 {name :"Suraj" , subject: "Javascript"},
 {name :"Vimal" , subject: "Networking"},
]
console.log(studentList)

//enroll new student 

function enrollstudent(student){
    return new Promise(function(resolve,reject){

        setTimeout(() => { 
            studentList.push(student)
            console.log("Student has been enrolled");
            const error = false
            if (!error) {
                resolve()
            }
            else{
                reject()
            }
        }, 1000);

    })
    
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
enrollstudent(newstudent).then(getstudent).catch(function(){
    console.log("Some error occured")
})
  












