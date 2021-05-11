import styled from "styled-components";

export const Button = styled.a`
  all: unset;
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
  &[aria-current="page"],
  &[data-active="true"],
  &[aria-selected="true"] {
    background-color: var(--accent-background-color);
    color: var(--accent-color);
  }
`;
