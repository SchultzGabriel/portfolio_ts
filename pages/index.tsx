import React from 'react';
import HomeScreen from '../src/screens/HomeScreen';
// import AbotMe from '../src/screens/AboutMe';
// import MyWorkScreen from '../src/screens/MyWorkScreen';

import websitePageHOC from '../src/wrappers/websitePage/hoc';

const screen = () => (
  <HomeScreen />
);

export default websitePageHOC(screen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Início',
      prevImage: '',
    },
  },
});
