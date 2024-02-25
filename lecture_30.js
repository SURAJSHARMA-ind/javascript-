//...........................................Searching_the_DOM...............................................................



let title = document.getElementById("card_tite") 

title.style.color = "blue"


let clas = document.querySelectorAll(".card-title")
clas[0].style.color = "red"
clas[1].style.color = "green"
clas[2].style.color = "blue"



let text = document.querySelector(".card-text")
text.style.color = "yellow"
text.style.background = "black"


let link = document.getElementsByTagName("a")
console.log(link);


let links = document.querySelector(".card").querySelectorAll("a")

console.log(links)


console.log(document.getElementsByName("search"))


