$(document).ready(function () {
  $("#degree-stage-options input[type='radio']").click(function (e) {
    let option = e.target;
    if (option.value == "nodegree") {
      $("#degree-subject-container").hide();
    } else {
      $("#degree-subject-container").show();
    }
  });
});
