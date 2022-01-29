function prompt(store){
    document.getElementById("question").innerHTML = jsonData[store].questionz;
    document.getElementById("option1").innerHTML = jsonData[store].option1;
    document.getElementById("option2").innerHTML = jsonData[store].option2;
    document.getElementById("option3").innerHTML = jsonData[store].option3;
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