//...............................................Snake_water_Gun_Game......................................................

const characters = ["snake", "water", "gun"];



// ..................score..............................
let user_score = 0;
let computer_score = 0;



for(i=1;i<=3;i++){  // loop

console.log(`Round ${i}`)  // Tells the no of rounds

let inp = prompt("ENTER AMONG SNAKE,WATER,GUN ");      // To take input from user.
inp =inp.toLowerCase(inp);
console.log(inp);


const random = Math.floor(Math.random() * characters.length); // To select random array.
let ran = (characters[random]);
console.log(ran);


//............CASE 1 = Match draw.......................
if(inp===ran){
    console.log("Draw");
}
//............CASE 2 = user win ........................
else if(inp==="snake" && ran === "water"){
    console.log("You win"); 
    user_score  ++;
}
else if(inp==="water" && ran === "gun"){
    console.log("You win");
    user_score  ++;
}
else if(inp==="gun" && ran === "snake"){
    console.log("You win");
    user_score  ++;
}
//...........CASE 3 = computer win ......................
else if(inp==="water" && ran === "snake"){
    console.log("You loss");
    computer_score  ++;
}
else if(inp==="gun" && ran === "water"){
    console.log("You loose");
    computer_score  ++;
}
else if(inp==="snake" && ran === "gun"){
    console.log("You loose");
    computer_score  ++;
}
//............CASE 4 = Not valid ........................
else{
    console.log("Not valid")
}

}


// ......................Scoreboard......................
console.log(`user_score is ${user_score}`);
console.log(`computer_score is ${computer_score}`);

if(user_score==computer_score){
    console.log("Match Draw");
}else if(user_score>computer_score){
    console.log("You Won The Match");
}else{
    console.log("You losse The Match");
}

























