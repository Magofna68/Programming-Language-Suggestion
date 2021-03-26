function add(q1, q2, q3, q4, q5) {
  return q1 + q2 + q3 + q4 + q5;
}

$(document).ready(function () {
  const result = $('.form-group').submit(function (event) {
    event.preventDefault()
    const q1 = parseInt($('#question1').val());
    const q2 = parseInt($('#question2').val());
    const q3 = parseInt($('#question3').val());
    const q4 = parseInt($('#question4').val());
    const q5 = parseInt($('#question5').val());
    const result = add(q1, q2, q3, q4, q5);
    $("#output-result").text(result);

    if (result === 0) {
      return $("#output-result").text("Looks like you should checkout Python")
    }
    else if (result > 0 && result <= 5) {
      return $("#output-result").text("Javascript seems to be the most fitting language for you to start with.")
    }
    else if (result > 5 && result <= 10) {
      return $("#output-result").text("Your path is bright; C++ is your way to illumination.")
    }
    else { return $("#output-result").text("You probably shouldn't learn how to code...") }
  })
})

// $(".form-control").click(function () {
//   $("select").toggle();
// }

// $(function () {
//   $('#hide-me').change(function () {
//     if (q1 === "NaN") {
//       $("#hide-me").show();
//     } else {
//       $("#hide-me").hide();
//     });
// });