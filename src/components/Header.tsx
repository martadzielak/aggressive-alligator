import {
  Alligator,
  HeaderContainer,
  PageDescription,
  PageTitle,
} from "./styled";
import AlligatorPicture from "./assets/alligator.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <PageTitle>
        Aggre<span>ssive Alli</span>gator{" "}
        <Alligator src={AlligatorPicture} alt="alligator" />
      </PageTitle>
      <PageDescription>Hellew, aaarrrgghhh</PageDescription>
    </HeaderContainer>
  );
};
