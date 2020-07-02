var myblock;
var myFunction;
var fun = [];
document.addEventListener("DOMContentLoaded", function(){
  console.log("ready");
  myblock = document.createElement("div");
  myblock.textContent="Hello World";
  myblock.style.height="100px";
  myblock.style.width="100px";
  myblock.style.backgroundColor="red";
  myblock.style.color="white";
  myblock.style.lineHeight="100px";
  myblock.style.textAlign="center";
  myblock.style.position="absolute";
  myblock.style.top="100px";
  myblock.style.left="150px";
  document.body.appendChild(myblock);
  myFunction= document.createElement("div");
  document.body.appendChild(myFunction); 
})

function addFun(el)
{
  
  var span = document.createElement("span");
  span.textContent="+" + el;
  span.style.padding="10px";
  span.style.border="1px solid #ddd";
  myFunction.appendChild(span);
  fun.push(span);
  span.addEventListener("mouseover", function(){
    this.style.backgroundColor="red";
    this.style.color="white";
  })
  span.addEventListener("mouseout", function(){
    this.style.backgroundColor="white";
    this.style.color="black";
  })
  console.log(fun);
}

document.addEventListener("keydown", function(e){
  e.preventDefault();
  var keyC = e.keyCode;
  if(keyC===37)addFun("left");
  else  if(keyC===39)addFun("right");
  else  if(keyC===38)addFun("up");
  else  if(keyC===40)addFun("down");
  else if (keyC ===13) myblock.style.backgroundColor=randomColor();
  else if(keyC ===13 || keyC === 32)
  mover();
  console.log(e.keyCode);
})

function randomColor(){
  return "#" + Math.random().toString(16).substr(-6);
}

function mover(){
  if(fun.length>0)
  {
    var cur = myblock.getBoundingClientRect();
    console.log(cur);
    var el = fun.shift();
    var item = el.textContent.replace("+", "");
    myFunction.removeChild(el);
    myblock.innerHTML="move: "+ item;
    console.log(item);
  }
}

function goLeft(){
  var temp=myblock.offsetLeft;
  temp = temp -50;
  myblock.style.left=temp + "px";
}

function goRight(){
  var temp = myblock.offsetLeft;
  temp=temp+50;
  myblock.style.left=temp+"px"; 
}
function goTop(){
  var temp = myblock.offsetTop;
  temp = temp -50;
  myblock.style.top=temp + "px";
}

function goDown(){
  var temp = myblock.offsetTop;
  temp = temp + 50;
  myblock.style.top=temp + "px";
}

