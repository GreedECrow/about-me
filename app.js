"use strict";
let user;
let answer1;
let answer2;
let answer3;
let answer4;
let answer5;

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

alert("You can only answer with a 'yes', a 'y', a 'no' or an 'n'. All the answers can be found on the about me page.");

answer1 = prompt(user + ", am I over 2000 years old?").toLowerCase; 

while (answer1 != "yes" && answer1 != "y" && answer1 != "no" && answer1 != "n") {
    alert("please answer yes/no, y/n only.");
    answer1 = prompt(user + ", am I over 2000 years old?").toLowerCase();
}

if (answer1 === "yes" || answer1 === "y"){
    console.log("Correct!");
    alert("Correct!!");
}else if (answer1 === "no" || answer1 === "n"){ 
    console.log("Nope, back to the beginning with you.");
    alert("Nope, back to the beginning with you.");
}else{
    console.log("You're just guessing now.")
    alert("You're just guessing now.");
}

}
question1()



function question2(){
    
    answer2 = prompt(user + ", Does anything in my education history include anything about learning magic?").toLowerCase; 
    
    while (answer2 != "yes" && answer2 != "y" && answer2 != "no" && answer2 != "n") {
        alert("please answer yes/no, y/n only.");
        answer2 = prompt(user + ", Does anything in my education history include anything about learning magic?").toLowerCase();
    }
    
    if (answer2 === "yes" || answer2 === "y"){
        console.log("Correct!");
        alert("Correct!!");
    }else if (answer2 === "no" || answer2 === "n"){ 
        console.log("Nope, back to the beginning with you.");
        alert("Nope, back to the beginning with you.");
    }else{
        console.log("You're just guessing now.")
        alert("You're just guessing now.");
    }

    }    
    question2()



    function question3(){
        
        answer3 = prompt(user + ", Dungeon Crawler was my second job?").toLowerCase; 
        
        while (answer3 != "yes" && answer3 != "y" && answer3 != "no" && answer3 != "n") {
            alert("please answer yes/no, y/n only.");
            answer3 = prompt(user + ", Dungeon Crawler was my second job?").toLowerCase();
        }
        
        if (answer3 === "yes" || answer3 === "y"){
            console.log("Incorrect!!");
            alert("Incorrect!!");
        }else if (answer3 === "no" || answer3 === "n"){ 
            console.log("Correct!!.");
            alert("Correct!!.");
        }else{
            console.log("You're just guessing now.")
            alert("You're just guessing now.");
        }
        
        }
        question3()


        function question4(){
            
            answer4 = prompt(user + ", was I ever a ground Gargoyle?").toLowerCase; 
            
            while (answer4 != "yes" && answer4 != "y" && answer4 != "no" && answer4 != "n") {
                alert("please answer yes/no, y/n only.");
                answer4 = prompt(user + ", was I ever a ground Gargoyle?").toLowerCase();
            }
            
            if (answer4 === "yes" || answer4 === "y"){
                console.log("Nope, although I wouldn't have turned it down");
                alert("Nope, although I wouldn't have turned it down");
            }else if (answer4 === "no" || answer4 === "n"){ 
                console.log("That's right, roof top all the way for this gargoyle.");
                alert("That's right, roof top all the way for this gargoyle.");
            }else{
                console.log("You're just guessing now.")
                alert("You're just guessing now.");
            }
            
            }
            question4()


            function question5(){
   
                answer5 = prompt(user + ", is learning to code one of my goals?").toLowerCase; 
                
                while (answer5 != "yes" && answer5 != "y" && answer5 != "no" && answer5 != "n") {
                    alert("please answer yes/no, y/n only.");
                    answer5 = prompt(user + ", is learning to code one of my goals?").toLowerCase();
                }
                
                if (answer5 === "yes" || answer5 === "y"){
                    console.log("Or course it is!");
                    alert("of course it is!");
                }else if (answer5 === "no" || answer5 === "n"){ 
                    console.log("Nope.");
                    alert("Nope.");
                }else{
                    console.log("You're just guessing now.")
                    alert("You're just guessing now.");
                }
                
                }
                question5()