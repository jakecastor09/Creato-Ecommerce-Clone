import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import img1 from '../../assets/img bike/categ-1.png';
import img2 from '../../assets/img bike/categ-2.png';
import img3 from '../../assets/img bike/categ-3.png';

import CategoryItem from '../category-item/category-item.component';

import {
  CarouselCategoryContainer,
  Wrapper,
  AngleIcon,
} from './carousel-category.styles';

const CarouselCategory = () => {
  return (
    <CarouselCategoryContainer>
      <div className="container">
        <Wrapper>
          <AngleIcon className="left">
            <FontAwesomeIcon icon={faAngleLeft} size="3x" />
          </AngleIcon>
          <CategoryItem title="Mountain & Road Bikes" img={img1} />
          <CategoryItem title="Mountain & Road Bikes" img={img2} />
          <CategoryItem title="Mountain & Road Bikes" img={img3} />
          <AngleIcon className="right">
            <FontAwesomeIcon icon={faAngleRight} size="3x" />
          </AngleIcon>
        </Wrapper>
      </div>
    </CarouselCategoryContainer>
  );
};

export default CarouselCategory;
