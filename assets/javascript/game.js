// declare som evariables to govern total score, wins, losses, winning score and crystal values
//create a random number that gets written into my scorebox
//create function which adds a certain value to my total score when cyrstal is clicked
//create functions which check to see if my score equals my random number
//
$(document).ready(function() {

var wins = 0;
var losses = 0
var powerLevel=0;
var transformation= Math.floor((Math.random()*1000 +1))*5;

console.log (transformation);
console.log(powerLevel);
var powerup1= Math.floor((Math.random()*20+1))*5;//random number from 1-100 that ends in 5 or 0
console.log(powerup1);
var powerup2 = Math.floor((Math.random()*10+1))*5;//random number from 1-50 that ends in 5 or 0
console.log(powerup2)
var powerup3= Math.floor((Math.random()*100+1))*5;//random number from 1-500 that ends in 5 or 0
console.log(powerup3);
var powerup4= 5;
console.log(powerup4);


function loss(){
    losses++;
    $("#losses").text(losses);
    console.log(losses);
    // $(".mr-3").attr("src", "assets/images/exhausted.gif");
    // $(".mr-3").css()
    // setTimeout(function(){ 
    //     $(".mr-3").attr("src", "assets/images/charging.gif");;
    // }, 2000);
    // $(".media-body").append("<h5>Great... you killed him. click to continue or refresh the page to start over </h5>");
    // $(".dragonBall").hide();
    alert("loser")
    
    nextround();
}
function win(){
    wins++;
    $("#wins").text(wins);
    // $(".mr-3").attr("src", "assets/images/transform.gif");
    // $(".mr-3").animate({height: "300px"});
    alert("victory");
    nextround();
}

function nextround(){

powerLevel=0;
transformation= Math.floor((Math.random()*1000 +1))*5;
powerup1= Math.floor((Math.random()*20+1))*5;//random number from 1-100 that ends in 5 or 0
console.log(powerup1);
powerup2 = Math.floor((Math.random()*10+1))*5;//random number from 1-50 that ends in 5 or 0
console.log(powerup2)
powerup3= Math.floor((Math.random()*100+1))*5;//random number from 1-500 that ends in 5 or 0
console.log(powerup3);
powerup4= 5;
$("#powerLevel").text(powerLevel);
$(".badge").text(transformation)
}

$(".reset").on("click", function(event){
 nextround();
 wins= 0;
 $("#wins").text(wins);
 losses=0;
 $("#losses").text(losses);
})
$(".badge").text(transformation);
$(".dragonBall").hover(function(){
        $(this).animate({ opacity: ".5" }); 
    }, function(){
        $(this).animate({opacity:"1"})
        ;
    });

$("#oneStar").on("click", function(){
    
    $("#powerLevel").text(powerLevel+powerup1);
    powerLevel= powerLevel+powerup1;
    console.log(powerup1)
    if( powerLevel=== transformation){
       win();
    }else if (powerLevel > transformation){        
        loss();
    }

})

$("#twoStar").on("click", function(){    
    $("#powerLevel").text(powerLevel+powerup2);
    powerLevel= powerLevel+powerup2;
    console.log(powerup2);
    if( powerLevel=== transformation){
       win();
    }else if (powerLevel > transformation){
        loss();
    }

})

$("#threeStar").on("click", function(){
    
    $("#powerLevel").text(powerLevel+powerup3);
    powerLevel= powerLevel+powerup3;
    console.log(powerup3)
    if( powerLevel=== transformation){
       win();

    }
    else if (powerLevel > transformation){
        loss();
    }

    
});

$("#fourStar").on("click", function(){
    
    $("#powerLevel").text(powerLevel+powerup4);
    powerLevel= powerLevel+powerup4;
    console.log(powerup4)
    if( powerLevel=== transformation){
        win();
    }else if (powerLevel > transformation){
        loss();
    }

});
});