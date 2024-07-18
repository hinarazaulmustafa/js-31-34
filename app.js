// // // 1. Write a program that displays current date and time in
// // // your browser.


// // // var todayDate= new Date;

// // // document.write(todayDate);




// // // 2. Write a program that alerts the current month in words.
// // // For example December.


// // // var todayDate = new Date();
// // // var month = todayDate.getMonth();

// // // var monthNames = [
// // //   "January",
// // //   "February",
// // //   "March",
// // //   "April",
// // //   "May",
// // //   "June",
// // //   "July",
// // //   "August",
// // //   "September",
// // //   "October",
// // //   "November",
// // //   "December"
// // // ];

// // // var currentMonth = monthNames[month];

// // // alert("The current month is " + currentMonth);


// // // 3. Write a program that alerts the first 3 letters of the current
// // // day, for example if today is Sunday then alert will show
// // // Sun.



// // var todayDate = new Date();
// // var day = todayDate.getDay();
// // var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// // var shortDayName = dayNames[day].split("", 3);
// // console.log(shortDayName);
// // var shortDayName = dayNames[day].split("", 3).join("");
// // alert(shortDayName);






// // 4. Write a program that displays a message “It’s Fun day” if
// // its Saturday or Sunday today.

// // var todayDate = new Date();
// // var day = todayDate.getDay();
// // var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// // if (dayNames[day]==="saturday"|| dayNames[day]==="sunday") {alert("its a fun day")

// // }else{alert("Lets get back to work")}
    


// // 5. Write a program that shows the message “First fifteen
// // days of the month” if the date is less than 16th of the month
// // else shows “Last days of the month”.



// // let date = new Date();
// // let day = date.getDate();

// // if (day < 16) {
// //   console.log("First fifteen days of the month");
// // } else {
// //   console.log("Last days of the month");
// // }



// // 6. Write a program that determines the minutes since
// // midnight, Jan. 1, 1970 and assigns it to a variable that
// // hasn't been declared beforehand. Use any variable you like
// // to represent the Date object.

// // var myDate = new Date('January 1, 1970 00:00:00');
// // console.log(myDate);

// // var today = new Date();
// // console.log(today);

// // var millisecondsSince1970 = today - myDate;

// // var minutesSince1970 = Math.floor(millisecondsSince1970 / 60000);
// // console.log(minutesSince1970);


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.



// var today = new Date;
// var hour =today.getHours();
// console.log(hour);


// if (hour<12){alert("its am")};
// if(hour==12){alert("its noon")}
// else{alert("its pm")}


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.


// var today = new Date()
//  var laterDate=new Date('31 Dec 2020');
// document.write(laterDate)



// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015



// var today = new Date();
// var miliToday=today.getTime();

// var cutomDate =new Date("13 march 2024");
// var mili = cutomDate.getTime();

// var diffMilli= miliToday-mili;
// var days = Math.floor(diffMilli/(1000*60*60*24)-1)
// console.log(days);
// document.write(days+' days have passed since Ist Ramadan,2024')


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.



// var refDate = new Date("December 5, 2015");
// console.log(refDate);
// var today = new Date("January 1, 2015");
// console.log(today);
// var diffInSeconds = (refDate - today) / 1000;
// console.log(diffInSeconds);




// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.



// var today = new Date();
// var hours = today.getHours();
// hours = hours - 1;
// today.setHours(hours);
// console.log(today); // outputs the current date and time one hour ago
// console.log(hours + ":" + "the time one hour ago was");

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?



// var today = new Date();
// var newtoday = today.getFullYear();
// console.log(newtoday);
// var beforeCentury = newtoday - 100;
// today.setFullYear(beforeCentury);
// alert("The date 100 years ago was " + today.toLocaleDateString());

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.


// var userAge= +prompt("please enter ur Age?");

// var today = new Date();

// var newToday = today.getFullYear();

// var userBirthYear= newToday-userAge;

// alert("The user is " + userAge + " years old. Their birth year is " + userBirthYear);


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month

// var Customer = "hina";
// var today = new Date();
// var month = today.getMonth()
// console.log(month);
// var mlist = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// var unitsUsed =210;
// var perUnitCharge=49;
// var totalBill=perUnitCharge*unitsUsed;
// var lateSurcharge=  350
// var billAfterSurcharge=totalBill+lateSurcharge;


// document.write('<h1>'+'K-Electric Bill'+'</h1>')
// document.write('Customer Name :'+Customer+'<br>');
// document.write('Month :'+mlist[month]+'<br>');
// document.write('Number of units :'+unitsUsed+'<br>');
// document.write('Charges per unit :'+perUnitCharge+'<br>');
// document.write('<br>')
// document.write('Net Amount Pay-able (Within Due Date) :'+totalBill+'<br>');
// document.write('Late payment surcharge :'+lateSurcharge+'<br>');
// document.write('Gross payment Pay-able(after Due Date) :'+billAfterSurcharge+'<br>');


