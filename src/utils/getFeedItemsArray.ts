import { feedUrls } from "../constants/feedUrls";
import { parseDate, sortChronologically } from "./dateHelpers";

export const getFeedItemsArray = async () => {
  const feedItemsArray = [];
  for (const feedUrl of feedUrls) {
    const request = new XMLHttpRequest();
    request.open("GET", feedUrl, false);
    request.send();
    const responseText = request.responseText;
    const contentsParsed = new window.DOMParser().parseFromString(
      responseText,
      "text/xml"
    );
    const selectedFeeds = contentsParsed.querySelectorAll("item");
    const feedItems = [...selectedFeeds].map((el) => ({
      link: el.querySelector("link")?.innerHTML,
      title: el.querySelector("title")?.innerHTML,
      pubDate: parseDate(el.querySelector("pubDate")?.innerHTML),
      description: el.querySelector("description")?.innerHTML,
    }));
    feedItemsArray.push(feedItems);
  }
  const feed = feedItemsArray.flat();
  const feedSorted = sortChronologically(feed);

  return feedSorted;
};
