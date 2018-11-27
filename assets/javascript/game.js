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

$("#diamond").on("click", function(){
    var diamondClicked = 0;
    diamondClicked = diamondClicked + 1;
    totalScore= totalScore + (diamondPoints * diamondClicked);
    $("#totalScore").text(totalScore);
    if(totalScore === randomNumber){
        wins = wins + 1;
        $("#results").text("You win!!"); 
        $("#winCount").text("wins = " + wins);
    }
    else if (totalScore > randomNumber){
        losses = losses + 1;
        $("#results").text("You lose:(");
        $("#lossCount").text("losses = " + losses);
      
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
    }
    else if (totalScore > randomNumber){
        losses = losses + 1;
        $("#results").text("You lose:(");
        $("#lossCount").text("losses = " + losses);
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
    }
    else if (totalScore > randomNumber){
        losses = losses + 1;
        $("#results").text("You lose:(");
        $("#lossCount").text("losses = " + losses);
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
    }
    else if (totalScore > randomNumber){
        losses = losses + 1;
        $("#results").text("You lose:(");
        $("#lossCount").text("losses = " + losses);
    }
   });

console.log(totalScore);


//random number shows up at the start of the game
$("#target").text(randomNumber);

$("#totalScore").text(totalScore);


//};

//add on click event to each crystle button to add a specific amount of points to the total score

//Player wins comment show up if their total score matches the random score from the beginning

//player loses comment shows up if their score goes above the random number.

//game restarts once the player wins or loses




});