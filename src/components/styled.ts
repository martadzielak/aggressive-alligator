import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  color: #05f4b7;

  & span {
    color: #371bb1;
  }

  @media (max-width: 1000px) {
    font-size: 50px;
  }
`;

export const PageDescription = styled.p`
  padding-top: 15px;
  margin: 0;
  text-align: center;
  color: #eee;
`;

export const ContentContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 0 35px;

  & hr {
    background-color: #eee;
  }

  @media (max-width: 1000px) {
    padding: 15px;
  }
`;

export const Link = styled.a`
  color: #05f4b7;
  text-decoration: none;

  &:visited {
    color: #eee;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #eee;
  padding: 35px;
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
  color: #eee;
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
  color: #eee;
`;

export const TitleContainer = styled.h2`
  padding: 0;
  margin: 0;
`;

export const Title = styled.span``;

export const Excerpt = styled.p`
  color: #eee;

  & a {
    color: #05f4b7;
  }

  & a:visited {
    color: #eee;
  }
`;

export const AsteriskDivider = styled.div`
text-align: center;
font-size: 20px;
color: #eee;
`;

export const Alligator = styled.img`
width: 350px;
`