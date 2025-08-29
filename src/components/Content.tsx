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

  // Fetch feed data for a given page
  const getFeed = async (page: number = 1) => {
    const queryParam = page ? `p=${page}` : "";
    const endpointUrl = `${BASE_API_URL}getAllFeed?${queryParam}`;
    const response = await fetch(endpointUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = (await response.json()) as IApiResponse;
    return data.feed;
  };

  // Load feed and update state
  const updateFeed = async (page: number) => {
    setLoading(true);
    try {
      const feed = await getFeed(page);
      setItems(prevItems => [...prevItems, ...feed]);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.offsetHeight - 10
      ) {
        setPageNumber(prev => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch initial feed and on pageNumber change
  useEffect(() => {
    updateFeed(pageNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  if (loading && items.length === 0) {
    return <LoaderWithText />;
  }

  return (
    <ContentContainer>
      <ContentList>
        {items.map((item, i) => (
          <ContentItem key={`content_item${i}`}>
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
        ))}
      </ContentList>
      {loading && <LoaderWithText />}
    </ContentContainer>
  );
};
