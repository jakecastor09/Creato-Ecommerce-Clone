import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import {
  MainHeaderContainer,
  Wrapper,
  ImageContainer,
  NavMenu,
  NavList,
  NavListItem,
} from './main-header.styles';
import logo from '../../assets/img/logo.svg';

const MainHeader = () => (
  <MainHeaderContainer>
    <div className="container">
      <Wrapper>
        <ImageContainer src={logo} alt="logo"></ImageContainer>
        <NavMenu>
          <Router>
            <NavList>
              <NavListItem>
                <Link to="/">
                  Home
                  <span className="angleDownIcon">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </Link>
              </NavListItem>
              <NavListItem>
                <Link to="/services">Services</Link>
              </NavListItem>
              <NavListItem>
                <Link to="/shop">Shop</Link>
              </NavListItem>
              <NavListItem>
                <Link to="/gallery">Gallery</Link>
              </NavListItem>
              <NavListItem>
                <Link to="/pages">
                  Pages{' '}
                  <span className="angleDownIcon">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </Link>
              </NavListItem>
              <NavListItem>
                <Link to="/contacts">Contacts</Link>
              </NavListItem>
            </NavList>
          </Router>
        </NavMenu>
      </Wrapper>
    </div>
  </MainHeaderContainer>
);

export default MainHeader;
