import styled, { css } from 'styled-components';
import breakpointMedia from '../../../theme/utils/breakpointMedia';

export const ProjectsCard = styled.li`
  background-color: ${({ theme }) => theme.cardBG};
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px ${({ theme }) => theme.cardBG}, 0 4px 6px -4px ${({ theme }) => theme.cardBG};
  list-style: none;

  &:hover,
  &:focus {
    transform: scale(1.02)
  }
`;

export const LinkWraper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;


  ${breakpointMedia({
    md: css`
      flex-direction: row;
      align-items: center;
      `,
  })}
`;

export const ImgWrapper = styled.div`
  display: block;
  width: auto;
  height: 100%;
  flex-grow: 1;
  width: fit-content;


  .image {
    border-radius: 12px 12px 0 0;
    height: auto;
    width:100%;
    ${breakpointMedia({
    md: css`
        width:250px;
        height: 100%;
        border-radius: 12px 0 0 12px;
        `,

  })}
  }

  ${breakpointMedia({
    md: css`
      margin-right: auto;
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
  
  .infoText{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  
  .buttonWrapper{
    display: none;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    ${breakpointMedia({
    md: css`
      justify-content: center;
      width: 30%;
      `,
  })}
  }
  
  ${breakpointMedia({
    md: css`
      width: 70%;
      justify-content: space-between;
      flex-direction: row;
      `,

  })}
`;
