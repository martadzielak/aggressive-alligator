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

export const Content = () => {
  const [items, setItems] = useState<IItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRss();
  }, []);

  const getRss = async () => {
    setItems(await getFeedItemsArray());
    setLoading(false);
  };

  return loading ? (
    <LoaderWithText />
  ) : (
    <ContentContainer>
      <ContentList>
        {items.slice(0, 5).map((item, i) => {
          return (
            <>
              <ContentItem key={item.title}>
                <Link href={item.link}>
                  <TitleContainer>
                    <DateAndAuthor>
                      {item.pubDate ? `📅${formatDate(item.pubDate)} ` : null}
                      {item.creator ? `- ${removeCDATA(item.creator)} ` : null}
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
              {i !== 4 && <hr />}
            </>
          );
        })}
      </ContentList>
    </ContentContainer>
  );
};
