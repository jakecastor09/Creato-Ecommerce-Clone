import styled from 'styled-components';

export const CarouselCategoryContainer = styled.div``;

export const Wrapper = styled.div`
  margin: 40rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  position: relative;
`;

export const AngleIcon = styled.span`
  position: absolute;
  color: #192330;
  top: 12.5rem;
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  border: 2px solid #ffd910;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  &.left {
    left: -8rem;
  }

  &.right {
    right: -8rem;
  }
`;
