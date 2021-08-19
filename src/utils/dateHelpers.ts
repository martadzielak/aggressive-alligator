import { IItem } from "./types";

export const parseDate = (dateString: string | undefined) => {
  if (dateString) {
    const date = new Date(dateString);
    return date.getTime();
  }
};

export const sortChronologically = (itemsArray: IItem[]) => {
  const sortedItemsArray = itemsArray.sort((a, b) => {
    if (a.pubDate && b.pubDate) {
      return a.pubDate > b.pubDate ? -1 : 1;
    } else return 0;
  });

  return sortedItemsArray;
};

export const formatDate = (time: number) => {
  const date = new Date(time);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes =
    minutes < 10 ? parseInt(minutes.toString().padStart(2, "0")) : minutes;
  var strTime = hours + ":" + minutes + ampm;
  // e.g. "13 Nov 2016 11:00pm";
  return `${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()} ${strTime}`;
};
