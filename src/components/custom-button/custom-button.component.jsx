import React from 'react';
import { CustomButtonContainer, TextContainer } from './custom-button.styles';
const CustomButton = ({ children,buttonType }) => (
  <CustomButtonContainer btnOutline={buttonType}>
    <TextContainer>{children}</TextContainer>
  </CustomButtonContainer>
);

export default CustomButton;
