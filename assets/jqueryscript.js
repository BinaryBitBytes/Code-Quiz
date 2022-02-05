/* 
$("#timer").localStorage.setTime("time");

$.getJSON("/questions.json",function(questions){
    var question =[];
    $.each( questions, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
      });
     
      $( "<ul/>", {
        "class": "quizQuestions",
        html: items.join( "" )
      }).appendTo( "body" );
    }); //JSON.stringify(questions);
    console.log(questions[1,2,3,4].QUESTION)
    $('#question').append(question)
})

*/