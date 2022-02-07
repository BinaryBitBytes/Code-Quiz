/*WHEN I click the start button
THEN a timer starts and I am presented with a questioen*/
let time = new Date();
let SecondS = new Date().getTime() / 1000;
let startTimer = 75; //start timer with 75 seconds on it
let questionIndex  = 0;
//var timer = theTime.setSeconds(startTimer);
let buttonGet = button;
let questions = [
    {
        "QUESTION": "What language is used to mark up web pages?",
        "FIRSTCHOICE": "JSON",
        "SECONDCHOICE": "HTML",
        "THIRDCHOICE": "BOOTSTRAP",
        "FOURTHCHOICE": "PYTHON",
        "ANSWER": 2
    },
    {
        "QUESTION": "What language is used to style web pages",
        "FIRSTCHOICE": "CSS",
        "SECONDCHOICE": "JAVASCRIPT",
        "THIRDCHOICE": "JSON",
        "FOURTHCHOICE": "HTML",
        "ANSWER": 1
    },
    {
        "QUESTION": "What language is used make web pages interactive?",
        "FIRSTCHOICE": "API'S",
        "SECONDCHOICE": "JSON",
        "THIRDCHOICE": "JQUERY",
        "FOURTHCHOICE": "JAVASCRIPT",
        "ANSWER": 4
    },
    {
        "QUESTION": "What language is used to transmit data in web pages?",
        "FIRSTCHOICE": "SQL",
        "SECONDCHOICE": "JAVASCRIPT",
        "THIRDCHOICE": "BOOTSTRAP",
        "FOURTHCHOICE": "JSON",
        "ANSWER": 4
    }
];
//document.getElementById('question');
const score = document.getElementsByClassName(".currentScore");
const currentTimer = ('');
const endOfTimer = 0;
var setSeconds = time;
var askQuestion = '';
var nextQuestion = '';
var inAnswer = '';
var seconds = time.setSeconds(75);
const setTime = window.localStorage.setItem(SecondS, 'time');//setItem.(setSeconds(),('time');//sets the timer to local storage
const holdTime = window.localStorage.getItem(SecondS, ('time'));//getchest the timer from local storage
//clear the local storage?///const resetTime= window.localStorage.Clear('time');
var userAnswer = document.querySelector('inAnswer#a'); //value stored in answer
let currentQuestion = [''];

function outTime(tell) { //fn defined for letting user out of time
    tell = alert("You are out of time!");
    for (i = time(currentTimer); i >= 0; i--) {
        tell();
        //code block
    }; //alert message telling the user they are out of time.
};



function startQuiz() {
    var count = setInterval(function () {
        startTimer--;
        document.getElementById("timer").innerHTML = startTimer;


        if (startTimer == 0) { // if i were to do ===0 then it would count to negative and not print out of time. This would continue counting in negative direction.
            clearInterval(count);
            document.getElementById("timer").innerHTML = "Out if Time";
        };

        console.log('hi')
    }, 1000);
    displayQuestion();
}




document.getElementById("button-addon1").addEventListener("click", function () {
    startQuiz();
});


function displayQuestion(){
    var h1 = document.createElement('h1');
    h1.append(questions[questionIndex].QUESTION);
    var form1 =document.createElement('button');
    var form2 =document.createElement('button');
    var form3 =document.createElement('button');
    var form4 =document.createElement('button');
    form1.append(questions[questionIndex].FIRSTCHOICE);
    form2.append(questions[questionIndex].SECONDCHOICE);
    form3.append(questions[questionIndex].THIRDCHOICE);
    form4.append(questions[questionIndex].FOURTHCHOICE);
    document.getElementById('question').append(h1);
    document.getElementById('first').append(form1);
    document.getElementById('second').append(form2);
    document.getElementById('third').append(form3);
    document.getElementById('fourth').append(form4);
    //
    //h1.append(questions[questionIndex].QUESTION.);
    //document.getElementById('question').append(h1);


    


}