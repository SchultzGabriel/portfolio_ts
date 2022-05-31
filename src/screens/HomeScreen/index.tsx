/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled, { css } from 'styled-components';
import Text from '../../components/foundations/Text';

import PageWrapper from '../../components/layout/PageWrapper';

import breakpointMedia from '../../theme/utils/breakpointMedia';

const IntroductionCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 75vh;
  ${breakpointMedia({
    md: css`
    width:50%;
    `,
  })}
`;

const Home = () => (
  <PageWrapper>
    <IntroductionCard>
      <Text variant="title" tag="h1">
        Hello, world! I'm Gabriel.
      </Text>
      <Text variant="subTitle" tag="h3" align="justify">
        Brazilian software engineer, currently working as a ReactJS developer.
      </Text>
    </IntroductionCard>
  </PageWrapper>
);

export default Home;
