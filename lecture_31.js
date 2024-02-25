//...................................matches, closest and contains in javascript .......................................


// Match function it is use to check if element matches the given css selector
let id1 = document.getElementById("id1")

console.log(id1)

console.log(id1.matches(".class"))
console.log(id1.matches(".box"))
console.log(id1.matches("#id1"))

let id2 = document.getElementById("id2")
console.log(id2)

console.log(id2.matches(".class"))
console.log(id2.matches(".box"))
console.log(id2.matches("#id2"))

// Closest function is used to look for the nearest ancestor that matches the given css - selector and element itself also checked

console.log(sp1.closest("#sp1"))

// contains function return true if elemB is inside elemA(a descendant of elemA) or when elemA == elemB  
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))











 function myfunction() {
    console.log("button clicked")
}









