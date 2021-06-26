import React from 'react';

import img1 from '../../assets/img bike/categ-2.png';

import CategoryItem from '../category-item/category-item.component';

import { CarouselCategoryContainer, Wrapper } from './carousel-category.styles';
const CarouselCategory = () => {
  return (
    <CarouselCategoryContainer>
      <div className="container">
        <Wrapper>
          <CategoryItem title="Mountain & Road Bikes" img={img1} />
          <CategoryItem title="Bicycle Spare Parts" img={img1} />
          <CategoryItem title="Accessories & Clothing" img={img1} />
        </Wrapper>
      </div>
    </CarouselCategoryContainer>
  );
};

export default CarouselCategory;
