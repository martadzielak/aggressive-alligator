const express = require("express");
const request = require("request");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const getRss = (endpoint, url) => {
  router.get(endpoint, (req, res) => {
    request({ url: url }, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: "heee" });
      }

      res.set("Content-Type", "application/rss+xml");
      res.send(Buffer.from(body));
    });
  });
};

getRss("/kentcdodds", "https://medium.com/feed/@kentcdodds");
getRss("/freecodecamp", "https://medium.com/feed/free-code-camp");
getRss("/hackernoon", "https://medium.com/hackernoon");
getRss("/sekurak", "https://sekurak.pl/feed/");
getRss("/sekurak", "https://sekurak.pl/feed/");
getRss("/csstricks", "https://css-tricks.com/feed/");
getRss("/stackabuse", "https://stackabuse.com/rss");
getRss("/alistapart", "https://alistapart.com/main/feed/");
getRss("/akendi", "https://www.akendi.com/blog/feed/");

// path must route to lambda
app.use("/.netlify/functions/server", router);
module.exports = app;
module.exports.handler = serverless(app);
