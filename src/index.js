import { generate_year_range } from "./functions/functions.js";
import CreateCalender from "./CreateCalender.js";

class main {
  constructor() {
    this.today = new Date();
    this.currentYear = this.today.getFullYear();
    this.currentMonth = this.today.getMonth();

    this.$_previous = document.getElementById("previous");
    this.$_next = document.getElementById("next");
    this.$_selectYear = document.getElementById("year");
    this.$_selectMonth = document.getElementById("month");

    let calendar = document.getElementById("calendar");
    let lang = calendar.getAttribute("data-lang");

    let createYear = generate_year_range(1970, 2200);
    document.getElementById("year").innerHTML = createYear;

    this._setSelect();

    this.Calender = new CreateCalender();
    this.Calender.render();

    this.handleEvents();
  }
  handleEvents() {
    this.$_previous.addEventListener("click", this.previous.bind(this));
    this.$_next.addEventListener("click", this.next.bind(this));
    this.$_selectYear.addEventListener("change", this.jump.bind(this));
    this.$_selectMonth.addEventListener("change", this.jump.bind(this));
  }
  next() {
    this.currentYear =
      this.currentMonth === 11 ? this.currentYear + 1 : this.currentYear;
    this.currentMonth = (this.currentMonth + 1) % 12;
    this._setSelect();
    this._setCalender();
  }
  previous() {
    this.currentYear =
      this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear;
    this.currentMonth = this.currentMonth === 0 ? 11 : this.currentMonth - 1;
    this._setSelect();
    this._setCalender();
  }
  jump() {
    this.currentYear = parseInt(selectYear.value);
    this.currentMonth = parseInt(selectMonth.value);
    this._setCalender();
  }
  _setCalender() {
    this.Calender.set(this.currentMonth, this.currentYear);
    this.Calender.render();
  }
  _setSelect() {
    this.$_selectYear.value = this.currentYear;
    this.$_selectMonth.value = this.currentMonth;
  }
}

new main();
