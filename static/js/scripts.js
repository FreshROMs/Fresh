$(function () {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear() + 1;

    var nextyear = month + '/' + day + '/' + year + ' 07:07:07';

    $('#timer').countdown({
        date: "12/9/2022 15:00:00",
        offset: +8,
        day: 'Day',
        days: 'Days'
    }, function () {
    });
});