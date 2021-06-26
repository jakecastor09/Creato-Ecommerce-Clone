import React, { useState, useEffect } from 'react';
import {
  ShowcaseContainer,
  ImageContainer,
  BackgroundContainer,
  Wrapper,
  PriceLabelContainer,
  SlideNavigationContainer,
  SocialMediaListContainer,
  SocialMediaItem,
} from './showcase.styles';

import sliderData from './showcase.data';
import PriceLabel from '../price-label/price-label.component';
import SlideNavigation from '../slide-navigation/slide-navigation.component';

const Showcase = () => {
  const [page, setPage] = useState(0);

  const data = sliderData[page];
  return (
    <ShowcaseContainer>
      <React.Fragment>
        <BackgroundContainer src={data.backgroundImage}></BackgroundContainer>
        <Wrapper>
          <ImageContainer src={data.image} alt={data.model} />
        </Wrapper>
        <PriceLabelContainer>
          <PriceLabel
            className="priceLabel"
            model={data.model}
            price={data.price}
          />
        </PriceLabelContainer>
        <SlideNavigationContainer>
          <SlideNavigation setPage={setPage} page={page} />
        </SlideNavigationContainer>
        <SocialMediaListContainer>
          <SocialMediaItem>
            <a href="www.facebook.com">Facebook</a>
          </SocialMediaItem>
          <SocialMediaItem>
            <a href="www.twitter.com">Twitter</a>
          </SocialMediaItem>
          <SocialMediaItem>
            <a href="www.instagram.com">Instagram</a>
          </SocialMediaItem>
        </SocialMediaListContainer>
      </React.Fragment>
    </ShowcaseContainer>
  );
};

export default Showcase;
