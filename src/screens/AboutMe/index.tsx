import React from 'react';
import styled, { css } from 'styled-components';
import { Tooltip } from '@material-ui/core';
import Text from '../../components/foundations/Text';

import PageWrapper from '../../components/layout/PageWrapper';
import SkillsList from './MyWorkScreen.styled';

import breakpointMedia from '../../theme/utils/breakpointMedia';

const IntroductionCard = styled.div`
  margin-top: .67em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${breakpointMedia({
    md: css`
      width: 50%;
`,
  })}
`;

const githubProjectsList = [
  {
    title: 'JavaScript',
    icon: '/icons/js.jpg',
  },
  {
    title: 'TypeScript',
    icon: '/icons/ts.png',
  },
  {
    title: 'React',
    icon: '/icons/react-icon.png',
  },
  {
    title: 'Styled Components',
    icon: '/icons/styledComponents.png',
  },
  {
    title: 'Next.js',
    icon: '/icons/nextjs.png',
  },
  {
    title: 'GraphQL',
    icon: '/icons/graphql-icon.png',
  },
  {
    title: 'Material UI',
    icon: '/icons/materialui.png',
  },
  {
    title: 'Jest',
    icon: '/icons/jest.png',
  },
  {
    title: 'Cypress',
    icon: '/icons/cypress.png',
  },
  {
    title: 'JWT',
    icon: '/icons/jwt.png',
  },
  {
    title: 'NodeJS',
    icon: '/icons/node.png',
  },
  {
    title: 'GIT',
    icon: '/icons/git.png',
  },
  {
    title: 'Linux',
    icon: '/icons/linux.png',
  },
];

const Home = () => (
  <PageWrapper>
    <IntroductionCard>
      <div style={{
        height: '320px', width: '320px', display: 'flex',
      }}
      >
        <img
        // className="imageCard"
          style={{ width: '100%', objectFit: 'cover', borderRadius: '50%' }}
          alt="pic of me holding a giant book"
          src="/img/me.jpg"
        />
      </div>
      <Text variant="title" tag="h1">
        About me
      </Text>
      <Text variant="paragraph1" tag="p" align="justify">
        I'm a programming enthusiast, currently working/studying front-end development.
        Lately, I decided to start my back-end journey, on my way to full-stack.
        <br />
        Studying lover, I'm always learning something new.
        My interests are math, music, and programming (of course).
        <br />
        With a degree in biology, I have participated in some education projects
        and am passionate about teaching those starting out in anything I am already experienced in.
      </Text>
    </IntroductionCard>
    <Text variant="title" tag="h3">
      My skills
    </Text>
    <SkillsList>
      {githubProjectsList.map((item) => (
        <Tooltip key={item.title} title={item.title}>
          <img
        // className="imageCard"
            alt={item.title}
            src={item.icon}
            width={50}
            height={50}
          />
        </Tooltip>
      ))}
    </SkillsList>
  </PageWrapper>
);

export default Home;
