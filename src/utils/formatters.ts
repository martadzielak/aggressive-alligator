export const removeCDATA = (string: string) => {
  return string.replace(/<!\[CDATA\[.*?\]\]>/g, "").replace(/\]\]>/g, "");
};

export const trimText = (string: string, number: number) => {
  return string.split("").splice(0, number).join("");
};
