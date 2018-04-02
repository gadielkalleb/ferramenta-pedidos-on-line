$(document).ready(function () {
  $('.modal').modal();
  $('.collapsible').collapsible();
  $(".button-collapse").sideNav();
  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
  });
  $('.parallax').parallax();
  // $('.carousel.carousel-slider').carousel({
  //   fullWidth: true
  // }, autoPlay());
  $('.slider').slider();
});

// faz o carousel deslizar sozinho
function autoPlay() {
  $('.carousel').carousel('next');
  setTimeout(autoPlay, 4500);
}

