function submitAnswers() {
    var total = 6;
    var score = 0;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
   
    
    // Get User Input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;

    // Validation

    // Set Correct Answers
    var answers = ["c", "b", "b", "c", "c", "c"];

    // Check Answers
    for(i = 1; i <= total;i++){
        if(eval('q'+i) == answers[i - 1]){
            correct++;
        }
        else if (eval('q'+i) != "") {
            incorrect++;
        }
        else{
            unanswered ++;
        }
    }

    // Display Results
    var results = document.getElementById('results');
    
    results.innerHTML = '<h3>All Done! <br>Correct Answers: <span>'
    +correct+'</span> <br> Inccorect Answers: <span>'
    +incorrect+'</span> <br> Unanswered: <span>'
    + unanswered +'</span></h3>';
    //alert('You scored '+score+' out of ' +total);

     clearTimeout(timerId);
     $("#questions").hide();
    return false;

}
     // Show timer
     var timeLeft = 30;
     var timerId = null;

    $(document).ready(function(){
       $("#questions").hide();
       //$("#submitAnswers").hide();

        $("#start_button").click(function(){
        $("#startButtonDiv").hide();
        $("#questions").show();

        timerId = setInterval(countdown, 1000);
        $('#timer').text(timeLeft +' seconds ');

        });

        $('#submitAnswersButton').click(function(){
            submitAnswers();
           
        });

    });
    
    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            submitAnswers();
            $("#questions").hide();
        } else {
            $('#timer').text ( timeLeft + ' seconds ');
            console.log(timeLeft + ' seconds ');
            timeLeft--;
        }
    }