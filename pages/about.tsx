import aboutme from '../src/screens/AboutMe';
import websitePageHOC from '../src/wrappers/websitePage/hoc';

export default websitePageHOC(aboutme, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'About me',
      prevImage: '',
    },
  },
});
