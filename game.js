gamepattern=[];
userClickedPattern=[];
buttonColours=["red", "blue", "green", "yellow"];
times=1;
level=0;

$(".btn").click(function (){
userChosencolour=this.id;
userClickedPattern.push(userChosencolour);
playSound(userChosencolour);
animatepress(userChosencolour);
checkAnswer(userClickedPattern.length-1);

});

$(document).on('keydown',function(e) {
    if(e.which == 65) {
        nextsequence();
        }
    
});
 


function nextsequence(){
    userClickedPattern=[];
    randomnumber=Math.floor(Math.random()*4);
    randomChosencolour=buttonColours[randomnumber];
    gamepattern.push(randomChosencolour);
   $("#"+randomChosencolour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosencolour);
   level=level+1;
    $("h1").text("Level " + level);
}


function playSound(name){
    soundAudio=new Audio("sounds/" + name + ".mp3");
   soundAudio.play();
}

function animatepress(currentcolour){
    $("#"+currentcolour).addClass("pressed");

    setTimeout(function(){
        $("#"+currentcolour).removeClass("pressed");


    }, 100);
    
  
    // $("#"+currentcolour).addClass('pressed').delay(1000).removeClass('pressed');
}

function checkAnswer(currentlevel){

    if(userClickedPattern[currentlevel]==gamepattern[currentlevel]){
        if(userClickedPattern.length==gamepattern.length){
        setTimeout(function(){
           nextsequence();
    
    
        }, 1000);
    }
}
    else{
        wrong=new Audio("sounds/wrong.mp3");
        wrong.play();

        $("body").addClass("game-over");

    setTimeout(function(){
        $("body").removeClass("game-over");


    }, 200);
    startover();
    }
}

function startover(){
    gamepattern=[];
userClickedPattern=[];
times=1;
level=0;
$("h1").text("Press A Key to Start");
}