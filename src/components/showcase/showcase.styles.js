import styled from 'styled-components';

export const ShowcaseContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  position: relative;
`;

export const ImageContainer = styled.img`
  transform: translate(10rem, 2rem);
  position: relative;
  z-index: 2;
`;

export const BackgroundContainer = styled.img`
  z-index: 1;
  position: absolute;
  top: 19.8rem;
  left: 1rem;
  width: 99%;
`;

export const PriceLabelContainer = styled.div`
  position: absolute;
  z-index: 100;
  transform: translate(53.2rem, 2rem);
`;
export const SlideNavigationContainer = styled.div`
  position: absolute;
  left: 8rem;
  transform: translateY(-13rem);
  z-index: 200;
`;

export const SocialMediaListContainer = styled.ul`
  font-size: 1.8rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  height: 40rem;
  overflow: hidden;
  position: absolute;
  align-items: center;
  top: 30.6rem;
  right: 4.7rem;
  z-index: 100;
`;

export const SocialMediaItem = styled.li`
  transform: rotate(90deg);
  margin: 4.5rem 0;
  cursor: pointer;
  a {
    color: rgba(0, 0, 0, 0.5);
  }
`;
