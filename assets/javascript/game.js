$(document).ready(function(){

//four crystle buttons

var diamondPoints = Math.floor(Math.random() * 12) + 1;
var rubyPoints = Math.floor(Math.random() * 12) + 1;
var emeraldPoints = Math.floor(Math.random() * 12) + 1;
var amethystPoints= Math.floor(Math.random() * 12) + 1;
var randomNumber = Math.floor(Math.random() * 120) + 19;
//var currentScore= totalScore;
var totalScore = 0;
//var result= ;
var wins= 0
var losses= 0

$("#target").text(randomNumber);

$("#totalScore").text(totalScore);

function newGame() {
    totalScore = 0;
    diamondClicked = 0;
    rubyClicked = 0;
    emeraldClicked = 0;
    amethystClicked = 0;
    diamondPoints = Math.floor(Math.random() * 12) + 1;
    rubyPoints = Math.floor(Math.random() * 12) + 1;
    emeraldPoints = Math.floor(Math.random() * 12) + 1;
    amethystPoints= Math.floor(Math.random() * 12) + 1;
    randomNumber = Math.floor(Math.random() * 120) + 19;
    $("#target").text(randomNumber);
    $("#totalScore").text(totalScore);
};

$("#diamond").on("click", function(){
    var diamondClicked = 0;
    diamondClicked = diamondClicked + 1;
    totalScore= totalScore + (diamondPoints * diamondClicked);
    $("#totalScore").text(totalScore);
    if(totalScore === randomNumber){
        wins = wins + 1;
        $("#results").text("You win!!"); 
        $("#winCount").text("wins = " + wins);
        newGame();
    }
    else if (totalScore > randomNumber){
        losses = losses + 1;
        $("#results").text("You lose (>_<)");
        $("#lossCount").text("losses = " + losses);
        newGame();
    }
});

$("#ruby").on("click", function(){
    var rubyClicked = 0;
    rubyClicked = rubyClicked + 1;
    totalScore= totalScore + (rubyPoints * rubyClicked);
    $("#totalScore").text(totalScore);
    if(totalScore === randomNumber){
        wins = wins + 1;
        $("#results").text("You win!!"); 
        $("#winCount").text("wins = " + wins);
        newGame();
    }
    else if (totalScore > randomNumber){
        losses = losses + 1;
        $("#results").text("You lose:(");
        $("#lossCount").text("losses = " + losses);
        newGame();
    }
   });

$("#emerald").on("click", function(){
    var emeraldClicked = 0;
    emeraldClicked = emeraldClicked + 1;
    totalScore= totalScore + (emeraldPoints * emeraldClicked);
    $("#totalScore").text(totalScore);
    if(totalScore === randomNumber){
        wins = wins + 1;
        $("#results").text("You win!!"); 
        $("#winCount").text("wins = " + wins);
        newGame();
    }
    else if (totalScore > randomNumber){
        losses = losses + 1;
        $("#results").text("You lose:(");
        $("#lossCount").text("losses = " + losses);
        newGame();
    }
    
   });

$("#amethyst").on("click", function(){
    var amethystClicked = 0;
    amethystClicked = amethystClicked + 1;
    totalScore= totalScore + (amethystPoints * amethystClicked) ;
    $("#totalScore").text(totalScore);
    if(totalScore === randomNumber){
        wins = wins + 1;
        $("#results").text("You win!!"); 
        $("#winCount").text("wins = " + wins);
        newGame();
    }
    else if (totalScore > randomNumber){
        losses = losses + 1;
        $("#results").text("You lose:(");
        $("#lossCount").text("losses = " + losses);
        newGame();
    }
   });

//random number shows up at the start of the game

//};

//add on click event to each crystle button to add a specific amount of points to the total score

//Player wins comment show up if their total score matches the random score from the beginning

//player loses comment shows up if their score goes above the random number.

//game restarts once the player wins or loses

});