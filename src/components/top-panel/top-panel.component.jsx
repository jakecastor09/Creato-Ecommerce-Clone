import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faHeart,
  faUser,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

import {
  TopPanelContainer,
  Wrapper,
  Contact,
  PhoneNumber,
  Email,
  LeftIconsContainer,
  ListIcon,
  CircleCount,
} from './top-panel.styles.js';

const TopPanelCover = () => {
  return (
    <TopPanelContainer>
      <div className="container">
        <Wrapper>
          <Contact>
            <PhoneNumber>
              <span className="contact__icons">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>+9123 456 87</span>
            </PhoneNumber>
            <div className="top-panel__email">
              <span className="contact__icons">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <Email>creto@gmail.com</Email>
            </div>
          </Contact>
          <LeftIconsContainer>
            <ListIcon>
              <CircleCount>6</CircleCount>
              <FontAwesomeIcon icon={faHeart} />
            </ListIcon>
            <ListIcon>
              <FontAwesomeIcon icon={faUser} />
            </ListIcon>
            <ListIcon>
              <FontAwesomeIcon icon={faShoppingCart} />
            </ListIcon>
          </LeftIconsContainer>
        </Wrapper>
      </div>
    </TopPanelContainer>
  );
};

export default TopPanelCover;
