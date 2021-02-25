//composer-char-counter.js

$(document).ready(function() {
  
  $('#tweet-text').on('keyup', function() {
    const message = $(this).val();
    const output = $(this).parent().find('output');
    output.val(140 - message.length);
    if (output.val() <= 0) {
      output.addClass("redNum"); 
    } else if (output.hasClass("redNum" ) && output.val() > 0) {
      output.removeClass("redNum");
    }
  })
});