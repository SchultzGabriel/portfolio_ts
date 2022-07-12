import styled, { css } from 'styled-components';

import breakpointMedia from '../../../theme/utils/breakpointMedia';

const AboutMeWrapper = styled.aside`
width: 100%;
padding: 0 30px;
display: flex;
gap: 20px;
flex-direction: column;
background-color: ${({ theme }) => theme.cardBG};
border-radius: 12px;
justify-content:center;
align-items: center;
${breakpointMedia({
    md: css`
    width: 30%;
    padding: 30px;
    `,
  })}
`;

const IntroductionCard = styled.div`
  margin-top: .67em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${breakpointMedia({
    md: css`
      /* width: 50%; */
      /* padding: 0 30px; */
`,
  })}

  .imgWrapper{
    width: 300px;
    height: 300px;
    display: flex;
  }
`;

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
    /* width: 50%; */
    `,
  })}
`;

export { AboutMeWrapper, IntroductionCard, SkillsList };
