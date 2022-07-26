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

interface IApiResponse {
  page: number;
  pageCount: number;
  feed: IItem[];
}

export const Content = () => {
  const [items, setItems] = useState<IItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    updateFeed(pageNumber);
    window.addEventListener("scroll", handleScroll);
  }, [pageNumber]);

  const getFeed = async (page: number = 1) => {
    const queryParam = page ? `p=${page}` : "";
    const endpointUrl = new URL(`getAllFeed?${queryParam}`, BASE_API_URL);
    console.log(endpointUrl.href);
    const response = await fetch(endpointUrl.href);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = (await response.json()) as IApiResponse;
    return data.feed;
  };

  const updateFeed = async (page: number = 1) => {
    const feed = await getFeed(page);
    const newItems = items.concat(feed);
    setItems(newItems);
    if (feed.length > 0) setLoading(false);
  };

  const handleScroll = () => {
    let userScrollHeight = window.innerHeight + window.scrollY;
    let windowBottomHeight = document.documentElement.offsetHeight;
    if (userScrollHeight >= windowBottomHeight) {
      updateFeed(pageNumber + 1);
      setPageNumber(pageNumber + 1);
    }
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
