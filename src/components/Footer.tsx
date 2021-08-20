import { FooterContainer } from "./styled";
import Alligator from './img/alligator-picture.png'

export const Footer = () => {
  return (
    <FooterContainer>
      <img src={Alligator} alt="alligator"/>
      <p>
        If you're done... then you can go for a walk or do something different
        <strong> for once</strong>!
      </p>
    </FooterContainer>
  );
};
