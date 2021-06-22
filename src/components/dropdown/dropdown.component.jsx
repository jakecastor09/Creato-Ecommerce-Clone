import React from 'react';

import {DropDownContainer} from './dropdown.styles'
const Dropdown = ({labelValue,allValue}) =>(
    <DropDownContainer>
         <label>{labelValue}</label>
          <select name="form">
          {allValue.map(value => {
                return <option value={value.split(" ").join("")}>{value}</option>
          })}
             
           
          </select>
    </DropDownContainer>
)
export default Dropdown;