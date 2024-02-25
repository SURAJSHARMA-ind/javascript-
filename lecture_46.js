//...................................Fetch_Api...............................................


const fetchbtn =document.getElementById("fetchData")
const backupbtn =document.getElementById("backupData")

fetchbtn.addEventListener("click",fetchdata)
backupbtn.addEventListener("click",backupdata)

//....................Get request.................
function fetchdata(){
    console.log("hey u click on fetch btn");
    url = "https://jsonplaceholder.typicode.com/todos/1"
    fetch(url).then((Response)=>{
      return Response.json();
    }).then((data)=>{
       console.log(data);
    })

}
//..................Post request........................
function backupdata() {
    url ="	https://jsonplaceholder.typicode.com/todos/1"
    data ={"userId":"suraj1218310","id":"123","title":"this is suraj sharma","body":"this is inside"}
    params ={
        method : "post",
        headers: {
            "content-type":"application/json"
        },
        body: data
    }
    fetch(url).then(response=> response.json())
    .then(data=> console.log(data)
    )
}