/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled, { css } from 'styled-components';
// import Link from '../../components/commons/Link';
import Image from 'next/image';
import Text from '../../components/foundations/Text';

import PageWrapper from '../../components/layout/PageWrapper';

import breakpointMedia from '../../theme/utils/breakpointMedia';
import Button from '../../components/commons/Button';

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
  width:100%;
  ${breakpointMedia({
    md: css`
    `,
  })}
`;
const ProjectsCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.cardBG};
  width:100%;
  height: auto;
  border-radius: 12px;
  ${breakpointMedia({
    md: css`
    width:50%;
    flex-direction: row;
    `,
  })}
`;

const ImgWrapper = styled.div`
  display: block;
  width:100%;
  height: auto;
  ${breakpointMedia({
    md: css`
    width:50%;
    `,
  })}
`;
const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width:100%;
  height: auto;
  padding: 15px;
  ${breakpointMedia({
    md: css`
    width:50%;
    `,
  })}
`;

const githubProjectsList = [
  {
    title: 'My website',
    description: "This website's repository",
    links: { github: 'portfolio_ts', prod: '' },
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
    description: 'My personal blog. I used to post on it...',
    links: { github: 'DEVolucionario', prod: 'https://devolucionario.vercel.app/' },
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
      {githubProjectsList.map((item) => (
        <ProjectsCard key={item.title}>
          <ImgWrapper>
            <Image src={item.path} style={{ borderRadius: '12px 0 0 12px' }} width={300 * 16} height={300 * 9} layout="responsive" />
          </ImgWrapper>
          <InfoWrapper>
            <Text variant="subTitle" tag="h3">
              {item.title}
            </Text>
            <Text variant="paragraph2" tag="p">
              {item.description}
            </Text>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
              <a
                target="_blank"
                href={`https://github.com/schultz-gabriel/${item.links.github}`}
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button fullWidth>
                  <Text variant="paragraph1" tag="span" color="#fff">
                    Repository
                  </Text>
                </Button>
              </a>
              {item.links.prod && (
              <a
                target="_blank"
                href={item.links.prod}
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button fullWidth>
                  <Text variant="paragraph1" tag="span" color="#fff">
                    Deploy
                  </Text>
                </Button>
              </a>
              )}
            </div>
          </InfoWrapper>
        </ProjectsCard>
      ))}
    </ProjectsWrapper>
  </PageWrapper>
);

export default Home;
