"use script"

console,console.log("Script Logged");

let points = 0;

// welcome the user with a message
alert("welcome to my guessing game!")

// ask the user for their name

let user = prompt("I'm bobbert, what is your name?").toLowerCase();
console.log(user)

// respose could be a string and empity string or null
// if user is an empty string or numm we keep asking the user for thier name
// empty string and null are falsy values, so if user is false ask for thier name
// i will need a loop that runs until the condition is not met
// everytioome the loop runs ask the question again

// (!) exclamation mark is logical not
// (!) 

while(!user){
    user = prompt("what is your name fool?").toLowerCase();
}

// falsy values
//null - absense of any value
// undefined - a variable that has not been assigned a value
// false - boleen value
// NaN -not a number
// 0 - the number zero
// -0 - the number negative 0
// "" - an epity string including "", '', ``
// (!==) this is not equals comparison operator

if (user !== "bobbert");
    alert("to bad");


alert("Hi, " + user + " I am so glad you decided to come to my site.");

let answer = prompt("is my fav food popcorn?").toLowerCase();


//Arrays

// Arrays allow us to hold more than one value in a single variable
// array indexes start from 0
// each item in an array is named an element
// arrays should be declared using 'const' as they cannot be reassigned
// arrays can be manipulated using a varity or array methods

// array methods
// .length- tells is the length of the array
// .push - this adds an element to the end of the array
// .pop - removes an element from the end of the array
// .unshift -adds an element to the start of an array
// .shift - removes an element from the start of an array
// .indexOf - tells you the index of an array

const foodsChrisLikes = ["mash","proridge","banana"];
console.log()

//

const=7
let guess = prompt("guess the number");

for (let i =2; 1>= 0; i==) {
    if (i===0){
    alert( out of goes);
}

if (guess <){
    alert("to low");
}else if(guess > number){
    alert("to high"){

    }else{
        points++;
        alert("yey");
        break;
    }
}
}





//const number ="7";
const numer = Math.floor(Math.random() *10+1);
for (let i = 2; i >= 0; 1--){

    let guesses = 1 + 1;
    let guess = prompt("guess a number between 1 - 10! You have" + guesses + " left");

    const guessNum = parseFloat(guess);

    if (guess === number){
        console.log("you win");
        alert("You win.");
        break;
    }else if (guessNum < number){
        console.log("to low");
        alert("To low.");
        else if (guessNum > number){
            console.log("to high")
            alert("To high.");
        }
    }

    if(i=== 0){
        alert("the correct number was 3");
        break;
    }
}

function sayHello(){
    console.log("Hello");
    }

       sayHello();

       function SayGoodbye(name){
           console.log("Good Bye" + name +".");
       }

       SayGoodbye("neo");

       function getFullName(firstName, secondname){
           return firstName + " "+ secondname
       }

       let ada = getFullName( "ada", "lovelace");
       console.log("ada" + ada);

       function yesOrNoPrompt(promptInfo){
           let userInput= (promptInfo);
           if (userInput === "yes"){
               console.log("hurray");
           }else if (userInput === "no"){
               console.log("nope");
           }else if (userInput === "maybe"){
               console.log("make upo your mind.");
           }else{
               console.log("error!!");
           }
       }

       yesOrNoPrompt("Well yes or no");
       yesOrNoPrompt("how about yes or no");

       const myName = function(name){
           console.log(name);
       }
       
       myName();

       
