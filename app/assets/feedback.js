
disabled = document.getElementById("submitarea-disabled");
disabled.style.display = "none";

let url = "https://docs.google.com/forms/d/e/1FAIpQLSe03Sl9Z6uFBWWQKPj22G43l3153C4FJBPh9Ow_AHYYf-d24Q/formResponse"; //action url
let form = document.querySelector("#form"); //form element

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
        button.style.display = "block";
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
      var data = new FormData();
      data.append("entry.1811482587", document.querySelector("#frsh_reporter").value);
      data.append("entry.1172745133", document.querySelector("#frsh_device").value);
      data.append("entry.698861321", document.querySelector("#feedback_selection").value);
      data.append("entry.1702090977", document.querySelector("#information").value);
      ajax(form.method, data, success, error);
    });
  }
});

// helper function for sending an AJAX request
function ajax(method, data, success, error) {
    $('#form').ajaxSubmit({
        data: extraData,
        dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
        error: function () {
            success();
        }
    })
}

function getInputData(){
    let dataToPost = new FormData(); //formdata API

    //fill name attributes to corresponding values
    dataToPost.append("entry.294341084", document.querySelector("#inp1").value);

    return dataToPost;
}