// ...........................................Browser Events...........................................................


let a = document.getElementById("btn");

a.onclick = ()=>{

    console.log("Hi u click on me");
}
 

let y = function(e) {
    console.log(e)
    alert("Hello World2!")
  }
  
  btn.addEventListener('click',y)
  
// let a = prompt("What is your favorite number?");


// if (a == "2") {
//   btn.removeEventListener('click', x)
// }

 

























