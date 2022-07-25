import express from "express";
import fetch from "node-fetch";
import serverless from "serverless-http";
import cors from "cors";
import { parseString } from "xml2js";
import { IItem } from "../utils/types";

const FEED_URLS = [
  "https://stackabuse.com/rss",
  "https://sekurak.pl/feed/",
  "https://css-tricks.com/feed/",
];

const app = express();
app.use(cors());
const router = express.Router();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const parseDate = (dateString: string | undefined) => {
  if (dateString) {
    const date = new Date(dateString);
    return date.getTime();
  }
};

const sortChronologically = (itemsArray: IItem[]) => {
  const sortedItemsArray = itemsArray.sort((a, b) => {
    if (a.pubDate && b.pubDate) {
      return a.pubDate > b.pubDate ? -1 : 1;
    } else return 0;
  });

  return sortedItemsArray;
};

const parseXml = (xml: string) => {
  return new Promise((resolve) => {
    parseString(xml, (err, result) => {
      try {
        resolve(
          result.rss.channel[0].item.map((item: any) => {
            return {
              title: item.title[0],
              link: item.link[0],
              pubDate: parseDate(item.pubDate[0]),
              content: item.description
                ? item.description[0]
                : item["content:encoded"][0],
            };
          })
        );
      } catch {
        console.error(err);
      }
    });
  });
};

router.get("/getAllFeed", async (req, res) => {
  let result = [];
  try {
    for (let url of FEED_URLS) {
      const feedItems = await fetch(url);
      const xml = await feedItems?.text();
      if (xml) {
        const itemsArr = await parseXml(xml);
        result.push(itemsArr);
      }
    }
    const flattenedArr = result.flat(2) as IItem[];
    const sortedFeed = sortChronologically(flattenedArr);
    res.set("Content-Type", "application/json");
    res.send(sortedFeed);
  } catch (error) {
    console.error(error);
  }
});

//app.options("*", () => cors());
app.use("/.netlify/functions/server", router); // path must route to lambda

export { app };
export const handler = serverless(app);
