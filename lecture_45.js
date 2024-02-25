// ..............................AJAX(Asynchronous JavaScript and XML)...........................

// . AJAX, which stands for Asynchronous JavaScript and XML,is a technique used in 
// web development  to create interactive web applications.

// AJAX is a misleading name. AJAX applications might use XML to transport data, 
//but it is equally common to transport data as plain text or JSON text.

// XML stands for Extensible Markup Language.

// It is a markup language and file format for storing, transmitting, and reconstructing data.

// The key difference between HTML and XML is that HTML displays data and describes the structure of a webpage, whereas XML stores and transfers data. 

// It allows you to update specific parts of a web page without requiring a full page reload.
// AJAX enables communication between a web browser and a server, facilitating the exchange of data in the background.



let fetchData = document.getElementById("fetchData")
let backupData = document.getElementById("backupData")

fetchData.addEventListener('click',fetchhandler);

function fetchhandler(){

// XMLHttpRequest (XHR) is a JavaScript class containing methods to asynchronously transmit HTTP requests from a web browser to a web server.
    console.log("you click the fetch btn");
// Initiate an xhr request
const xhr = new XMLHttpRequest();
// open the object

// //                      GET REQ.
xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)

 
//what to do on progress
xhr.onprogress = function () {

    console.log("on progress");
    
}

// //  XMLHttpRequest: readyState property

// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.

// xhr.onreadystatechange = function () {
//     if(this.readyState==4 && this.status==200  ){
//         console.log(this.response)
//     }else if(this.readyState==4 && this.status==404  ) {
//         console.log("File not found");
//     }
// }

xhr.onload = function(){
    if(this.status==200){

        console.log(this.responseText);
    }
    else{
        console.log("some error occur");
    }
}

// send the request

xhr.send();

console.log("we are done");
}






//...................backup btn........................

backupData.addEventListener('click',backuphandler);

function backuphandler(){
 const xhr = new XMLHttpRequest();
 console.log("you click the Backup btn");    

// //                      POST REQ.
xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true)    

 
//what to do on progress
xhr.onprogress = function () {

    console.log("on progress");
    
}

xhr.onload = function(){
    if(this.status==200){

        console.log(this.responseText);
    }
    else{
        console.log("some error occur");
    }
}

// send the request

xhr.send();

console.log("we are done");
}









