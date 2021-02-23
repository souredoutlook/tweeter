// fix the navbar when the yOffSet >= navbar.offset.top
$(document).ready(function() {
  const navBar = $('#navbar');
  const { top } = navBar.offset() //the offset.top value of #navbar on document ready

  $(window).on('scroll', function() {
    this.pageYOffset >= top ? navBar.addClass('sticky') : navBar.removeClass('sticky');
  })
  
});