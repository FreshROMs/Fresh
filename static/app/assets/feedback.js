
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

$('#form').submit(function (event) {
    event.preventDefault()

    var button = document.getElementById("submit-button");
    var status = document.getElementById("main_form");

    button.disabled = true;
    var extraData = {}
    $('#form').ajaxSubmit({
        data: extraData,
        dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
        error: function () {
          status.setAttribute("disabled", "disabled");
          button.textContent = 'Submitted successfully';
          button.disabled = true;
        }
    })
})
