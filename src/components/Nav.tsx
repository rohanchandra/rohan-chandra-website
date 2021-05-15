import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { TitleQuery } from "-/graphqlTypes";

const NavStyles = styled.nav`
  margin-top: 3.5rem;
  font-size: 1.2rem;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    /* Nice vertical alignment on mobile screens */
    display: flex;
    align-items: center;
  }

  li {
    margin-right: 1rem;
    display: inline;
  }

  a {
    color: var(--grey);
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5em;
    font-weight: 600;
    text-transform: lowercase;
    transition: background-color 200ms ease-in;
    &:hover {
      background-color: var(--accent-background-color);
    }
    &[aria-current="page"] {
      background-color: var(--accent-background-color);
      color: var(--accent-color);
    }
  }

  #home {
    padding-left: 0;
    background-color: transparent;
    color: var(--accent-color);
    font-family: "IBM Plex Mono", Consolas, Monaco, "Courier New", Courier,
      monospace;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    padding-right: 0;
    margin-right: 1rem;
  }
`;

const Nav: React.FC = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<TitleQuery>(graphql`
    query Title {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <NavStyles>
      <ul>
        <li>
          <Link id="home" to="/">
            {siteMetadata.title}
          </Link>
        </li>

        <li>
          <Link to="/">About</Link>
        </li>

        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Nav;
