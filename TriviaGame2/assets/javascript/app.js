// Properties
var userPick;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var question = 0;
var timer = 30;

// Questions / Options / Answers 
var dexterQuestion = [{
    question: "In what year did Dexter premiere?",
    choices: ["2003", "2009", "2006"],
    validAnswer: 2
}, {
    question: "What was the main ingredient in most of the gallons and gallons of pretend blood used on the show?",
    choices: ["maple syrup", "corn syrup", "coconut oil"],
    validAnswer: 0
}, {
    question: "Jennifer Carpenter played Dexter's adopted sister Debra. What relationship did Jennifer Carpenter and Michael C. Hall share in real life?",
    choices: ["They are cousins.", "They were married.", "They are actually sister and brother."],
    validAnswer: 1
}, {
    question: "What character on the show was loosely based on real-life BTK serial killer Dennis Rader?",
    choices: ["Arthur Mitchell", "Harry Morgan", "Special Agent Frank Lundy"],
    validAnswer: 0
}, {
    question: "What insect appears in the opening credits of the show?",
    choices: ["an ant", "a cockroach", "a mosquito"],
    validAnswer: 2
}, {
    question: "Although Dexter is a serial killer, he does live by a code. Who taught him to spare the innocent?",
    choices: ["his sister", "his adoptive father", "his imaginary friend Harry"],
    validAnswer: 1
}, {
    question: "Dexter keeps trophies of his kills. What does he collect from his victims?",
    choices: ["blood", "ears", "fingernails"],
    validAnswer: 0
}, {
    question: "Dexter has a preferred modus operandi. Where does he like to dispose of bodies?",
    choices: ["in water", "in landfills", "as medical waste"],
    validAnswer: 0
}, {
    question: "As far as Dexter is concerned, one category of human is definitely off the cutting table. Who would Dexter never hurt?",
    choices: ["a nun", "a child", "a pregnant woman"],
    validAnswer: 1
}, {
    question: "The show was set in which city and state?",
    choices: ["Miami, Florida", "San Francisco, California", "Fort Lauderdale, Florida"],
    validAnswer: 0
}

];

var i = 0;
var timer ;

$(document).ready(function(){
    startGame();
});

function startGame(){
    timer = setInterval(nextQuestion, 30000);

}

function nextQuestion(){

    $("#question").text("");
    $("#choices").text("");
    if(i == dexterQuestion.length)
{
    clearInterval(timer);

}
else if( i < dexterQuestion.length){
    $("#choices").html("<b>" + dexterQuestion[i].question + "</b>");
    console.log("Question " + i + " is being displayed. The question is: " + dexterQuestion[i].question);
    for (var j = 0; j < dexterQuestion[i].choices.length; j++){
        var radioBtn = $('<input type="radio" name="q'+i+"a"+j+'" /> <label for="q'+i+"a"+j+'"> '+dexterQuestion[i].choices[j]+'</label><br/>');
    }

    i++;
}

}