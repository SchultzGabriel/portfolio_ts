/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

import MyWork from '../../components/commons/MyWork';
import AboutMe from '../../components/commons/AboutMe';

import PageWrapper from '../../components/layout/PageWrapper';

const Home = () => (
  <PageWrapper>
    <AboutMe />
    <MyWork />
  </PageWrapper>
);

export default Home;
