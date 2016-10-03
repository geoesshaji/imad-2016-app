console.log('Loaded!');

//change text
var element = document.getElementById("maintext");
element.innerHTML = "New value";

var image = document.getElementById("madi");
var marginLeft = 0;
function setInterval(){
    marginLeft = marginLeft + 10;
    image.style.marginLeft = marginLeft + "px";
}
image.onclick = function(){
    var interval = setInterval(moveRight, 100);
};