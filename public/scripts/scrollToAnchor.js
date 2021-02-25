//smoothly animate scroll to anchor on chevron click

const scrollToCompose = function() {

  $(chevrons).on("click", function(event){

    const $compose = $('.new-tweet')
    // get .new-tweet location at time of click
    const composeTop = $compose.offset().top;
  
      // scroll to that location with an offset of 120px for the navbar
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
  
};

const chevrons = '#chevron, #chevronUp'; //a comma seperated list of selectors that will trigger this event

$(document).ready(function() {
  
  scrollToCompose();

});