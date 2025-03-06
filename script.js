$(document).ready(() => {
  $("#fadeOut-btn").click(function () {
    $(".text-1, #fadeOut-btn").fadeOut(1000);
    $("#fadeIn-btn").fadeIn(500);
  });

  $("#fadeIn-btn").click(function () {
    $(".text-1, #fadeOut-btn").fadeIn(1000);
    $("#fadeIn-btn").fadeOut(500);
  });
  $("#append-btn").click(function () {
    $("#append-test").append("<p>Hallo!</p>");
  });
  $("#changeColor-btn").click(function () {
    $(".text-3").css("color", "red");
  });
});
