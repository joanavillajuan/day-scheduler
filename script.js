/* Wrap all code that interacts with the DOM in a call to jQuery to ensure that
 the code isn't run until the browser has finished rendering all the elements
 in the html.
*/
$(function () {
  // Add a listener for click events on the save button

  $(".saveBtn").on("click", function () {
    // `this` referencing saveBtn, DOM traversal to get parent and sibling elements.

    var userInput = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");

    // Save userInput to local storage by hour

    localStorage.setItem(userInput, hour);

    console.log(hour, userInput);
  });

  /* TODO: Add code to apply the past, present, or future class to each time
    block by comparing the id to the current hour. HINTS: How can the id
    attribute of each time-block be used to conditionally add or remove the
    past, present, and future classes? How can Day.js be used to get the
    current hour in 24-hour time?
  */

  function timeblockState() {
    var currentHour = dayjs().hour();

    // Determine the past, present, future by comparing id atrr. to the current hour.

    $(".time-block").each(function () {
      var timeNow = parseInt($(this).attr("id"));
  
      if (timeNow < currentHour) {
        $(this).addClass("past");
      } else if (timeNow == currentHour) {
        $(this).removeClass("past").addClass("present");
      } else {
        $(this).removeClass("past", "present").addClass("future");
      }
    });
  }

  /* TODO: Add code to get any user input that was saved in localStorage and set
   the values of the corresponding textarea elements. HINT: How can the id
   attribute of each time-block be used to do this?
  */

  // Display user input from localStorage
  //  localStorage.getItem(userInput, hour);

  // Add code to display the current date in the header of the page.
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").html(currentDate);

  // Header aligned in Center
  $("header").css("text-align", "center");

  timeblockState();
});
