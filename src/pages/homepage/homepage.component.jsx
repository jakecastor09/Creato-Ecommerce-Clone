import React from 'react';
import TopPanel from '../../components/top-panel/top-panel.component';
import MainHeader from '../../components/main-header/main-header.component';
import MainSlide from '../../components/main-slide/main-slide.component';
import Showcase from '../../components/showcase/showcase.component';
import FindBikeForm from '../../components/find-bike-form/find-bike-form.component';
import CarouselCategory from '../../components/carousel-category/carousel-category.component';

import { HomePageContainer } from '../homepage/homepage.styles';
const HomePage = () => {
  return (
    <HomePageContainer>
      <TopPanel />
      <MainHeader />
      <MainSlide />
      <Showcase />
      <FindBikeForm />
      <CarouselCategory />
    </HomePageContainer>
  );
};

export default HomePage;
