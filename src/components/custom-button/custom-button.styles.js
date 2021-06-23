import styled from 'styled-components';
const mainColor = '#ffd910';
export const CustomButtonContainer = styled.button`
  font-family: 'Roboto Condensed', sans-serif;
  display: inline-block;
  padding: 1.3rem 3rem;
  font-size: 1.6rem;
  transition: 0.35s ease;
  font-weight: 600;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  background-color: ${props => props.btnOutline && '#ffff'};
  border: 2px solid ${props => props.btnOutline && mainColor};
  cursor: pointer;
  position: relative;
  height:${(props)=> props.height || '4.8rem'};
  width:${(props) => props.width || "" };

  :before {
    content: '';
    background-color: ${mainColor};
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.2s cubic-bezier(0.32, 0.87, 0.41, 0.96) 0.1s;
    opacity: 0;
  }

  :hover:before {
    opacity: 1;
    width: 100%;
  }
`;

export const TextContainer = styled.span`
  display: inline;
  color: #192330;
  position: relative;
  z-index: 1;
`;
