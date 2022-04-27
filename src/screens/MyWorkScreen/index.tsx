import React from 'react';
import styled, { css } from 'styled-components';
import Text from '../../components/foundations/Text';

import PageWrapper from '../../components/layout/PageWrapper';
import ProjectCard from '../../components/commons/ProjectCard';
import ProjectsWrapper from './MyWorkScreen.styled';

import breakpointMedia from '../../theme/utils/breakpointMedia';

const IntroductionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* ${breakpointMedia({
    md: css``,
  })} */
`;

const githubProjectsList = [
  {
    title: 'My website',
    description: "This website's repository",
    links: { github: 'portfolio_ts', prod: '/' },
    path: '/img/portfolio_ts.png',
  },
  {
    title: 'Instalura',
    description: 'My first React project.',
    links: { github: 'instalura', prod: 'https://instalura-sepia.vercel.app/' },
    path: '/img/instalura.png',
  },
  {
    title: 'DEVolucionário',
    description: 'My personal blog (pt-BR). I used to post on it...',
    links: {
      github: 'DEVolucionario',
      prod: 'https://devolucionario.vercel.app/',
    },
    path: '/img/DEVolucionario.png',
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
      {githubProjectsList.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </ProjectsWrapper>
  </PageWrapper>
);

export default Home;
