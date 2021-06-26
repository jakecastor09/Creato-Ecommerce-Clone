import styled, { css } from 'styled-components';

const activeStyle = css`
  transform: scale(1.7);
  color: #192330;
  font-weight: bold;

  ::before {
    content: '';
    width: 2rem;
    height: 0.1rem;
    background-color: #ffd910;
    position: absolute;
    transform: translate(2.5rem, 1rem);
    outline: none;
  }
`;

export const SlideNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 32rem;
  align-items: center;
  position: relative;

  span > * {
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;

export const NumberContainer = styled.button`
  font-size: 1.85rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.2);
  transition: 0.35s ease-in-out;
  outline: none;

  :hover {
    color: rgba(0, 0, 0, 0.8);
  }

  :focus {
    ${activeStyle}
  }
`;
