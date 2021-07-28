
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
