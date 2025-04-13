import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  weekStart: 1,
});

export const formatDateToISO = (date) => {
  return dayjs(date).format("YYYY-MM-DD");
};

export const formatDateToUI = (date) => {
  return dayjs(date).format("DD.MM.YYYY");
};

export const todayDayjs = () => {
  return dayjs();
};

export const isSameDay = (date1, date2) => {
  return dayjs(date1).isSame(date2, "day");
};

export const parseToDayjs = (date) => {
  return dayjs(date);
};
