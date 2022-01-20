import { FooterContainer } from "./styled";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <p>
          If you're done... you can go for a walk or do something different
          <strong> for once</strong>!
        </p>
        <p>
          Aggressive Alligator is a project supporting my (and maybe yours)
          daily technology news reading. For now, it displays 5 newest articles
          from the following blogs:{" "}
          <a href="https://medium.com/feed/@kentcdodds">
            Medium: Kent C. Dodds
          </a>
          ,{" "}
          <a href="https://medium.com/feed/free-code-camp">
            Medium: Free Code Camp
          </a>
          , <a href="https://medium.com/hackernoon">Medium: Hackernoon</a>,{" "}
          <a href="https://sekurak.pl/">Sekurak</a>,{" "}
          <a href="https://css-tricks.com/">CSS Tricks</a>,{" "}
          <a href="https://stackabuse.com/">StackAbuse</a>,{" "}
          <a href="https://alistapart.com/">A List Apart</a>,{" "}
          <a href="https://akendi.com/blog">Akendi</a>. My name is Marta Dziełak{" "}
          <a href="https://github.com/martadzielak">and here is my GitHub</a>
        </p>
      </FooterContainer>
    </>
  );
};
