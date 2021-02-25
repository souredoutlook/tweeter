// fix the $navbar when the yOffSet >= $navbar.offset.top
$(document).ready(function() {
  const $navBar = $('#navbar');
  const navBarTop = $navBar.offset().top;

  const hero = $('#heroBird');
  const $spacerDiv = $('<div>');
  $spacerDiv.addClass('content') 

  // const $tweets = $('#tweets');
  const $chevronUp = $('#chevronUp');
  const $compose = $('.new-tweet')
  
  $(window).on('scroll', function() {

    if (this.pageYOffset >= navBarTop && $navBar.hasClass('sticky') === false) {
      $navBar.addClass('sticky');
      $spacerDiv.insertAfter(hero); //add a spacer after hero so that the fixed header does not hide the user profile
    } else if (this.pageYOffset < navBarTop) {
      $navBar.removeClass('sticky');
      $('.content').remove(); // remove the $spacerDiv spacer if the user scrolls all the back back to the hero
      $compose.find('form').slideUp('fast'); //hide the compose drawer when user navigates away
    }

    if(this.pageYOffset + 120 > $compose.offset().top && $chevronUp.css('display') === 'none') {
      $chevronUp.show();
      $navBar.find('#chevron').hide()
      $compose.find('form').slideUp('fast'); //hide the compose drawer when user navigates away
    } else if (this.pageYOffset + 120 <= $compose.offset().top) {
      $chevronUp.hide();
      $navBar.find('#chevron').show()
    }

  })
  
});