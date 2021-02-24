// fix the navbar when the yOffSet >= navbar.offset.top
$(document).ready(function() {
  const navBar = $('#navbar');
  const navBarTop = navBar.offset().top; //the offset.top value of #navbar on document ready

  const hero = $('#heroBird');
  const dummyDiv = $('<div>');
  dummyDiv.addClass('content') 

  
  $(window).on('scroll', function() {
    if(this.pageYOffset >= navBarTop && navBar.hasClass('sticky') === false) {
      navBar.addClass('sticky');
      dummyDiv.insertAfter(hero); //add a spacer after hero so that the fixed header does not hide the user profile
    } else if (this.pageYOffset < navBarTop) {
      navBar.removeClass('sticky');
      $('.content').remove(); // remove the dummyDiv spacer if the user scrolls all the back back to the hero
    }
  })
  
});