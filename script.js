document.getElementById("sendQuestion").addEventListener("click",function(){
var question = document.getElementById("QuestionInput").value;
var question = document.getElementById("QuestionInput").value;
var type = document.getElementById("typeSelect").value;


var answer = "Antwort auf Ihre Frage"+question+"´Type´"+ type *"`";
document.getElementById("answer").innerText = answer;

}
)