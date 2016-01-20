$( ".form__btn" ).click(function() {

  var intFrameWidth = window.innerWidth;
  var intViewportHeight = window.innerHeight;
  var windowDiagonal = diagonal(intFrameWidth, intViewportHeight);
  console.log(windowDiagonal);

});
