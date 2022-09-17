import styled, { css } from 'styled-components';
import breakpointMedia from '../../../theme/utils/breakpointMedia';

const CardWrapper = styled.li`
    list-style: none;
    width: 100%;
    
    .CardContent {
    min-height: 250px;
    padding: 10px;
    background-color: ${({ theme }) => theme.cardBG};
    border-radius: 10px;
    transition: ease-in-out 200ms;

    &:hover {
        transform: scale(1.05);
      }
  }

  ${breakpointMedia({
    md: css`
    width: 47%;
    `,
    lg: css`
    width: 30%;
    `,
  })}

`;

export default CardWrapper;
