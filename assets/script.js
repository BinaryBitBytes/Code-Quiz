/*WHEN I click the start button
THEN a timer starts and I am presented with a questioen*/
const time = new Date();
const startTimer = 75; //start timer with 75 seconds on it
//var timer = theTime.setSeconds(startTimer);
const buttonGet = button;
const questions = [
    {
        "QUESTION": "What language is used to mark up web pages?",
        "FIRSTCHOICE": "JSON",
        "SECONDCHOICE":"HTML",
        "THIRDCHOICE":"BOOTSTRAP",
        "FOURTHCHOICE":"PYTHON",
        "ANSWER": 2
    },
    {
        "QUESTION": "What language is used to style web pages",
        "FIRSTCHOICE": "CSS",
        "SECONDCHOICE":"JAVASCRIPT",
        "THIRDCHOICE":"JSON",
        "FOURTHCHOICE":"HTML",
        "ANSWER": 1
    },
    {
        "QUESTION": "What language is used make web pages interactive?",
        "FIRSTCHOICE": "API'S",
        "SECONDCHOICE":"JSON",
        "THIRDCHOICE":"JQUERY",
        "FOURTHCHOICE":"JAVASCRIPT",
        "ANSWER": 4
    },
    {
        "QUESTION": "What language is used to transmit data in web pages?",
        "FIRSTCHOICE": "SQL",
        "SECONDCHOICE":"JAVASCRIPT",
        "THIRDCHOICE":"BOOTSTRAP",
        "FOURTHCHOICE":"JSON",
        "ANSWER":4
    }
];
//document.getElementById('question');
const score= document.getElementsByClassName(".currentScore");
const currentTimer =('');
const endOfTimer = 0;
var setSeconds=time;
var askQuestion ='';
var nextQuestion='';
var inAnswer = '';
var checkAnswer=[$.getJSON("questions.json")];
var seconds= time.setSeconds(75);
const setTime= window.localStorage(seconds, 'time');//setItem.(setSeconds(),('time');//sets the timer to local storage
const holdTime= window.localStorage.getItem(getSeconds(),('time'));//getchest the timer from local storage
const resetTime= window.localStorage.Clear('time');
var userAnswer = document.querySelector('inAnswer#a'); //value stored in answer
let currentQuestion= [''];

function outTime(tell){ //fn defined for letting user out of time
    tell=alert("You are out of time!");
    for (i=time(currentTimer);i>=0;i--){
        tell();
        //code block
    }; //alert message telling the user they are out of time.
};

/*    function displayTimer(){
        let boxTime=currentTimer;
    }    /Will try to use jquery to call this function on the DOM */

function startQuiz(seconds){
    var current= new Date().getSeconds();
    var count = setInterval(function(){
        var meow = new Date().getTime();
        var down= current - meow;
        var seconds = Math.floor((down % (1000 * 60)) / 1000);    
    });
    document.getElementById("timer").innerHTML =seconds + "s ";
    
    if (down<0) {
        clearInterval(count);
        document.getElementById("timer").innerHTML = "Out if Time";
    };
}

addEventListener("click", countDown);
function countDown(started){
    document.getElementsById("button").addEventListener("click",countDown());
    let buttonClick=document.getElementById("button").onclick;
    buttonClick.style.color = "red";
    
};
function theTime(currentTimer,hold) {
    var timer = theTime.setSeconds(startTimer);
    
    setInterval(function(){ //set interval function allows us to create a time interval to have a start and an end
        console.log(time.getSeconds.call(this.theTime));
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
        } else if (currentTimer>endOfTimer){ 
            console.log('test the console else if');    
        }
        else{
            //(currentTimer==endOfTimer)
            console.log('test the console else ');
            
        }
        console.log(typeof(time));
        console.log(typeof(currentTimer && startTimer));
        console.log(set);
        console.log(hold);
    };}

    function timeUp(){//parent fn to out of time function
        setTimeout(outTime, 1000);//setTimeout to returnOUT TIME hopefully in miliseconds
        if(now>start == end){
            let end = {
                //now=i,
                name:"test"
            };
            end=0;
        }
        else{
            //(keepPlaying)
            let keepPlaying = time();
            keepPlaying && nextQuestion;
        };
    };

    startQuiz();