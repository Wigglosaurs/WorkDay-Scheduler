$(document).ready(function () {


    // Function to save scheduled events to local storage
    // var textArea = $('.textarea');
    // var saveButton = $('.saveBtn');

    // saveButton.click(function () {
    //     var textEl = $(this).siblings(textArea).val();
    //     // dynamically add class or in html to textEl variable
    //     var timeEl = $(this).siblings('#time').val();
    //     // add an attritube to timeEl (id)

    //     localStorage.setItem(textEl, timeEl);


    // });

    $('.saveBtn').on('click', function () {
        // get nearby values
        var textEL = $(this)
            .siblings('.textarea')
            .val();

        // var timeEl = $(this).siblings('.time').val();
        var timeEl = $(this)
            .parent()
            .attr('.id');

        // save in localStorage
        localStorage.setItem(timeEl, textEL);
    });

    $('#hour-10 .textarea').val(localStorage.getItem('hour-10'));

    // var textAreObj = {
    //     text: textEl,
    //     time: timeEl
    // };


    // var saveEvents = function() {localStorage.setItem("variable", JSON.stringify(variable))};

    // Function to display the current date using Moment 
    // var today = moment().format('dddd, ' + 'MMMM Do YYYY');

    // var currentDay = $('#currentDay');
    // currentDay.text(today);

    $('#currentDay').text(moment().format('dddd, MMMM Do'));

});