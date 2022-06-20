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
  ContentTitle,
  TitleContainer,
} from "./styled";
import { formatDate } from "../utils/dateHelpers";
import { removeCDATA, trimText } from "../utils/formatters";
import { IItem } from "../utils/types";

export const Content = () => {
  const [items, setItems] = useState<IItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeed();
  }, []);

  const getFeed = async () => {
    const feed = (await getFeedItemsArray()).slice(0, 5);
    setItems(feed);
    if (feed.length > 0) setLoading(false);
  };

  return loading ? (
    <LoaderWithText />
  ) : (
    <ContentContainer>
      <ContentList>
        {items.map((item, i) => {
          return (
            <>
              <ContentItem key={item.title}>
                <Link href={item.link}>
                  <TitleContainer>
                    <DateAndAuthor>
                      {item.pubDate ? `📅${formatDate(item.pubDate)} ` : null}
                    </DateAndAuthor>
                    <ContentTitle>
                      {item.title ? `| ${removeCDATA(item.title)}` : null}
                    </ContentTitle>
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
