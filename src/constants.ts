const devEnv = process.env.NODE_ENV === "development";
export const BASE_API_URL = `${
  devEnv ? "http://localhost:9000" : "https://aggressive-alligator.netlify.app"
}/.netlify/functions/server/`;

export const colorBlack = "#000000";
export const colorWhite = "#ffffff";
export const colorPink = "hotpink";
export const colorViolet = "#42446F";

export const basicFontSize = "14px";

export const mobileMaxWidth = "850px";
