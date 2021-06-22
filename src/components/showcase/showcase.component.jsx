import React from 'react';

import {
  ShowcaseContainer,
  ImageContainer,
  BackgroundContainer,
  Wrapper

} from './showcase.styles';

import sliderData from './showcase.data';



const Showcase = () => {
  return (
    <ShowcaseContainer>
      {sliderData.map(data => {
        return (
          <>
          <BackgroundContainer src={data.backgroundImage}></BackgroundContainer>
            <Wrapper>
            <ImageContainer src={data.image} alt={data.model} />
            </Wrapper>

          </>
        );
      })}
    </ShowcaseContainer>
  );
};

export default Showcase;
