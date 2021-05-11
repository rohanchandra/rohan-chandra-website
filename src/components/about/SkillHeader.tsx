import { SkillCategory } from "-/data/about-me";
import React from "react";
import styled from "styled-components";
import { Row } from "../ui/Row";
import { Button as CategoryButton } from "../ui/Button";

const Emoji = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
`;

const Item = styled.li`
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;

  $(CategoryButton) & {
    margin-right: 1rem;
  }
`;

interface SkillHeaderProps {
  categories: SkillCategory[];
  selectedIndex: number;
  onClick: (index: number) => void;
}

const SkillHeader: React.FC<SkillHeaderProps> = ({
  categories,
  onClick,
  selectedIndex,
}) => {
  return (
    <Row aria-controls="skill-list">
      {categories.map((category, index) => (
        <Item
          key={category.name}
          onClick={() => {
            onClick(index);
          }}
        >
          <Emoji>{category.emoji}</Emoji>

          <CategoryButton aria-selected={selectedIndex === index} as="button">
            {category.name}
          </CategoryButton>
        </Item>
      ))}
    </Row>
  );
};

export default SkillHeader;
