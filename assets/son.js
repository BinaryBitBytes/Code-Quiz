//Starts the prompt at the first question with a indexed position of 0
prompt(0);

function prompt(store){
    document.getElementById("question").innerHTML = jsonData[store].questionz;
    document.getElementById("FIRSTCHOICE").innerHTML = jsonData[store].FIRSTCHOICE;
    document.getElementById("option_2").innerHTML = jsonData[store].option2;
    document.getElementById("option_3").innerHTML = jsonData[store].option3;
}

var i=0;
var counted=0;
function checkAnswer(){
    if(document.getElementById().checked && jsonData[i].option1 == jsonData[i].answer)
    counted++;
}
    if(document.getElementById().checked && jsonData[i].option2 == jsonData[i].answer)
    counted++;
}
    if(document.getElementById().checked && jsonData[i].option3 == jsonData[i].answer)
    counted++;
}
i++; //incriment to the next question
if(jsonData.length-1 < i){
    document.write("Score: "+counted);
}
prompt(i);
}