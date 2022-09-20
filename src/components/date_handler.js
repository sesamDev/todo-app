import format from "date-fns/format";

export default class DateHandler {
  static todaysDate() {
    return format(new Date(), "yyyy/MM/dd");
  }

  static formatDate(date) {
    return format(date, "yyyy/MM/dd");
  }
}
