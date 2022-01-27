/*WHEN I click the start button
THEN a timer starts and I am presented with a question*/
var currentTimer =('');
var startTimer = 75; //start timer with 75 seconds on it
function time(currentTimer) {
    setInterval(function(){ //set interval function allows us to create a time interval to have a start and an end
    currentTimer = startTimer--;
    return;
    }, 1000);
    console.dir(time);
    localStorage.setItem;//sets the timer to local storage
    localStorage.getItem;//getchest the timer from local storage
};
function timeUp(){//parent fn to out of time function
    setTimeout(outTime, 1000);
    }
function outTime(){ //fn defined for letting user out of time
    alert("You are out of time!"); //alert message telling the user they are out of time.
}

/*WHEN I answer a question
THEN I am presented with another question*/

var inAnswer = '';
var userAnswer = document.querySelector('inAnswer#a'); //value stored in answer
var a = Text('What language is used to mark up web pages?');
var aAnswer = Text('HTML'.toUpperCase);
var b = Text('What language is used to style web pages?');
var bAnswer = Text('CSS'.toUpperCase);
var questions = ['a','b','c','d','e']; //value stored in question

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
