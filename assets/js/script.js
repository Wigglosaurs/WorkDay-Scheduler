$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        var textEL = $(this)
            .siblings('.textarea')
            .val();
        var timeEl = $(this)
            .parent()
            .attr('id');

        // save in localStorage
        localStorage.setItem(timeEl, textEL);
    });

    // Save's data to localStorage
    $('#hour-10 .textarea').val(localStorage.getItem('hour-10'));

    // Displays current day using moment 
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
});

// Function to change color of event times
// var auditTask = function () {
//     // get date from moment 
//     var time = $(timeEl).find("div")
//         .text()
//         .trim();

//     // convert to moment object at 5:00pm
// var endDay = moment(time, "L").set("hour", 17);

//     // apply new class if event is near/over due date
// if (moment().isAfter(endDay)) {
//     $(timeEl).addClass(".past");
// }
// else if (Math.abs(moment().diff(endDay, "hours")) <= 2) {
//     $(timeEl).addClass(".present");
// }
// };

var auditTask = function (element) {
    console.log(element.text());


};

$(".time").each(function () {
    auditTask($(this));
});

