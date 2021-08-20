import { HeaderContainer, PageDescription, PageTitle } from "./styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <PageTitle>
        Aggre<span>ssive Alli</span>gator
      </PageTitle>
      <PageDescription>
        Where have you been, <strong>Web Developer</strong>? Read!
      </PageDescription>
    </HeaderContainer>
  );
};
