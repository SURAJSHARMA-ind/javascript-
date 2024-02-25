//...................................Async/Await.........................................
console.log("Lecture 47")
async function test() {
    const response = await fetch("https://api.github.com/users");
    const users = await response.json()
    return users
}


let a =test();
console.log(a);
   
a.then(data => console.log(data))