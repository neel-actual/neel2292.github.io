
$(".fabs").hover(function() {
  $(".prime").toggleClass("zmdi-plus");
  $(".prime").toggleClass("rotateInUpLeft");
  $(".prime").toggleClass("zmdi-account");
  $(".sec").toggleClass("fadeInUp");
});

$(".fab").hover(function() {
  $(this).children(".sec").toggleClass("wobble");
  $(this).children(".sec").toggleClass("fadeInUp");
});

$(".mat-react").hover(function() {
	$(this).children(".mat").toggleClass("wobble");
});
