// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // 1st todo: Saved schedule items to local storage
    $(".saveBtn").on("click", function () {
      var time = $(this).parent().attr("id");
      var text = $(this).siblings(".description").val();
      console.log(time, text);
      localStorage.setItem(time, text);
      // originally saved time and text to local storage as an object called savedItems, but was unable to retrieve the object from local storage. saved time and text as individual items instead.
      /* var savedItems = JSON.parse(localStorage.getItem("savedItems"));
      if (!savedItems) {
        savedItems = [];
      };

      savedItems.push({ time, text });

      localStorage.setItem("savedItems", JSON.stringify(savedItems)); */
    })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // 2nd todo: Color code time blocks based on time of day
    var currentHour = dayjs().hour();
    
    $(".time-block").each(function () {
  
      var scheduleTime = parseInt($(this).attr("id"));
      
      if (currentHour > scheduleTime) { // 'this' was used instead of calling the class name .time-block, originally was causing future class to be applied to all time blocks
        $(this).addClass("past");$(this).removeClass("present"); 
        $(this).removeClass("future");
      } else if (currentHour === scheduleTime) {
        $(this).addClass("present"); 
        $(this).removeClass("past"); 
        $(this).removeClass("future");
      } else {
        $(this).addClass("future"); 
        $(this).removeClass("past"); 
        $(this).removeClass("present");
      } 
    });
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // 3rd todo: Retrieve saved schedule items from local storage
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
    console.log(localStorage.getItem("17"));
  // TODO: Add code to display the current date in the header of the page.
  // 4th todo: Display current date in header, use Day.js
  
});
