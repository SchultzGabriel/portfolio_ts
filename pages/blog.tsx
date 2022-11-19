// import HomeScreen from '../src/screens/HomeScreen';
import BlogScreen from '../src/screens/BlogScreen';
import websitePageHOC from '../src/wrappers/websitePage/hoc';

export default websitePageHOC(BlogScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Blog',
      prevImage: '',
    },
  },
});
