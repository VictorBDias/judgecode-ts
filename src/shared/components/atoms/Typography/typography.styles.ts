import styled, { css } from 'styled-components';
import { TypographyProps } from './typography.interfaces';

export const Paragraph = styled.p<TypographyProps>`
  margin: 0;

  ${(props) => {
    if (props.maxLines) {
      return css`
        word-break: break-word;

        @supports (-webkit-line-clamp: ${props.maxLines}) {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: initial;
          display: -webkit-box;
          -webkit-line-clamp: ${props.maxLines};
          -webkit-box-orient: vertical;
        }
      `;
    }
  }}

  ${(props) => {
    switch (props.variant) {
      case 'title':
        return css`
          font-size: 24px;
          color: #141414;
          font-weight: bold;
        `;
      case 'whiteTitle':
        return css`
          font-size: 32px;
          color: #fff;
          font-weight: bold;
        `;

      case 'subTitle':
        return css`
          font-size: 16px;
          color: #141414;
          font-weight: bold;
        `;

      case 'whiteSubTitle':
        return css`
          font-size: 16px;
          color: #fff;
          font-weight: bold;
        `;
      case 'secondary':
        return css`
           font-size: 16px;
           color: #E190F0;
           font-weight: regular;
        `;
      case 'error':
        return css`
                  font-size: 16px;
                  color: #cd3248;
                  font-weight: regular;
                `;
      case 'regular':
        return css`
          font-size: 16px;
          color: #141414;
          font-weight: regular;
        `;
      case 'whiteRegular':
        return css`
          font-size: 16px;
          color: #fff;
          font-weight: regular;
        `;

      default:
        break;
    }
  }}
`;
