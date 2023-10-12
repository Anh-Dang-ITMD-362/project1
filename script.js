
var form = document.getElementById('form');

function Complete(){
  if(form.checkValidity()){
    alert('Thank you for submitting the form!');
  }
}