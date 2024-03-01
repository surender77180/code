let previousDate= document.getElementById("previous_date");
let currentDate = document.getElementById("current_date");
let output = document.getElementById("output");

document.getElementById("calculate_btn").addEventListener("click", eve => {
 
  eve.preventDefault();
  
  console.log(previousDate.value);
  if (previousDate.value == "" || currentDate.value == "") {
    output.innerHTML = "Please select Date";
  } else {
    calculateAgeDifference(previousDate.value, currentDate.value);
  }

});

function calculateAgeDifference(start, end) {
  console.log(start);
  console.log(end)
  let dobYear = parseInt(start.substring(0, 4));
  let dobMonth = parseInt(start.substring(5, 7));
  let dobDate = parseInt(start.substring(8, 10));
  let currYear = parseInt(end.substring(0, 4));
  let currMonth = parseInt(end.substring(5, 7));
  let currDate = parseInt(end.substring(8, 10));

  console.log(dobYear)
  let yearAgeDiff = currYear - dobYear;


  let monthAgeDiff;
  if (currMonth >= dobMonth) {
    monthAgeDiff = currMonth - dobMonth;
  }else {
    yearAgeDiff-=1;
    monthAgeDiff = 12 + currMonth - dobMonth;
  }


  let dateAgeDiff;
  if (currDate >= dobDate) {
    dateAgeDiff = currDate - dobDate;
  }else {
    monthAgeDiff-=1;
    let noofDaysInDoB = daysInMonth(dobMonth, dobYear);
    dateAgeDiff = noofDaysInDoB + currDate - dobDate;


    if (monthAgeDiff < 0) {
      monthAgeDiff = 11;
      yearAgeDiff-=1;

    }
  }
  output.innerHTML = yearAgeDiff + "Year, " + monthAgeDiff + "Months, " + dateAgeDiff + " Days.";
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
