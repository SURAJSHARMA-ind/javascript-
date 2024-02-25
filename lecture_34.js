//.............................innerHTML,outerHTML and other properties..................................................


console.log(document.getElementsByTagName("span")[0])

// console.dir shows the element as an object with its properties.

console.dir(document.getElementsByTagName("span")[0])

// The nodeName property returns the name of a node:
// #text for text nodes
// #comment for comment nodes
// #document for document nodes

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

// Inner HTML (Valid only for element node only)

console.log(document.getElementById("hlo").innerHTML);
document.getElementById("hlo").innerHTML = "Good Bye"

// Outer HTML

console.log(document.getElementById("hlo").outerHTML);
document.getElementById("hlo").outerHTML = "<h1>Again Hello</h1>"

// text content 

// It provide access to the text inside the element : only text not tags.
console.log(document.body.textContent)






















