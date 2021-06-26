import React from 'react';

import {
  CategoryItemContainer,
  CategoryInfo,
  TitleContainer,
  ImageContainer,
} from './category-item.styles';

import CustomButton from '../custom-button/custom-button.component';

const CategoryItem = ({ title, img }) => {
  return (
    <CategoryItemContainer>
      <CategoryInfo>
        <TitleContainer>{title}</TitleContainer>
        <CustomButton buttonType="outline">View More</CustomButton>
      </CategoryInfo>
      <ImageContainer src={img} alt="Image" />
    </CategoryItemContainer>
  );
};

export default CategoryItem;
