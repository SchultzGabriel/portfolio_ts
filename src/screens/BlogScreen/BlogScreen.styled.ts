import styled, { css } from 'styled-components';
import breakpointMedia from '../../theme/utils/breakpointMedia';

const PostList = styled.ul`
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
  
  ${breakpointMedia({
    md: css`
    flex-direction: row;
    padding: 0 10%;
    `,
  })}
`;

export default PostList;
