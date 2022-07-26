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
import { forkJoin, fromEvent, map } from "rxjs";

interface IApiResponse {
  page: number;
  pageCount: number;
  feed: IItem[];
}

export const Content = () => {
  const [items, setItems] = useState<IItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadInitialFeed();
  }, []);

  const loadInitialFeed = async () => {
    const newItems = await getFeed(1);
    setItems(newItems);
    if (newItems.length > 0) setLoading(false);
  };

  const getFeed = async (page: number) => {
    const queryParam = `?p=${page}`;
    const endpointUrl = new URL(`getAllFeed${queryParam}`, BASE_API_URL);
    console.log(endpointUrl.href);
    const response = await fetch(endpointUrl.href);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = (await response.json()) as IApiResponse;
    return data.feed;
  };

  const scroll = fromEvent(document, "scroll").pipe(
    map(() => {
      return document.documentElement.scrollTop;
    })
  );

  scroll.subscribe((scrollPos) => {
    let limit = document.documentElement.scrollTop - window.innerHeight;
    if (scrollPos === limit) {
      setPage(page + 1);
      forkJoin([items, getFeed(page)]).subscribe((data: any) => {
        const newArr = [...data[0], ...data[1]];
        setItems(newArr);
      });
    }
  });

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
