import { useEffect, useState } from "react";
import { getFeedItemsArray } from "../utils/getFeedItemsArray";
import { LoaderWithText } from "./Loader";
import {
  ContentContainer,
  ContentItem,
  ContentList,
  DateAndAuthor,
  Excerpt,
  Link,
  Title,
  TitleContainer,
} from "./styled";
import { formatDate } from "../utils/dateHelpers";
import { removeCDATA, trimText } from "../utils/formatters";
import { IItem } from "../utils/types";
import { Divider } from "./Divider";

export const Content = () => {
  const [items, setItems] = useState<IItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeed();
  }, []);

  const getFeed = async () => {
    const feed = (await getFeedItemsArray()).slice(0, 5);
    setItems(feed);
    setLoading(false);
  };

  return loading ? (
    <LoaderWithText />
  ) : (
    <ContentContainer>
      <ContentList>
        {items.map((item, i) => {
          return (
            <>
              {i !== 5 && <Divider number={i + 1} />}
              <ContentItem key={item.title}>
                <Link href={item.link}>
                  <TitleContainer>
                    <DateAndAuthor>
                      {item.pubDate ? `📅${formatDate(item.pubDate)} ` : null}
                    </DateAndAuthor>
                    <Title>
                      {item.title ? `| ${removeCDATA(item.title)}` : null}
                    </Title>
                  </TitleContainer>
                </Link>
                <Excerpt
                  dangerouslySetInnerHTML={{
                    __html: item.description
                      ? removeCDATA(trimText(item.description, 1000))
                      : "",
                  }}
                />
              </ContentItem>
            </>
          );
        })}
      </ContentList>
    </ContentContainer>
  );
};
