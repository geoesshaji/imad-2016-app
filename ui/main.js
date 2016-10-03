console.log('Loaded!');

//change text
var element = document.getElementById("maintext");
element.innerHTML = "New value";

var image = document.getElementById("madi");
image.onclick = function(){
    image.style.marginLeft = "100px";
};