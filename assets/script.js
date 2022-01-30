/*WHEN I click the start button
THEN a timer starts and I am presented with a questioen*/
const time = new Date();
var timer.setSeconds(75);
console.log(timer.getSeconds());
const button = document.getElementsById("button").addEventListener("click",countDown());
const questions = document.getElementById('question');
const score= document.getElementByID("currentScore");
const currentTimer =('');
const startTimer = 75; //start timer with 75 seconds on it
const endOfTimer = 0;
var askQuestion ='';
var nextQuestion='';
var checkAnswer='';
const setTime= window.localStorage.setItem(setSeconds('time'));//sets the timer to local storage
const holdTime= window.localStorage.getItem(getSeconds('time'));//getchest the timer from local storage
const resetTime= window.localStorage.Clear('time');
var userAnswer = document.querySelector('inAnswer#a'); //value stored in answer
var inAnswer = '';
let currentQuestion= {};

function outTime(tell){ //fn defined for letting user out of time
    tell=alert("You are out of time!");
    for (i=time(currentTimer);i>=0;i--){
        tell();
        //code block
    }; //alert message telling the user they are out of time.
};

function displayTimer(){
    let boxTime=currentTimer;

function startQuiz(){
    var current= new Date().getSeconds();
    var count = setInterval(function(){
        var meow = new Date().getTime();
        var down= current - meow;
        var seconds = Math.floor((down % (1000 * 60)) / 1000));    
    });
    document.getElementById("timer").innerHTML =seconds + "s ";

    if (down<0) {
        clearInterval(count);
        document.getElementById("timer").innerHTML = "Out if Time";
    }, 1000);
    }

function countdown(){
    
};
function time(currentTimer,hold) {
    setInterval(function(){ //set interval function allows us to create a time interval to have a start and an end
        return;
    }, 75000);
    console.dir(time);
    //var setTime= localStorage.setItem;//sets the timer to local storage
    holdTime = hold;
    //var holdTime= localStorage.getItem;//getchest the timer from local storage
    for (var currentTimer=(startTimer-1); (startTimer-currentTimer)>=endOfTimer; currentTimer--){
        if (startTimer==currentTimer){
            let checkTime= currentTimer ;
            let keepPlaying= checkTime ;
            return keepPlaying;
        } else if (currentTimer>endOfTimer){ ;
            
        }
        else(currentTimer==endOfTimer){ ;
            
        }}
        console.log(typeof(time));
        console.log(typeof(currentTimer && startTimer));
        console.log(set);
        console.log(hold);
    };
    function timeUp(){//parent fn to out of time function
        setTimeout(outTime, 1000);//setTimeout to returnOUT TIME hopefully in miliseconds
        if(now>start == end){
            let end = {
                i=now,
                name:"test"
            };
            end=0;
        }
        else(keepPlaying){
            let keepPlaying = time();
            keepPlaying * nextQuestion;
        };
            /*function(i=0 , i<=1000, i--;){
            };
        }
    
            };
    
        }else if{
            let outTime = alert('You ran out of time and you lose');
        }else{
    
        };
    
        };
        };*/
    
         
    }

    /*let questions= [];currently an empty array COMMENTED THIS OUT 
    BECAUSE ITS ALREADY IN USE; CONSIDER USING LOCAL VARAIBLES INSTEAD OF GLOBAL*/
    /*-------- FETCH JSON COMMENTED OUT
    fetch("questions.json")
    .then(ask ,{
        return ask.json();
    })
.then(loadedQuestions,{
    console.log(loadedQuestions);
    questions=loadedQuestions;
});
*/
/*var a = Text('What language is used to mark up web pages?');//first question
var aAnswer = Text('HTML'.toUpperCase); //answer to first question
var b = Text('What language is used to style web pages?');// second question
var bAnswer = Text('CSS'.toUpperCase);// answer to second question
var c = Text('What language is used make web pages interactive?');//first question
var cAnswer = Text('JavaScript'.toUpperCase); //answer to first question
var d = Text('What language is used to transmit data in web pages?');// second question
var dAnswer = Text('JSON'.toUpperCase);// answer to second question
*/
//var questions = ['a','b','c','d'];// creating a varaible and making it equeal to the array of questions


    /*
    button.addEventListener('click',{
        button.textContent = startTimer
      });
    //Document.getElementByID.button-addon1
}

/*WHEN I answer a question
THEN I am presented with another question*/

 //value stored in question

/*WHEN I answer a question incorrectly
fn nope will subtract time
THEN time is subtracted from the clock*/
/*var incorrect = wrong
function nope(){};*/

/*WHEN all questions are answered or the timer reaches 0
THEN the game is over*/
/*var timeOver = [];*/

/*WHEN the game is over
THEN I can save my initials and my score*/
/*var initials = [];
function user(){

};
var score = [];
function score(){

};
*/