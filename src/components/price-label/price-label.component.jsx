import React from 'react';

import {
  PriceLabelContainer,
  LabelBike,
  ModelContainer,
  PriceContainer,
} from './price-label.styles';

import bikeImg from '../../assets/img/bike-info-slide.jpg';

const PriceLabel = ({ model, price }) => {
  return (
    <PriceLabelContainer>
      <img src={bikeImg} alt="Bike" />
      <LabelBike>
        <ModelContainer>{model}</ModelContainer>
        <PriceContainer>${price}</PriceContainer>
      </LabelBike>
    </PriceLabelContainer>
  );
};

export default PriceLabel;
