import styled, { css } from 'styled-components';

import breakpointMedia from '../../theme/utils/breakpointMedia';

const SkillsList = styled.ul`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  ${breakpointMedia({
    md: css`
    width: 50%;
    `,
  })}
`;

export default SkillsList;
