import React from "react";
import styled from "styled-components";

const DescriptionStyles = styled.div`
  p {
    font-size: 2rem;
  }
  span {
    color: var(--accent-color);
    font-weight: 700;
  }
`;

const Emoji = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  width: 3rem;
  cursor: default;
`;

// Animates emoji with slight rotation to right.
const WaveTransition = styled(Emoji)`
  /* Do not show this emoji & animation on very small screens for cleaner display of description text */
  @media (max-width: 45ch) {
    display: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: 400ms;
    transition-timing-function: ease-in-out;

    &:hover {
      transform: rotate(30deg);
      transform-origin: 50% 60%;
    }
  }
`;

// Animates full-size emoji to a small dot.
const PaleBlueDot = styled(Emoji)`
  @media (prefers-reduced-motion: no-preference) {
    /* Transparent emoji to reserve space that the emoji uses */
    span {
      opacity: 0;
      position: fixed;
    }

    &:after {
      content: "ð";
      transition: 1250ms;
      transition-timing-function: ease-in-out;
      display: inline-block;
    }

    &:hover:after {
      transform: rotate(360deg);
      font-size: 0.25rem;
    }
  }
`;

const Description: React.FC = () => {
  return (
    <DescriptionStyles>
      <p>
        Gâday, I'm <span>Rohan</span>, <WaveTransition>ð</WaveTransition>
        <br /> a <span>Full-Stack Web Dev</span>
        <br /> in <span>Sydney, Australia</span>.{" "}
        <PaleBlueDot>
          <span>ð</span>
        </PaleBlueDot>
      </p>
    </DescriptionStyles>
  );
};

export default Description;
