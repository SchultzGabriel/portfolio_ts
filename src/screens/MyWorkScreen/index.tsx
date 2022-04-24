/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled, { css } from 'styled-components';
// import Link from '../../components/commons/Link';
import Text from '../../components/foundations/Text';

import PageWrapper from '../../components/layout/PageWrapper';

import breakpointMedia from '../../theme/utils/breakpointMedia';

const IntroductionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  /* ${breakpointMedia({
    md: css`
    `,
  })} */
`;

const ProjectsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  /* width:100%; */
  ${breakpointMedia({
    md: css`
    flex-direction: row;
    `,
  })}
`;
const ProjectsCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  /* width:100%; */
  ${breakpointMedia({
    md: css`
    flex-direction: row;
    `,
  })}
`;

const githubProjectsList = [
  {
    title: 'Portfolio',
    links: { github: 'portfolio_ts', prod: '' },
  },
  {
    title: 'React TS Boiler Plate',
    links: { github: 'boilerplate_context', prod: '' },
  },
];

const Home = () => (
  <PageWrapper>
    <IntroductionCard>
      <Text variant="title" tag="h1">
        My work
      </Text>
      <Text variant="subTitle" tag="h3">
        These are the projects I worked at.
      </Text>
    </IntroductionCard>
    <ProjectsWrapper>
      {githubProjectsList.map((item) => (
        <ProjectsCard key={item.title}>{item.title}</ProjectsCard>
      ))}
    </ProjectsWrapper>
  </PageWrapper>
);

export default Home;
