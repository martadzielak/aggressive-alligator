import { Alligator, FooterContainer } from "./styled";
import AlligatorPicture from './img/alligator.jpg'

export const Footer = () => {
  return (
    <FooterContainer>
      <Alligator src={AlligatorPicture} alt="alligator"/>
      <p>
        If you're done... then you can go for a walk or do something different
        <strong> for once</strong>!
      </p>
    </FooterContainer>
  );
};
