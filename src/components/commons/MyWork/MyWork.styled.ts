import styled, { css } from 'styled-components';

import breakpointMedia from '../../../theme/utils/breakpointMedia';

const ProjectsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  margin: 0;
  ${breakpointMedia({
    md: css`
    width: 70%;
    `,
  })}
`;

export default ProjectsWrapper;
