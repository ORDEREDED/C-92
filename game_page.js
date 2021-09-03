var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1name").innerHTML=player1_name+":";
document.getElementById("player2name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn"+player1_name;
document.getElementById("player_answer").innerHTML="answer turn"+player2_name;
function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    c1=word.charAt(1);
    console.log(c1);
    halflength=Math.floor(word.length/2);
    c2=word.charAt(halflength);
    console.log(c2);
    last=word.length-1;
    c3=word.charAt(last);
    console.log(c3);
    removec1=word.replace(c1,"_");
    removec2=removec1.replace(c2,"_");
    removec3=removec2.replace(c3,"_");
    question_word='<h4 id="word_display">Q.'+removec3+'</h4>';
    answer='<br>answer:<input id="input_check_box" type="text">';
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    var row=question_word+answer+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
var question_turn="player1";
var answer_turn="player2";
function check(){
    var getanswer=document.getElementById("input_check_box").value;
    var answer=getanswer.toLowerCase();
    if(answer==word){
    if(answer_turn=="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="question turn-"+player2_name;
    }
else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="question turn-"+player1_name;
}
if(answer_turn=="player1"){
    answer_turn='player2';
    document.getElementById('player_answer').innerHTML='answer turn-'+player2_name;
}
else{
    answer_turn='player1';
    document.getElementById('player_answer').innerHTML='answer turn-'+player1_name;
}
document.getElementById('output').innerHTML='';
}