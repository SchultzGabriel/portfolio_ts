import React from 'react';

import CardWrapper from './PostCard.styled';
import Text from '../../foundations/Text';
import Link from '../Link';

import { ICard } from './types';

function PostCard({ item }:ICard) {
  return (
    <CardWrapper>
      <Link
        href={`/blog/${item.slug}`}
      >
        <div className="CardContent">
          <div style={{}}>
            <img alt="" src="https://i.imgur.com/SuRhrDh.png" style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
          </div>
          <Text
            variant="subTitle"
            tag="h3"
            align="left"
          >
            {item.title}
          </Text>
          <Text
            variant="paragraph1"
            tag="p"
            color="secondary.main"
            align="justify"
          >
            {item.date}
          </Text>
        </div>
      </Link>
    </CardWrapper>
  );
}

export default PostCard;
