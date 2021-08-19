import { HeaderContainer, PageDescription, PageTitle } from "./styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <PageTitle>
        Aggre<span>ssive Alli</span>gator
      </PageTitle>
      <PageDescription>
        This is a news aggregator that keeps a developer informed.
      </PageDescription>
    </HeaderContainer>
  );
};
