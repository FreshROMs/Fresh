
disabled = document.getElementById("submitarea-disabled");
disabled.style.display = "none";

function checkSelect(select) {
    infoReq = document.getElementById("textarea-more");
    disabled = document.getElementById("submitarea-disabled");
    uploadLog = document.getElementById("log-upload");
    uploadScreenshot = document.getElementById("cap-upload");
    var button = document.getElementById("submit-button");
    if (select.value == "bug") {
        disabled.style.display = "inherit";
        infoReq.style.display = "none";
        button.disabled = true;
        button.style.display = "none";
    } else {
        disabled.style.display = "none";
        infoReq.style.display = "inherit";
        button.disabled = false;
        button.style.display = "inherit";
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