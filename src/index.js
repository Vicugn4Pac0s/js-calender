import {generate_year_range} from './functions/functions.js';
import CreateCalender from "./CreateCalender.js";

let calendar = document.getElementById("calendar");
let lang = calendar.getAttribute("data-lang");

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let createYear = generate_year_range(1970, 2200);
document.getElementById("year").innerHTML = createYear;

selectYear.value = currentYear;
selectMonth.value = currentMonth;

let Calender = new CreateCalender();
Calender.render();

window.next = function () {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;

  selectYear.value = currentYear;
  selectMonth.value = currentMonth;
  
  Calender.set(currentMonth, currentYear);
  Calender.render();
}
window.previous = function() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;

  selectYear.value = currentYear;
  selectMonth.value = currentMonth;

  Calender.set(currentMonth, currentYear);
  Calender.render();
}
window.jump = function() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  Calender.set(currentMonth, currentYear);
  Calender.render();
}