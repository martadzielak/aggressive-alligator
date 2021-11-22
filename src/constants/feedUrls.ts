const hostname = window.location.hostname;
const port = 4050;

const baseUrl =
  process.env.NODE_ENV === "development"
    ? `http://${hostname}:${port}/feed/`
    : "/proxy/";

export const feedUrls = [
  `${baseUrl}kentcdodds`,
  `${baseUrl}freecodecamp`,
  `${baseUrl}hackernoon`,
  `${baseUrl}sekurak`,
  `${baseUrl}csstricks`,
  `${baseUrl}stackabuse`,
  `${baseUrl}alistapart`,
  `${baseUrl}akendi`,
];
