x=0;
y=0;
draw_circle="";
draw_rect="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="system is listening please speak the words circle or rectangle";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="the speech has been recognized as-"+content;
    if(content=="Circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        draw_circle="set";
    }
    if(content=="Rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        draw_rect="set";
    }
}
function setup(){
    canvas=createCanvas(900,600);
}
function draw(){
    if(draw_circle=="set"){
        circle(x,y,70);
        document.getElementById("status").innerHTML="circle is drawn";
        draw_circle="";
    }
    if(draw_rect=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="rectangle is drawn";
        draw_rect="";
    }
}