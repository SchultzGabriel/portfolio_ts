import MyWorkScreen from '../src/screens/MyWorkScreen';
import websitePageHOC from '../src/wrappers/websitePage/hoc';

export default websitePageHOC(MyWorkScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'My work',
      prevImage: '',
    },
  },
});
