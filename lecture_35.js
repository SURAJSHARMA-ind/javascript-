//.........................................Attribute Methods......................................................

// hasAttribute method is used to check for existence of an attribute

let a = document.getElementById("first")
console.log(a.hasAttribute("name"));
console.log(a.hasAttribute("style"));

// getAttribute

console.log(a.getAttribute("style"));
console.log(a.getAttribute("class"));

// setAttribute

let b = document.getElementById("new")
b.setAttribute("class","hlo")

// remove attribute 

a.removeAttribute("class")

//.attributes

console.log(b.attributes)

// data - name of attribute is use to make attribute in html
// To get this attribute we use  (id.dataset.name_of_attribute) 

console.log(b.dataset.suraj)
















