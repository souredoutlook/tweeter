// fix the navbar when the yOffSet >= navbar.offset.top
$(document).ready(function() {
  const navBar = $('#navbar');
  const navBarTop = navBar.offset().top; //the offset.top value of #navbar on document ready

  const hero = $('#heroBird');
  const dummyDiv = $('<div>');
  dummyDiv.addClass('content')

  $(window).on('scroll', function() {
    if(this.pageYOffset >= navBarTop) {
      navBar.addClass('sticky');
     dummyDiv.insertAfter(hero);
    } else {
      navBar.removeClass('sticky');
      $('.content').remove();
    }
  })
  
});