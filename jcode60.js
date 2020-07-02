var hd1 = document.querySelector("#one");
var hd2 = document.querySelector("#two");
var hd3 = document.querySelector("#three");

hd1.addEventListener('mouseover', Mouuseove);
function Mouuseove() {
    hd1.textContent="Mouse Currently Over";
    hd1.style.color = "red";
}

hd1.addEventListener('mouseout', function(){
    hd1.textContent = 'Mouse Not on Me';
    hd1.style.color = "blue";
});

hd2.addEventListener('click', function(){
    hd2.textContent = 'Clicked on';
    hd2.style.color = "blue";
});
hd3.addEventListener('dblclick', function(){
    hd3.textContent = 'Double Clicked ';
    hd3.style.color = "red";
});

