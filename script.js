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
