import React from 'react';

import {
  MainSlideContainer,
  Wrapper,
  TitleContainer,
  InfoContainer,
  Paragraph,
} from './main-slide.styles';

import CustomButton from '../custom-button/custom-button.component';

const MainSlide = () => (
  <>
    <MainSlideContainer>
      <div className="container">
        <Wrapper>
          <InfoContainer>
            <TitleContainer>Best bikes for you</TitleContainer>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              consectetur sint iure id expedita saepe.
            </Paragraph>
            <CustomButton buttonType="outline">Buy Now</CustomButton>
          </InfoContainer>
        </Wrapper>
      </div>
    </MainSlideContainer>
  </>
);

export default MainSlide;
