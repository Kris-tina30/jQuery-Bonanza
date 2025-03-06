// .click
// .fadein
// .fadeOut
// .addClass
// .append
// .html
// .text
// .val
// .hide
// .show
// .slideDown

$("document").ready(() => {
  $("#fadeOut-btn").click(() => {
    $(".text-1, #fadeOut-btn").fadeOut(1000);
    $("#fadeIn-btn").fadeIn(500);
  });

  $("#fadeIn-btn").click(() => {
    $(".text-1, #fadeOut-btn").fadeIn(1000);
    $("#fadeIn-btn").fadeOut(500);
  });
  $("#append-btn").click(() => {
    $("#append-test").append("<p>Hallo!</p>");
  });
  $("#changeColor-btn").click(() => {
    $(".text-3").css("color", "red");
  });
});
