$(function () {

    // Add a listener for click events on the save button
  $(".saveBtn").on("click", function () {

      // `this` referencing saveBtn, DOM traversal to get parent and sibling elements.
    var userInput = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");

      // Save userInput to local storage by hour
    localStorage.setItem(hour, userInput);

    console.log(hour, userInput);
  });

     // Determine the past, present, future by comparing id atrr. to the current hour.
  function timeblockState() {
    var currentHour = dayjs().hour();

      // function to apply for each timeblock
    $(".time-block").each(function () {
      var timeNow = parseInt($(this).attr("id").split("-")[1]);
  
      if (timeNow < currentHour) {
        $(this).addClass("past");
      } else if (timeNow == currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past", "present");
        $(this).addClass("future");
      } 
    });
  };

     // Display user input from localStorage even if window is refreshed

  console.log(localStorage) 

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    // Add code to display the current date in the header of the page.
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").html(currentDate);

    // Header aligned in Center
  $("header").css("text-align", "center");


  timeblockState();

});
