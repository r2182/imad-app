/* console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New value';

//Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
 img.style.marginLeft = '100px';  
 var interval = setInterval(moveRight, 50)
} */

//Counter code

var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    
    //make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    
    //capture response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    };
};