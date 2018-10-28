// NBA TRIVIA GAME!!!

$("#stBut").on("click", function(){
    loadQuestions();

});


// create a countdown timer as the shot clock in nba
// var audio1 = new Audio("../images/gameBuzzer.mp3")
    // audio1.play()

var digital = "00:24";
var interval = setInterval(function() {
    $("#digital").html(digital);
    var timerArray = digital.split(":")
    // console.log('timeArray: ', timerArray)
    var changedNum = Number(timerArray[1]);
    // console.log(changedNum)
    changedNum--;
    timerArray[1] = changedNum
    digital = timerArray.join(':')
    // console.log(digital)

    if (changedNum === 0) {
        clearInterval(interval);
        $("#digital").html("00:00");
    }
}, 1000);


// Questions and answers in an object array

var questions = [
    {
        question: "Which NBA player scored the most points in a single game?",
        answerChoice: ["Michael Jordon", "Kobe Bryant", "Wilt Chamberlain", "Kareem Adbul-Jabbar"],
        rightAnswer: 2,
    },
    {
        question: "Which player holds the most NBA championship titles?",
        answerChoice: ["Gregg Popvich", "Bill Russel", "Michael Jordan", "Phil Jackson"],
        rightAnswer: 1,
    },
    {
        question: "Which NBA team currently holds the record for the most wins in a season?",
        answerChoice: ["Chicago Bulls", "Boston Celtics", "Golden State Warriors", "San Antonio Spurs"],
        rightAnswer: 2,
    },
    {
        question: "After which NBA player was the NBA logo created?",
        answerChoice: ["Karl Malone", "Jerry West", "Steve Kerr", "Michael Jordan"],
        rightAnswer: 1,
    },
    {
        question: "This player currently holds the record for most NBA points.",
        answerChoice: ["Lebron James", "Karl Malone", "Kevin Durant", "Kareem Adbul-Jabbar"],
        rightAnswer: 4,
    },

];


    function loadQuestions() {
        for (var i in questions) {
            var quest = questions[i].question + "<br>";
            $("#gameQuest").append(quest);
            var ans = questions[i].answerChoice + "<br>" + "<br>";            
            $("#gameAns").append(ans + '<input type="radio" name="radio_name" id="q00" />');
            // console.log(quest)
            
        }
    }
