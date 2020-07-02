var answer = ["it will work", "Maybe maybe not", "Probably not", "Highly Likely", "I dont know"];
var message = document.querySelector(".message");
var question = document.querySelector("input");
var btn = document.querySelector("button");
btn.addEventListener("click", function(){
console.log(question.value);
var res = Math.floor(Math.random()*answer.length);
console.log(answer[res]);
message.innerText = question.value + " " + answer[res];
question.value="";
})