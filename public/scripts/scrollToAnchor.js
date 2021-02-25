//smoothly animate scroll to anchor on chevron click
$(document).ready(function() {
// get .new-tweet location
  const $compose = $('.new-tweet')
  const composeTop = $compose.offset().top;
// on chevron click
  $('#chevron').on("click", function(event){
    event.preventDefault();

    // scroll to that location with an offset of 120 for the navbar
    $("html, body").animate( 
      { scrollTop: composeTop - 120 }, 500)
      .promise()
      .done(function(){
        const $form = $compose.find('form');
        if ($form.css('display') === 'none'){
          $form.slideDown();
          $compose.find('textarea').focus();  
        } else {
          $form.slideUp();
        }
        
      }) 
  })

  $('#chevronUp').on("click", function(){

    // scroll to that location with an offset of 120 for the navbar
    $("html, body").animate( 
      { scrollTop: composeTop - 120 }, 500)
  })

});