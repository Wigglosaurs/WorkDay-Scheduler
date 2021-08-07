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

