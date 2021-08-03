// Function to save scheduled events to local storage
var textArea = $('textarea');
var saveButton = $('.saveBtn');

var textAreObj = {
    text: textEl,
    time: timeEl
};

saveButton.click(function () {
    var textEl = $(this).siblings(textArea).val();
    // dynamically add class or in html to textEl variable
    var timeEl = $(this).siblings()
    // add an attritube to timeEl (id)

});

// var saveEvents = function() {localStorage.setItem("variable", JSON.stringify(variable))};

// Function to display the current date using Moment 
var today = moment().format('dddd, ' + 'MMMM Do YYYY');

var currentDay = $('#currentDay');
currentDay.text(today);