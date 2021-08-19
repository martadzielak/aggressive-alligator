import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { LoaderContainer, LoaderText } from "./styled";

export const LoaderWithText = () => {
  return (
    <LoaderContainer>
      <Loader type="Rings" color="#f2f2f2" height={150} width={150} />
      <LoaderText>Wait for your feed to load...</LoaderText>
    </LoaderContainer>
  );
};
