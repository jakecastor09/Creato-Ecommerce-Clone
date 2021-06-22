import React from 'react';
import TopPanel from '../../components/top-panel/top-panel.component';
import MainHeader from '../../components/main-header/main-header.component';
import MainSlide from '../../components/main-slide/main-slide.component';
import Showcase from '../../components/showcase/showcase.component';
import FindBikeForm from "../../components/find-bike-form/find-bike-form.component"
const HomePage = () => (
  <>
    <TopPanel />
    <MainHeader />
    <MainSlide />
    <Showcase />
    <FindBikeForm/>
  </>
);

export default HomePage;
