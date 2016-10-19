


$(".day").on("click", function () {
    $(this).css('background-color', 'red')
});




var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function () {

    var d = new Date();
    var mth = d.getMonth() + 1;
    var yr = d.getFullYear();

    $("#month").val(mth);
    $("#year").val(yr);
    showCalendar(mth, yr);

    $("#month,#year").change(function (e) {
        showCalendar($("#month").val(), $("#year").val());
    });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth() + 1, 0).getDate();
}



function showCalendar(mth, yr) {


    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date(firstDayOfMonth);
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();
    //Create counter for day count
    var divCount = 0;



    var str = '<div class="row">';


    for (var i = 0; i < firstDayOfWeek; i++) {
        str += '<div class="day"></div>';
        divCount++;


        if (divCount >= 7) {
            //Start new row
            str += '</div><div class="row">';
            divCount = 0;
        }
    }

    for (var i = 0; i < (numberOfDaysInMonth); i++) {
        str += '<div class="day">' + (i + 1) + '</div>';
        divCount++;
        if (divCount >= 7) {
            //Start new row
            str += '</div><div class="row">';
            divCount = 0;
        }
    }


    str += '</div>';




    $("#results").html(str);



}

