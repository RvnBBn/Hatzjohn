
  var originalText = "Click the button to change this text.";
var isTextChanged = false;

function changeText() {
  var element = document.getElementById("demo");

  var element1 =document.getElementById("boss");
  
  var ortext="HAIDIZ";
  if (isTextChanged) {
    element.innerHTML = originalText;
    isTextChanged = false;
    element1.innerHTML=ortext;

    
  } else {
    element1.innerHTML="HATz"
    element.innerHTML = "Text has been changed!";
    isTextChanged = true;
  }

}