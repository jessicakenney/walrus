$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").slideToggle();
    $("#initially-hiding").slideToggle();
    });
  $(".fwclickable").click(function() {
    $("#first").toggle();
    $("#first1").toggle();
    $("#second").toggle();
    $("#second1").toggle();
    });
});
