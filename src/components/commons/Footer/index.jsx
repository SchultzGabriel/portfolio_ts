import React from 'react';
import styled from 'styled-components';

import GithubIcon from '../../../../public/icons/github';
import LinkedinIcon from '../../../../public/icons/linkedin';
import TwitterIcon from '../../../../public/icons/twitter';

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 28px;
  padding-left: 28px;
  gap: 2rem;
`;

export default ({ color, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <FooterWrapper {...rest}>
    <a
      target="_blank"
      href="https://github.com/schultz-gabriel"
      rel="noreferrer"
      style={{ textDecoration: 'none', marginTop: '2rem' }}
    >
      <GithubIcon color={color} />
    </a>
    <a
      target="_blank"
      href="https://www.linkedin.com/in/gabriel-bridi-schultz/"
      rel="noreferrer"
      style={{ textDecoration: 'none', marginTop: '2rem' }}
    >
      <LinkedinIcon color={color} />
    </a>
    <a
      target="_blank"
      href="https://twitter.com/GabrielBridi1"
      rel="noreferrer"
      style={{ textDecoration: 'none', marginTop: '2rem' }}
    >
      <TwitterIcon color={color} />
    </a>
  </FooterWrapper>
);
