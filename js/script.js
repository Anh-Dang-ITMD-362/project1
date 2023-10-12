// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

var form = document.getElementById('form');

function complete() {
  if (form.checkValidity()) {
    alert("You have successfully signed up\nCheck your email for more information");
  }
}