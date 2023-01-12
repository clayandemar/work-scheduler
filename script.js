//JQuery has fully loaded DOM elements
$(document).ready(function () {

  //referencing currentDay with var today and adding Moment.js into it
  var today = new moment().format("dddd, MMMM DD, YYYY");

  //putting the date from Moment.js into the HTML
  $("#currentDay").text(today).fadeIn();


  //styles the past, present, and future text boxes
  var exactTime = new moment().hour();
  for (var i = 0; i < 24; i++) {
    if (exactTime === i) {
      $("#hour-" + i).addClass("present")
    } else if (exactTime < i) {
      $("#hour-" + i).addClass("future")
    }
    else {
      $("#hour-" + i).addClass("past")
    }
  };


  // populate boxes from local storage
  for (var i = 0; i < 24; i++) {
    var hourTest = localStorage.getItem("hour-" + i);
    $("#hour-" + i).children().eq(1).val(hourTest);
  }



  //save button
  $(".btn").click(function buttonClick(e) {
    var descriptionData = $(this).prev();
    console.log(descriptionData.val());
    var hourForButton = $(this).parent();
    var storageKey = hourForButton.attr("id");
    localStorage.setItem(storageKey, descriptionData.val());
    console.log(hourForButton.attr("id"));

  });
});

