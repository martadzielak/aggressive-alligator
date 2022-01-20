import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
`;

export const PageTitle = styled.h1`
  font-size: 70px;
  margin: 0;
  text-align: center;
  color: #74c8ba;

  & span {
    color: #abd69a;
  }

  @media (max-width: 1000px) {
    font-size: 50px;
  }
`;

export const Alligator = styled.img`
  height: 70px;

  @media (max-width: 1000px) {
    height: 50px;
  }
`;

export const PageDescription = styled.p`
  padding-top: 15px;
  margin: 0;
  text-align: center;
`;

export const ContentContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;

  & hr {
    background-color: #14133f;
  }

  @media (max-width: 1000px) {
    padding: 15px;
  }
`;

export const Link = styled.a`
  color: #74c8ba;
  text-decoration: none;

  &:visited {
    color: #abd69a;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: #14133f;
  padding: 35px;
  max-width: 800px;

  & a {
    color: #74c8ba;
  }

  & a:visited {
    color: #abd69a;
  }

  @media (max-width: 800px) {
    padding: 15px;
  }
`;

export const LoaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoaderText = styled.p`
  color: #371bb1;
  font-size: 40px;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;

export const ContentList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const ContentItem = styled.li`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1000px) {
    padding: 15px;
  }
`;

export const DateAndAuthor = styled.span`
  color: #14133f;
`;

export const TitleContainer = styled.h2`
  padding: 0;
  margin: 0;
`;

export const Title = styled.span``;

export const Excerpt = styled.p`
  color: #14133f;

  & a {
    color: #74c8ba;
  }

  & a:visited {
    color: #abd69a;
  }
`;

export const ContentDivider = styled.div`
  margin: 0 auto;
  text-align: center;
`;
