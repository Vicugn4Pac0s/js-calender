import { daysInMonth } from "./functions/functions.js";

const months = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];

export default class {
  constructor() {
    this.today = new Date();
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();

    this.monthAndYear = document.getElementById("monthAndYear");
    this.tbl = document.getElementById("calendar-body");

    this._renderDay();
  }
  set(month, year) {
    this.currentMonth = month;
    this.currentYear = year;
  }
  render() {
    this._renderMonth();
    this._renderDate();
  }
  _renderMonth() {
    this.monthAndYear.innerHTML =
      months[this.currentMonth] + " " + this.currentYear;
  }
  _renderDay() {
    let days = ["日", "月", "火", "水", "木", "金", "土"];
    let dayHeader = "<tr>";
    for (let day in days) {
      dayHeader += "<th data-days='" + days[day] + "'>" + days[day] + "</th>";
    }
    dayHeader += "</tr>";

    document.getElementById("thead-month").innerHTML = dayHeader;
  }
  _renderDate() {
    this.tbl.innerHTML = "";
    // creating all cells
    let date = 1;
    let firstDay = new Date(this.currentYear, this.currentMonth).getDay();
    for (let i = 0; i < 6; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        if (date > daysInMonth(this.currentMonth, this.currentYear)) {
          break;
        }
        if (i === 0 && j < firstDay) {
          let cell = document.createElement("td");
          let cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
          continue;
        }
        let cell = this._getCreateCell(date);
        row.appendChild(cell);
        date++;
      }
      this.tbl.appendChild(row);
    }
  }
  _getCreateCell(date) {
    let cell = document.createElement("td");
    cell.setAttribute("data-date", date);
    cell.setAttribute("data-month", this.currentMonth + 1);
    cell.setAttribute("data-year", this.currentYear);
    cell.setAttribute("data-month_name", months[this.currentMonth]);
    cell.className = "date-picker";
    cell.innerHTML = "<span>" + date + "</span>";
    if (
      date === this.today.getDate() &&
      this.currentYear === this.today.getFullYear() &&
      this.currentMonth === this.today.getMonth()
    ) {
      cell.className = "date-picker selected";
    }
    return cell;
  }
}
