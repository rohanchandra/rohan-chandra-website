import React from "react";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Footer from "./Footer";
import Nav from "./Nav";
import styled from "styled-components";

const ContentContainer = styled.div`
  max-width: 900px;
  margin: 0 auto 0 auto;
  padding: 0 1rem 0 1rem;
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  main {
    flex-grow: 1;
    margin: 2.25rem 0 1rem 0;
    display: flex;
    flex-direction: column;
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContentContainer>
        <Nav />
        <main>{children}</main>
        <Footer />
      </ContentContainer>
    </>
  );
};

export default Layout;
