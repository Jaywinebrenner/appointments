$(document).ready(function() {

  $("form#book").submit(function(event){

    event.preventDefault();
    var info = $("input");

  $("#output").text("Booking successful!");


});


});













// $(document).ready(function(){
//
//   $("form#add").submit(function(event){
//     event.preventDefault();
//     var number1 = parseInt($("#add1").val());
//     var number2 = parseInt($("#add2").val());
//     var result = add(number1, number2);
//     $("#add-output").text(result);
// });
