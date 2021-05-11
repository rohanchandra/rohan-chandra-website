import { skillCategories } from "../../data/about-me";
import React, { useState } from "react";
import styled from "styled-components";
import SkillList from "./SkillList";
import SkillHeader from "./SkillHeader";

const SkillsStyles = styled.div`
  margin: 2rem 0;
  & > * {
    display: inline-block;
    width: 100%;
  }
`;

const Skills: React.FC = () => {
  const [selectedIndex, setIndex] = useState(0);
  const skill = skillCategories[selectedIndex];

  return (
    <SkillsStyles>
      <SkillHeader
        categories={skillCategories}
        selectedIndex={selectedIndex}
        onClick={setIndex}
      />
      <SkillList key={skill.name} {...skill} />
    </SkillsStyles>
  );
};

export default Skills;
