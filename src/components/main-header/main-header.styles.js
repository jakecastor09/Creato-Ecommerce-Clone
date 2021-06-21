import styled from 'styled-components';

const mainColor = '#ffd910';

export const MainHeaderContainer = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
`;

export const ImageContainer = styled.img``;

export const NavMenu = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  font-size: 1.4rem;
  text-transform: uppercase;
`;

export const NavListItem = styled.li`
  position: relative;
  margin-right: 2.8rem;
  .angleDownIcon {
    color: #9ca4ab;
    font-size: 1rem;
    font-weight: 100;
    & > * {
      transform: translateX(0.5rem);
    }
  }

  &:hover > a,
  &:hover .angleDownIcon {
    color: ${mainColor};
    transition: 0.35s ease;
  }

  & a::before {
    content: '';
    height: 4px;
    width: 0%;
    position: absolute;
    top: -32px;
    left: -5px;
    background-color: ${mainColor};
    opacity: 0;
    transition: 0.35s ease;
  }

  & > a:hover:before {
    opacity: 1;
    width: 120%;
  }
`;
