/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled, { css } from 'styled-components';
import Text from '../../components/foundations/Text';
import Button from '../../components/commons/Button';

import PageWrapper from '../../components/layout/PageWrapper';

import breakpointMedia from '../../theme/utils/breakpointMedia';

const IntroductionCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 75vh;
  /* ${breakpointMedia({
    md: css`
    `,
  })} */
`;

const LinksCard = styled.ul`
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

const linksList = [
  {
    title: 'My Work',
    link: '/work',
  },
  {
    title: 'About Me',
    link: '/about',
  },
];

const Home = () => (
  <PageWrapper>
    <IntroductionCard>
      <Text variant="title" tag="h1">
        Hello, world! I'm Gabriel.
      </Text>
      <Text variant="subTitle" tag="h3">
        I build stuff for the internet.
      </Text>
      <LinksCard>
        {linksList.map((item) => (
          <Button key={item.title} href={item.link}>
            <Text variant="paragraph1" tag="span" color="#fff">
              {item.title}
            </Text>
          </Button>
        ))}
      </LinksCard>
    </IntroductionCard>
  </PageWrapper>
);

export default Home;
