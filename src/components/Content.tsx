import { useEffect, useState } from "react";
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
import { BASE_API_URL } from "../constants";

export const Content = () => {
  const [items, setItems] = useState<IItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateFeed = async () => {
      const feed = await getFeed();
      setItems(feed);
      if (feed.length > 0) setLoading(false);
    };
    updateFeed();
  }, []);

  const getFeed = async () => {
    const endpointUrl = new URL("getAllFeed", BASE_API_URL);
    console.log(endpointUrl.href);
    const response = await fetch(endpointUrl.href);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = (await response.json()) as IItem[];
    return data;
  };
  return loading ? (
    <LoaderWithText />
  ) : (
    <ContentContainer>
      <ContentList>
        {items.map((item, i) => {
          return (
            <ContentItem key={`${"content_item" + i}`}>
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
                  __html: item?.content
                    ? removeCDATA(trimText(item.content, 1000))
                    : "",
                }}
              />
            </ContentItem>
          );
        })}
      </ContentList>
    </ContentContainer>
  );
};
