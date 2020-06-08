
var time = 200;
var score = 0;
var index = 0;
let timeInterval;
let selectedAnswer;
$(document).ready(function(){
    $(".next-btn").hide(); // hide next 
    $(".highscore-btn").hide(); // hide highscore
    $(".question-container").hide(); // hide question container
    $(".timer").hide(); // hide time tracker
    $(".green-alert").hide(); // hide green alert
    $(".red-alert").hide(); // hide red alert
    // Start quiz
    $(".start-btn").on("click",function(){
    $(".timer").show(); // show time tracker
    $(".start-btn").hide(); // hide start 
    $(".question-container").show(); //show Q & A's
    $(".next-btn").show(); // hide next
    startTimer();
    showQuestions(); // show questions
    });
    // Timer 
    function startTimer(){
        timeInterval = setInterval(function(){
            if(time>=0){
                $("#time-tracker").text("Time: " + time + " sec");
                    time--;
            }
            else{
                alert("The time is up and quiz is over.");
                clearInterval(timeInterval);
            }
        }, 1000);
    }
    //Questions
    function showQuestions(){
        if(index > questions.length-1){
            console.log("Quiz Over");
            clearInterval(timeInterval);
            lastScore();
            $(".highscore-btn").show();
        }
        else{
            $(".question").text(questions[index].question);
            $(".answerA").text(questions[index].answers[0].text);
            $(".answerB").text(questions[index].answers[1].text);
            $(".answerC").text(questions[index].answers[2].text);
            $(".answerD").text(questions[index].answers[3].text);
        }
    }
    // Call running questions
    $("#answer-btns").on("click", runningQuestions);
    function runningQuestions(){
        if(index <= (questions.length-1)){
            selectedAnswer = event.target.textContent;
            if(selectedAnswer === questions[index].correct){
                $(".green-alert").show(); 
            }
            else{
                time -= 25;
                $(".red-alert").show(); 
            }
        }
        else{
            console.log("The time is up and quiz is over.");
        }
}
    // increment score
    $(".next-btn").on("click", function(){

        if(selectedAnswer === questions[index].correct){
            score++;
            console.log(score);
        }
        nextQuestion();
    });

    function nextQuestion(){
    $(".green-alert").hide();
    $(".red-alert").hide(); 

    index++;
        showQuestions();
    }
    // final scores
    function lastScore(){
        var finalScore = ((score / questions.length ) * 100);
        alert("Final Score: " + finalScore + "%");
    }
})