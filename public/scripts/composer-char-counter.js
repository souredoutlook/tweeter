//composer-char-counter.js
const updateCount = function() {

  $('#tweet-text').on('keyup', function() {
    const message = $(this).val();
    const output = $(this).parent().find('output');
    
    output.val(140 - message.length);

    if (output.val() <= 0) {
      output.addClass("red-num");
    } else if (output.hasClass("red-num") && output.val() > 0) {
      output.removeClass("red-num");
    }
  });

};

$(document).ready(function() {
  
  updateCount();

});