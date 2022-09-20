import { format, isThisWeek, isToday } from "date-fns";

export default class DateHandler {
  static todaysDate() {
    return format(new Date(), "yyyy/MM/dd");
  }

  static formatDate(date) {
    return format(date, "yyyy/MM/dd");
  }

  // parseISO, see  See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments

  static parsedDate(date) {
    return new Date(date);
  }

  static taskDueThisWeek(date) {
    return isThisWeek(this.parsedDate(date), { weekStartsOn: 1 });
  }

  static taskDueToday(date) {
    return isToday(this.parsedDate(date));
  }
}
