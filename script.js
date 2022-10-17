$(document).ready(function () {
    //display current day & time.
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY, h:mm:ss A")); // use of moment.js
   
    // saveBtn click listener for user input
     $(".saveButton").on("click", function () {
        var time = $(this).attr("id");
        var text = $(this).val();
       
        //set items in local storage.
        localStorage.setItem(time, text);
    })
    //load any saved data from LocalStorage - do this for each hour created. 

    $("#hour7").val(localStorage.getItem("hour7"));
    $("#hour8").val(localStorage.getItem("hour8"));
    $("#hour9").val(localStorage.getItem("hour9"));
    $("#hour10").val(localStorage.getItem("hour10"));
    $("#hour11").val(localStorage.getItem("hour11"));
    $("#hour12").val(localStorage.getItem("hour12"));
    $("#hour13").val(localStorage.getItem("hour13"));
    $("#hour14").val(localStorage.getItem("hour14"));
    $("#hour15").val(localStorage.getItem("hour15"));
    $("#hour16").val(localStorage.getItem("hour16"));
    $("#hour17").val(localStorage.getItem("hour17"));

   

    function hourTracker() {
        //TRACKS TIME AND TIMEBLOCKS
        var currentHour = moment().hour(); // use of moment.js
        

    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentHour)

        //IF AND ELSE IF CHANGES COLOR WHEN TIMEBLOCK NEEDS TO CHANGE 
        if (blockHour < currentHour) {
            $(this).addClass("past");
            
        }
        else if (blockHour === currentHour) {
            $(this).addClass("present");
            
        }
        else {
            $(this).addClass("future");
        }
    })
}
hourTracker(); //re-run function
})

