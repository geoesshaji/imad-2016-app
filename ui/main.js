//Counter code
var button = document.getElementById('counter');

button.onclick = function(){
    
    //Make request object
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //Take some action
          if(request.status === 200){
              var counter = request.responseText;
              var span = document.getElementById("count");
              span.innerHTML = counter.toString();
          }
      }
        
    };
    //Make the request
    request.open('GET', 'http://geoesshaji.imad.hasura-app.io/counter', true);
    request.send(null);
   
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Make a request to server and send name
     var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //Take some action
          if(request.status === 200){
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i = 0; i<names.length ; i++){
                    list += '<li>' + names[i] + '</li>';
                }
                var ul =document.getElementById('namelist');
                ul.innerHTML = list;
          }
      }
        
    };
    //Make the request
    var nameInput = document.getElementById('name');
     var name = nameInput.value;
    request.open('GET', 'http://geoesshaji.imad.hasura-app.io/submit-name?name='+ name, true);
    request.send(null);
    
    
    //Capture the name and render it as list
   
    };