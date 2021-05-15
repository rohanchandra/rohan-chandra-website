import { Skill } from "../../data/about-me";
import React from "react";
import styled from "styled-components";
import { Row } from "../ui/Row";
import ExternalLink from "../ExternalLink";

const Item = styled.li`
  padding-right: 1rem;
  padding-top: 0.25rem;

  a {
    color: var(--grey);
    text-decoration-color: #ffffff4d;
  }
`;

interface SkillListProps {
  skills: Skill[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  return (
    <Row id="skill-list">
      {skills.map((skill) => (
        <Item key={skill.name}>
          <ExternalLink href={skill.url}>{skill.name}</ExternalLink>
        </Item>
      ))}
    </Row>
  );
};

export default SkillList;
