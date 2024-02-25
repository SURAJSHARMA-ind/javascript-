//...................................................DOM Manipulating....................................................

console.log(document);  // to show document model .
console.log(document.body.firstChild) // to access first child.
console.log(document.body.lastChild) //  to access last child.
console.log(document.body.childNodes); // to access all child .

// child nodes look like an array But its not actually an array buta a collection . We can use Array from(collection)to convert it in to Array.
 console.log(document.body.firstChild) // to access body first child 
 a = document.body.firstChild
 console.log(a.parentNode);        // parent node of a where a is body.fristchild =div
console.log(document.body.parentNode) // parent node of body
console.log(document.body.parentElement) // parent element of body


// console.log(document.body.firstChild.nextSibling)  // next sibling of first child .












