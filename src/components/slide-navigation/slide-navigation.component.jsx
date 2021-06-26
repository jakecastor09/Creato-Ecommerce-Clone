import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import {
  SlideNavigationContainer,
  NumberContainer,
} from './slide-navigation.styles';
const SlideNavigation = ({ setPage, page }) => {
  const onClickHandler = num => {
    setPage(num);
  };
  const onClickPreviousBtn = () => {
    if (page === 0) {
      setPage(4);
    } else {
      setPage(page - 1);
    }
  };

  const onClickNextBtn = () => {
    if (page === 4) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };
  return (
    <SlideNavigationContainer>
      <span onClick={onClickPreviousBtn}>
        <FontAwesomeIcon icon={faAngleUp} size="2x" />
      </span>
      <NumberContainer onClick={() => onClickHandler(0)}>01</NumberContainer>
      <NumberContainer onClick={() => onClickHandler(1)}>02</NumberContainer>
      <NumberContainer onClick={() => onClickHandler(2)}>03</NumberContainer>
      <NumberContainer onClick={() => onClickHandler(3)}>04</NumberContainer>
      <NumberContainer onClick={() => onClickHandler(4)}>05</NumberContainer>
      <span onClick={onClickNextBtn}>
        <FontAwesomeIcon icon={faAngleDown} size="2x" />
      </span>
    </SlideNavigationContainer>
  );
};

export default SlideNavigation;
