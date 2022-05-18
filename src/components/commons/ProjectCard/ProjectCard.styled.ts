import styled, { css } from 'styled-components';
import breakpointMedia from '../../../theme/utils/breakpointMedia';

export const ProjectsCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.cardBG};
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px ${({ theme }) => theme.cardBG}, 0 4px 6px -4px ${({ theme }) => theme.cardBG};
  ${breakpointMedia({
    md: css`
      flex-direction: row;
      `,
    lg: css`
        width: 75%;
      `,
    xl: css`
        width: 60%;
      `,
  })}
`;

export const ImgWrapper = styled.div`
  display: block;
  width: 100%;
  height: auto;

  .imageCard {
    border-radius: 12px 12px 0 0;
    ${breakpointMedia({
    md: css`
        border-radius: 12px 0 0 12px;
      `,
  })}
  }

  ${breakpointMedia({
    md: css`
      width: 50%;
    `,
  })}
`;
export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 15px;

  .buttonWrapper{
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    ${breakpointMedia({
    md: css`
      flex-direction: row;
      justify-content: center;
    `,
  })}
  }

  ${breakpointMedia({
    md: css`
      width: 50%;
    `,
  })}
`;
