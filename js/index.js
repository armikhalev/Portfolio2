
$(document).ready(function() {
  // cache the window object
  $window = $(window);

  // smooth floating up welcome message
  // $("#wlcm").addClass("up");
  // hide arrow up on load
  $('#arrow-up').fadeOut();

  // Parallax effect
  $('section[data-type="background"]').each(function() {
    // declare the variable to affect the defined data-type
    var $scroll = $(this);

    $(window).scroll(function() {
      // HTML5 proves useful for helping with creating JS functions!
      // also, negative value because we're scrolling upwards
      var yPos = -($window.scrollTop() / $scroll.data('speed'));

      // background position
      var coords = '50% ' + yPos + 'px';
      // move the background
      $scroll.css({
        backgroundPosition: coords
      });
    }); // end window scroll
  }); // end section function

  // shrinks navbar
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
      $('#arrow-up').fadeIn();
    } else {
      $('nav').removeClass('shrink');
      $('#arrow-up').fadeOut();
    }
  });

      // arrow-up changing color
      $(window).scroll(function(){

          if($(this).scrollTop() >= $('.footer').position().top - 650) {
              $("#arrow-up").css("background","#fff");
          } else if($(this).scrollTop() >= $('.grey-blue-line').position().top + 250){
              $("#arrow-up").css("background","none");
          } else if($(this).scrollTop() >= $('.grey-blue-line').position().top - 650){
              $("#arrow-up").css("background","#fff");

          // change arrow up on .grey-line
          }else if($(this).scrollTop() >= $('.grey-line').position().top - 450){
              $("#arrow-up").css("background","none");
          } else if($(this).scrollTop() >= $('.grey-line').position().top - 640){
              $("#arrow-up").css("background","#fff");

          }else{
            $("#arrow-up").css("background","none");
          }
      });

// smooth navigation effect
$(function() {

  $('a[href^="#"]').click(function(e) {
    // prevents flickering
    e.preventDefault();

    var target = $(this.hash);
    var slice = target.slice(1);
    var anchor = $("a[name='" + slice + "']");

    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);

  }); // 'a[href^="#"]'.click( function(e))

}); // $function()

}); // close out script
