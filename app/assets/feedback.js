
$('#log-upload').change(function() {
    var file = $('#log-upload')[0].files[0].name;
    $('#log-upload-text').text(file);
});
$('#cap-upload').change(function() {
    var file = $('#cap-upload')[0].files[0].name;
    $('#cap-upload-text').text(file);
});

uploadLog = document.getElementById("log-upload");
uploadScreenshot = document.getElementById("cap-upload");
uploadLog.required = true;
uploadScreenshot.required = false;

function checkSelect(select) {
    infoReq = document.getElementById("information-required");
    uploadLog = document.getElementById("log-upload");
    uploadScreenshot = document.getElementById("cap-upload");
    if (select.value == "bug") {
        infoReq.style.display = "inherit";
        uploadLog.required = true;
        uploadScreenshot.required = false;
    } else {
        infoReq.style.display = "none";
        uploadLog.required = false;
        uploadScreenshot.required = false;
    }
}

window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("frsh_feedback_form");
  var myForm = document.getElementById("frsh_feedback_form");
  var button = document.getElementById("submit-button");
  var status = document.getElementById("main_form");

  function success() {
    status.setAttribute("disabled", "disabled");
    button.textContent = 'Submitted successfully';
    button.disabled = true;
  }

  function error() {
    button.textContent = 'Oops! There was a problem.';
  }

  // handle the form submission event
  if (form != null) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, data, success, error);
    });
  }
});

// helper function for sending an AJAX request
function ajax(method, data, success, error) {
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "multipart/form-data" },
    body: new URLSearchParams(data).toString()
  }).then(() => success()).catch((error) => {
    console.log(error); error()})
}