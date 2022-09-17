import styled, { css } from 'styled-components';
import breakpointMedia from '../../theme/utils/breakpointMedia';

const PostList = styled.ul`
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10%;
  width: 100%;
  gap: 2rem;
  
  ${breakpointMedia({
    md: css`
    flex-direction: row;
    `,
  })}
`;

export default PostList;
