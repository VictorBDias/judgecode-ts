import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .drag-icon {
    margin-top: 16px;
    margin-right: 8px;
  }
`;

export const CellContainer = styled.div`
  display: flex;
`;

export const AbsoluteContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: -45px;
`;
