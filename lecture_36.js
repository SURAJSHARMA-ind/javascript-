//........................................... HTML insertion Methods...................................................

let a = document.getElementsByTagName("div")[0];

// a.innerHTML =a.innerHTML +"<h1> hello World</h1>;"

let div = document.createElement("div");

div.innerHTML = "Hello world";


// a.append(div);// at the end of container
// a.prepend(div); // at starting of container

// a.before(div); // at starting of container
// a.after(div); // at end of container

a.replaceWith(div); 
























