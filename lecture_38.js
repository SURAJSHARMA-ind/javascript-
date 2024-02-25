// ..............................Changing Html classes using className and classlist....................................


let first = document.getElementById("first");

first.className ="yellow"     // to change class

console.log(first.classList); // to log classes uesd
first.classList.remove("yellow"); //to remove class

first.classList.add("red"); // to add new class

first.classList.toggle("red") // It check the class is present or not if class not present it add the class either remove the class

console.log(first.classList.contains("red")) // It check the class is present or not.






























