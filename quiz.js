let questions=["What is the capital of France?","who is the president of india?","What is the capital of USA?","What is the capital of UK?","what is the difference between javascript and java?"];
let options=[["Paris","London","Berlin","Madrid"],["Ram Nath Kovind","Narendra Modi","Pranab Mukherjee","Amit Shah"],["Washington D.C.","New York","Los Angeles","Chicago"],["London","Manchester","Birmingham","Liverpool"],["Java is a programming language, while JavaScript is a scripting language used for web development.","Java is used for building desktop applications, while JavaScript is primarily used for web development.","Java is statically typed, while JavaScript is dynamically typed.","All of the above."]];
let ans = [1,2,1,1,4];
let currentqno=1;
let answered=false;

let response=0;
let result;
let score = 0;


function displayQuestion() {
    document.getElementById("question").innerHTML = `Q.${currentqno}/5: ${questions[currentqno-1]}`;
}

function displayOptions() {
    document.getElementById("optionbutton1").innerHTML = options[currentqno-1][0];
    document.getElementById("optionbutton2").innerHTML = options[currentqno-1][1];
    document.getElementById("optionbutton3").innerHTML = options[currentqno-1][2];
    document.getElementById("optionbutton4").innerHTML = options[currentqno-1][3];




    document.getElementById("optionbutton1").style.backgroundColor = " #1E293B";
    document.getElementById("optionbutton2").style.backgroundColor = " #1E293B";
    document.getElementById("optionbutton3").style.backgroundColor = " #1E293B";
    document.getElementById("optionbutton4").style.backgroundColor = " #1E293B";


}

function checkAnswer() {


    if (response == ans[currentqno-1]) {

        document.getElementById(`optionbutton${response}`).style.backgroundColor = "lightgreen";

        result = "Correct Answer";
        score++;
        console.log(score);

    } else  {
        document.getElementById(`optionbutton${ans[currentqno-1]}`).style.backgroundColor = "lightgreen";

        document.getElementById(`optionbutton${response}`).style.backgroundColor =  "rgb(253, 73, 73)";
        result = "Wrong Answer";
        console.log(score);

    }


}

function displayscore() {
    let scoreElement = document.getElementById("score");
    scoreElement.innerHTML = `Score: ${score}`;
}
function finalresult(){

    let incorrect = 5 - score;
    let percentage = (score / 5) * 100;

    document.body.innerHTML = `
        <div class="heading">Quiz Completed!</div>

        <div class="scorecontainer">
            Your final score is: ${score}/5
        </div>

        <div class="extra">
            Correct Answers: ${score}<br>
            Incorrect Answers: ${incorrect}<br>
            Percentage: ${percentage}%
        </div>
    `;

    if(score == 5){
        document.body.innerHTML += `
            <div class="extra">
                Excellent! You got all the answers correct!
            </div>`;
    }
    else if(score >= 3){
        document.body.innerHTML += `
            <div class="extra">
                Good job! You got ${score} out of 5 correct.
            </div>`;
    }
    else if(score >= 1){
        document.body.innerHTML += `
            <div class="extra">
                Keep trying! You got ${score} out of 5 correct.
            </div>`;
    }
    else{
        document.body.innerHTML += `
            <div class="extra">
                Keep practicing! You'll do better next time.
            </div>`;
    }

    document.body.innerHTML += `
        <div class="extra">
            Click the button below to take the quiz again!
        </div>

        <button id="takeagainbtn" onclick="window.location.href='quiz.html'">
            Take Again
        </button>
    `;
}
function selectoption(option) {
    response=option;
    if(answered==true){
        alert("NO you can only give your once !Dont try to cheat");
        return;
    }else{
        response=option;
        checkAnswer();
        answered=true;
         
    }
        
    

}
function restartQuiz() {

}
function progressbar(){
    document.getElementById("progressbar").style.width=(currentqno/5)*100 +"%";
}

displayQuestion();
displayOptions();
progressbar();