import React from 'react';

import {PriceLabelContainer,LabelBike,ModelContainer,PriceContainer} from './price-label.styles';

import bikeImg from "../../assets/img/bike-info-slide.jpg";

const PriceLabel = ()=>{
    return(
        <PriceLabelContainer>
            <img src={bikeImg} alt="Bike" />
            <LabelBike>
                <ModelContainer>Model M-300</ModelContainer>
                <PriceContainer>$1999</PriceContainer>
            </LabelBike>
        </PriceLabelContainer>
    )
}

export default PriceLabel;