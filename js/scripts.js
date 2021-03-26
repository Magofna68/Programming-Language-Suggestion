function add(q1, q2, q3, q4, q5) {
  return q1 + q2 + q3 + q4 + q5;
}

$(document).ready(function () {
  const result = $('.form-group').submit(function (event) {
    event.preventDefault()
    const q1 = parseInt($('#question1').val());
    const q2 = parseInt($('#question2').val());
    const q3 = parseInt($('#question3').val());
  }
})