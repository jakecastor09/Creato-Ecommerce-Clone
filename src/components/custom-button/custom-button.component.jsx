import React from 'react';
import { CustomButtonContainer, TextContainer } from './custom-button.styles';
const CustomButton = ({ children,buttonType,width,height }) => (
  <CustomButtonContainer width={width} height={height} btnOutline={buttonType}>
    <TextContainer >{children}</TextContainer>
  </CustomButtonContainer>
);

export default CustomButton;
