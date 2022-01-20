import { ContentDivider } from "./styled";
import { replaceNumberWithEmoji } from "../utils/replaceNumberWithEmoji";
import { FC } from "react";
import { getRandomEmoji } from "../utils/getRandomEmoji";

export const Divider: FC<{ number: number }> = ({ number }) => {
  return (
    <ContentDivider>{`${getRandomEmoji()} ${getRandomEmoji()} ${replaceNumberWithEmoji(
      number
    )} ${getRandomEmoji()} ${getRandomEmoji()}`}</ContentDivider>
  );
};
