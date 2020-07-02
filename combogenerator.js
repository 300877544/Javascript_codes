var gameArea = document.querySelector(".game");
var btn = document.querySelector("button");
var gamePlay=false;
var message = document.querySelector(".message");
var score=0;
btn.addEventListener("click", function(){
    if(!gamePlay)
    {
        gamePlay=true;
        score=0;
        maker();
        btn.innerHTML="Check Combo";
    }
    else{
        console.log("checker");
        score++;
        message.innerHTML="Guesses" + score;
        var numbers = document.querySelectorAll(".numb");
        console.log(numbers);
        var winCondition=0;
        for (let index = 0; index < numbers.length; index++) {
      
            console.log(numbers[index].value);
            console.log(numbers[index].correct);
            if(numbers[index].value == numbers[index].correct)
            {
                numbers[index].style.backgroundColor="green";
                numbers[index].style.color="white";
                console.log("Match");
                winCondition++;
            }
else{
    var color = (numbers[index].value < numbers[index].correct)? "blue" : "red";
    numbers[index].style.backgroundColor=color;
    numbers[index].style.color="black";
    console.log("No match");
}
    

        }
        if(winCondition == numbers.length){
            console.log("game over");
        }
    }
})
function maker()
{
    for (let index = 0; index < 4; index++) {
        var el =document.createElement("input");
        el.setAttribute("type", "number");
        el.max=9;
        el.min=0;
        el.size=1;
        el.classList.add("numb");
        el.order=index;
        el.correct = Math.floor(Math.random()*10);
        el.value=el.correct;
        
        el.style.width="50px";

        console.log(el);
        gameArea.appendChild(el);
        
    }
    
}