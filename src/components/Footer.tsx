import { FooterContainer } from "./styled";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <p>That's all...</p>
        <p>
          Aggressive Alligator is a project supporting my (and maybe yours)
          daily technology news reading. For now, it displays newest articles
          from the following blogs: <a href="https://sekurak.pl/">Sekurak</a>,{" "}
          <a href="https://css-tricks.com/">CSS Tricks</a>,{" "}
          <a href="https://stackabuse.com/">StackAbuse</a>. My name is Marta
          Dziełak{" "}
          <a href="https://github.com/martadzielak">and here is my GitHub</a>
        </p>
      </FooterContainer>
    </>
  );
};
