import React from 'react';
import { Tooltip } from '@material-ui/core';
import Text from '../../foundations/Text';

import { AboutMeWrapper, IntroductionCard, SkillsList } from './AboutMe.styled';

import Button from '../Button';

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

const AboutMe = () => (
  <AboutMeWrapper>
    <IntroductionCard>
      <div
        className="imgWrapper"
      >
        <img
        // className="imageCard"
          style={{ width: '100%', objectFit: 'cover', borderRadius: '50%' }}
          alt="pic of me holding a giant book"
          src="/img/me.jpg"
        />
      </div>
      <Text variant="title" tag="h1">
        Gabriel Schultz
      </Text>
      <Text variant="paragraph1" tag="p" align="justify">
        Entusiasta da programação, atuo na área do desenvolvimento front-end.
        Ultimamente tenho estudado desenvolvimento back-end visando desenvolver aplicações
        fullstack em breve.
        <br />
        Professor e também eterno estudante, sempre aprender algo novo é uma regra de vida.
        Principais interesses: matemática, computação, música e relações internacionais.
      </Text>
    </IntroductionCard>
    <a
      href="https://drive.google.com/file/d/1hcKNvQZHD1K_hzCrnNTS7WZh5Muq4tS8/view?usp=sharing"
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: 'none', marginTop: '2rem', width: '100%' }}
    >
      <Button fullWidth>
        <Text variant="paragraph1" tag="span" color="#fff">
          Currículo
        </Text>
      </Button>
    </a>
    <Text variant="subTitle" tag="h3">
      Ferramentas que domino
    </Text>
    <SkillsList>
      {githubProjectsList.map((item) => (
        <Tooltip key={item.title} title={item.title}>
          <img
            alt={item.title}
            src={item.icon}
            width={50}
            height={50}
          />
        </Tooltip>
      ))}
    </SkillsList>
    {/* <a
      target="_blank"
      href="https://drive.google.com/file/d/1hcKNvQZHD1K_hzCrnNTS7WZh5Muq4tS8/view?usp=sharing"
      rel="noreferrer"
      style={{ textDecoration: 'none', marginTop: '2rem', width: '100%' }}
    >
      <Button fullWidth>
        <Text variant="paragraph1" tag="span" color="#fff">
          Resume
        </Text>
      </Button>
    </a> */}
  </AboutMeWrapper>
);

export default AboutMe;
