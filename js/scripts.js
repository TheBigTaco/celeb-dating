$(document).ready(function(){
  $("form#submit").submit(function(event){
    var celebrity = parseInt($("#color").val());
    if (celebrity === 1) {
      var output = "Tom Arnold"
      $("#tom").show();
    } else if (celebrity === 2) {
      var output = "The Devil"
      $("#devil").show();
    } else if (celebrity === 3) {
      var output = "Prince"
      $("#prince").show();
    } else if (celebrity === 4) {
      var output = "Trent Reznor"
      $("#trent").show();
    } else if (celebrity === 5) {
      var output = "Tom Green"
      $("#green").show();
    } else if (celebrity === 6) {
      var output = "Midas"
      $("#midas").show();
    } else {
      var output = "Big Bird"
      $("#bird").show();
    }
    $("#output").text(output);
    $("form#submit").hide();
    $("#dater").show();
    event.preventDefault(output);
  });
});
