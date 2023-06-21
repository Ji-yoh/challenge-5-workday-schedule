// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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
  
  // 4th todo: Display current date in header, use Day.js
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  
});
