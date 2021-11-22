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
  color: #b7b7b7;
`;

export const ContentContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 0 35px;

  & hr {
    background-color: #b7b7b7;
  }

  @media (max-width: 1000px) {
    padding: 15px;
  }
`;

export const Link = styled.a`
  color: #05f4b7;
  text-decoration: none;

  &:visited {
    color: #b7b7b7;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #b7b7b7;
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
  color: #b7b7b7;
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
  color: #b7b7b7;
`;

export const TitleContainer = styled.h2`
  padding: 0;
  margin: 0;
`;

export const Title = styled.span``;

export const Excerpt = styled.p`
  color: #b7b7b7;

  & a {
    color: #05f4b7;
  }

  & a:visited {
    color: #b7b7b7;
  }
`;

export const AsteriskDivider = styled.div`
  text-align: center;
  font-size: 20px;
  color: #b7b7b7;
`;

export const Alligator = styled.img`
  width: 75%;
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 0.3;
`;
