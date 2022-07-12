import styled, { css } from 'styled-components';

import breakpointMedia from '../../../theme/utils/breakpointMedia';

const PageWrapper = styled.div`
width: 100%;
padding: 0 30px;
gap: 50px;
display: flex;
flex-direction: column;
justify-content:center;
align-items: flex-start;

${breakpointMedia({
    md: css`
    flex-direction: row;
    `,
  })}
`;

export default PageWrapper;
