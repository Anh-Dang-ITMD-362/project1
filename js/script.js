// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

var form = document.getElementById('form');

function complete() {
  if (form.checkValidity()) {
    alert("Thank you for signing up!\n\nOur product is currently under development and will be published soon. We will send you the link and instructions once our product is finished. Your time and feedback is highly appreciated.");
  }
}