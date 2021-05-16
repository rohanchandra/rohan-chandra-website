// @ts-ignore
import data from "../../content/about-me.yaml";

export interface Link {
  href: string;
  title: string;
}

export interface SkillCategory {
  name: string;
  emoji: string;
  isFeatured: boolean;
  skills: Skill[];
}

export interface Skill {
  name: string;
  url: string;
}

export const links: Link[] = data["links"];

export const initialSkillIndex: number = data["initialSkillIndex"];

export const skillCategories: SkillCategory[] = data["skills"];
