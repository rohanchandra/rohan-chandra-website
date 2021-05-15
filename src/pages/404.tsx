import SEO from "../components/SEO";
import { PageProps } from "gatsby";
import React from "react";
import styled from "styled-components";
import { FourOhFourSong, HTTP404Songs } from "../data/HTTP-404-songs";

const FourOhFourPageStyles = styled.div`
  width: 100%;

  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  h1 {
    color: var(--text-color);
    font-size: 1.6rem;
    margin: 0;
  }

  h2 {
    font-size: 2rem;
    margin: 0.5rem 0;
  }

  a {
    font-style: italic;
    color: var(--grey);
  }
`;

const selectRandomSong = (choices: FourOhFourSong[]): FourOhFourSong => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const FourOhFourPage: React.FC<PageProps> = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const song = selectRandomSong(HTTP404Songs);

  return (
    <>
      <SEO title="404" description="Not Found" />

      <FourOhFourPageStyles>
        <h1 aria-label="404">4😱4</h1>
        <h2>Not Found</h2>

        <a href={song.url} title={`${song.title} by ${song.artist}`}>
          {song.title}
        </a>
      </FourOhFourPageStyles>
    </>
  );
};

export default FourOhFourPage;
