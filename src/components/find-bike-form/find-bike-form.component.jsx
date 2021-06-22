import React from 'react';

import {FindBikeFormContainer,Wrapper,TitleContainer,FormWrap} from './find-bike-form.styles'
import Dropdown from '../dropdown/dropdown.component';
import CustomButton from "../custom-button/custom-button.component"
const FindBikeForm = () =>{
    const value1 = ["Mountain Bike","Hybrid/Comfort Bike","Cyclocross Bike",'BMX/Trick Bike',"Road Bike","Track Bike"];
    
    return(
    <FindBikeFormContainer>
    <div className="container">
        <Wrapper>
        <TitleContainer>Find the bike</TitleContainer>
        <FormWrap>
            <Dropdown labelValue="Type" allValue={value1}/>
            <Dropdown labelValue="Type" allValue={value1}/>
            <Dropdown labelValue="Type" allValue={value1}/>
            <CustomButton buttonType="outline">Search</CustomButton>
            
        </FormWrap>
        </Wrapper>
    </div>
    </FindBikeFormContainer>
)}

export default FindBikeForm;