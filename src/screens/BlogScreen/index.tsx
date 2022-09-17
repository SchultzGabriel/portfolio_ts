import React from 'react';

import blogPosts from '../../../blog_posts.json';

import PostCard from '../../components/commons/PostCard';
import PageWrapper from '../../components/layout/PageWrapper';

import PostList from './BlogScreen.styled';

const BlogScreen = () => (
  <PageWrapper>
    <PostList>
      {blogPosts.map((item) => (<PostCard key={item.title} item={item} />))}
    </PostList>
  </PageWrapper>
);

export default BlogScreen;
