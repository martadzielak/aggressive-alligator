import styled, { css } from "styled-components";
import {
  basicFontSize,
  colorBlack,
  colorWhite,
  mobileMaxWidth,
} from "../constants";

const textShadow = css`
  text-shadow: 0 0 10px ${colorBlack + "aa"};
`;

const dropShadow = css`
  filter: drop-shadow(0px 0px 10px ${colorBlack + "aa"});
`;

export const Main = styled.div`
  ${textShadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: ${basicFontSize};
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  color: ${colorWhite};
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
  color: ${colorWhite};

  & span {
    color: ${colorBlack};
  }

  @media (max-width: ${mobileMaxWidth}) {
    font-size: 50px;
  }
`;

export const Alligator = styled.img`
  ${dropShadow};
  height: 70px;

  @media (max-width: ${mobileMaxWidth}) {
    height: 50px;
  }
`;

export const PageDescription = styled.p`
  padding-top: 15px;
  margin: 0;
  text-align: center;
`;

export const ContentContainer = styled.div`
  max-width: ${mobileMaxWidth};
  margin: 0 auto;

  & hr {
    background-color: ${colorWhite};
  }

  @media (max-width: ${mobileMaxWidth}) {
    padding: 15px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
`;

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 35px;
  max-width: 800px;

  & a {
    text-decoration: none;
    font-weight: bold;
    color: ${colorWhite};
  }

  @media (max-width: 800px) {
    padding: 15px;
  }
`;

export const LoaderContainer = styled.div`
  ${dropShadow};
  margin: 0 auto;
  max-width: ${mobileMaxWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoaderText = styled.p`
  color: ${colorWhite};
  text-align: center;
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

  @media (max-width: ${mobileMaxWidth}) {
    padding: 15px;
  }
`;

export const DateAndAuthor = styled.span``;

export const TitleContainer = styled.span`
  padding: 0;
  margin: 0;
  color: ${colorWhite};
`;

export const ContentTitle = styled.h2`
  margin: 0;
`;

export const Excerpt = styled.p`
  & a {
    color: ${colorWhite};
    text-decoration: none;
    font-weight: bold;
  }
`;

export const ContentDivider = styled.div`
  margin: 0 auto;
  text-align: center;
`;
