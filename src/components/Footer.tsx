import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  border: 1px solid var(--footer-border-color);
  border-bottom: none;
  border-radius: 1em 1em 0 0;
  background-color: var(--footer-background-color);
  color: var(--grey);
  font-size: 0.9rem;
  padding: 1.15rem 1.5rem;

  p {
    margin: 0;
  }
`;

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <FooterStyles>
      <p className="center">&copy; {year} Rohan Chandra</p>
    </FooterStyles>
  );
};

export default Footer;