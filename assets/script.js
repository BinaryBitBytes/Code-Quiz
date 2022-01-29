/*WHEN I click the start button
THEN a timer starts and I am presented with a question*/
const button = document.querySelector('button');
var currentTimer =('');
var startTimer = 75; //start timer with 75 seconds on it
var userAnswer = document.querySelector('inAnswer#a'); //value stored in answer
var inAnswer = '';
var a = Text('What language is used to mark up web pages?');//first question
var aAnswer = Text('HTML'.toUpperCase); //answer to first question
var b = Text('What language is used to style web pages?');// second question
var bAnswer = Text('CSS'.toUpperCase);// answer to second question
var c = Text('What language is used make web pages interactive?');//first question
var cAnswer = Text('JavaScript'.toUpperCase); //answer to first question
var d = Text('What language is used to transmit data in web pages?');// second question
var dAnswer = Text('JSON'.toUpperCase);// answer to second question
var questions = ['a','b','c','d'];// creating a varaible and making it equeal to the array of questions
var askQuestion ='';
var nextQuestion='';
var checkAnswer='';
var setTime= localStorage.setItem(setSeconds('time'));//sets the timer to local storage
var holdTime= localStorage.getItem(getSeconds('time'));//getchest the timer from local storage
var resetTime= localStorage.Clear('time');

function time(currentTimer,set,hold) {
    setInterval(function(){ //set interval function allows us to create a time interval to have a start and an end
    currentTimer = startTimer--;
    return;
    }, 75000);
    console.dir(time);
    //var setTime= localStorage.setItem;//sets the timer to local storage
    setTime = set;
    holdTime = hold;
    //var holdTime= localStorage.getItem;//getchest the timer from local storage
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

function outTime(tell){ //fn defined for letting user out of time
    tell=alert("You are out of time!");
    for (i=time(currentTimer);i>=0;i--){
        tell();
        //code block
    }; //alert message telling the user they are out of time.
};

function displayTimer(){
    let boxTime=currentTimer;
     
}

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