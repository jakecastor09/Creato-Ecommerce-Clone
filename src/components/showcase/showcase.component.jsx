import React from 'react';

import {
  ShowcaseContainer,
  ImageContainer,
  BackgroundContainer,
  Wrapper,
  PriceLabelContainer

} from './showcase.styles';

import sliderData from './showcase.data';
import PriceLabel from '../price-label/price-label.component'


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
            <PriceLabelContainer>
              <PriceLabel className="priceLabel"/>
            </PriceLabelContainer>
            
          </>
        );
      })}

    </ShowcaseContainer>
  );
};

export default Showcase;
