import React from "react";
import styled from "styled-components";
import { Section } from "../common/Section";
import { Reveal } from "../common/Reveal";
import { Tag, TagList } from "../common/Tag";
import { monoLabel } from "../../styles/mixins";
import { skillGroups } from "../../data/skills";

export const Skills: React.FC = () => (
  <Section id="skills" index={5} label="Skills" title="Tools I work with">
    <Grid>
      {skillGroups.map((group, i) => (
        <li key={group.title}>
          <Reveal delay={(i % 3) * 0.06}>
            <Group>
              <GroupTitle>{group.title}</GroupTitle>
              <TagList>
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </TagList>
            </Group>
          </Reveal>
        </li>
      ))}
    </Grid>
  </Section>
);

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  > li > div {
    height: 100%;
  }
`;

const Group = styled.div`
  height: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.surface};
  border: ${({ theme }) => theme.borders.base};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const GroupTitle = styled.h3`
  ${monoLabel}
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }) => theme.spacing.xs};
  border-bottom: ${({ theme }) => theme.borders.thin};
`;

export default Skills;
