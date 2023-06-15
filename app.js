"use strict";
let user;
let answer1;
let answer2;
let answer3;
let answer4;
let answer5;
let answer6;
let answer7;
let fingers;
let guess;
let maxGuess;
let points

alert("QUIZZ TIME!!");{
    console.log("quizz time");
}

function userName(){
    user = prompt("Please tell me your name so we can begin.");
    console.log(user);
    alert("Ok " + user + ", hope you're ready for question 1.");
} 

userName()

function question1(){

alert("You can only answer with a yes/no, y/n. All the answers can be found on the about me page.");

answer1 = prompt(user + ", am I over 2000 years old?").toLowerCase();
console.log(answer1);
while (answer1 != "yes" && answer1 != "y" && answer1 != "no" && answer1 != "n") {
    alert("please answer yes/no, y/n only.");
    answer1 = prompt(user + ", am I over 2000 years old?").toLowerCase();
}

if (answer1 === "yes" || answer1 === "y"){
    console.log("Correct!");
    alert("Correct!!");

}else{
    console.log("Nope, try again.");
    alert("Nope, try again.");
}
}
question1()



function question2(){
    
    answer2 = prompt(user + ", Does anything in my education history include anything about learning magic?").toLowerCase(); 
    
    while (answer2 != "yes" && answer2 != "y" && answer2 != "no" && answer2 != "n"){
        alert("please answer yes/no, y/n only.");
        answer2 = prompt(user + ", Does anything in my education history include anything about learning magic?").toLowerCase();
    }
    
    if (answer2 === "yes" || answer2 === "y"){
        console.log("SHA-BOOM-BOOM!");
        alert("SHA-BOOM-BOOM!");

    }else if(answer2 === "no" || answer2 === "n");
        console.log("Nope, missed out on a point.");
        alert("Nope, missed out on a point.");

    }    
    question2()



    function question3(){
        
        answer3 = prompt(user + ", Dungeon Crawler was my second job?").toLowerCase(); 
        
        while (answer3 != "yes" && answer3 != "y" && answer3 != "no" && answer3 != "n"){
            alert("please answer yes/no, y/n only.");
            answer3 = prompt(user + ", Dungeon Crawler was my second job?").toLowerCase();
        }
        
        if (answer3 === "yes" || answer3 === "y"){
            console.log("Incorrect!!");
            alert("Incorrect!!");

        }else if(answer3 === "No" || answer3 === "n");
            console.log("Correct, it was my third job!!.");
            alert("Correct, it was my third job!!.");
        }
        question3()


        function question4(){
            
            answer4 = prompt(user + ", was I ever a ground Gargoyle?").toLowerCase(); 
            
            while (answer4 != "yes" && answer4 != "y" && answer4 != "no" && answer4 != "n") {
                alert("please answer yes/no, y/n only.");
                answer4 = prompt(user + ", was I ever a ground Gargoyle?").toLowerCase();
            }
            
            if (answer4 === "yes" || answer4 === "y"){
                console.log("Nope, although I wouldn't have turned it down");
                alert("Nope, although I wouldn't have turned it down");

            }else if(answer4 === "no" || answer4 === "n");
                console.log("That's right, roof top all the way for this gargoyle.");
                alert("That's right, roof top all the way for this gargoyle.");
            }
            question4()


            function question5(){
   
                answer5 = prompt(user + ", is learning to code one of my goals?").toLowerCase(); 
                
                while (answer5 != "yes" && answer5 != "y" && answer5 != "no" && answer5 != "n") {
                    alert("please answer yes/no, y/n only.");
                    answer5 = prompt(user + ", is learning to code one of my goals?").toLowerCase();
                }
                
                if (answer5 === "yes" || answer5 === "y"){
                    console.log("Or course it is!");
                    alert("of course it is!");

                }else if(answer5 === "no" || answer5 === "n");
                    console.log("Nope.");
                    alert("Nope.");
                }
                question5()



                function question6(){
     
                const number = Math.floor(Math.random() *10+1);
for (let i = 2; i >= 0; i--){

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
    }else if (guessNum > number){
            console.log("to high")
            alert("To high.");
        }
    

    if(i=== 0){
        alert("the correct number was 3");
        break;
    }
}
}

question6()

const topTen = ["Final Fantasy 7", "Final Fantasy 14", "The Witcher 3", "Horizen: Zero Dawn and Forbbiden West", "Pretty much anything Wizards of the Coast related", "Pretty much anything World of Darkness related", "Comics", "Fantasy/Science fiction", "Drawing", "Heavy metal"];