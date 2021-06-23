import styled from 'styled-components';

const mainColor = '#ffd910';
const subColor = '#192330';

export const PriceLabelContainer = styled.div`
    width:28rem;
    height:8.9rem;
    display:Flex;
    box-shadow:0 .5rem 2rem .1rem rgba(0,0,0,.2);
`;

export const LabelBike = styled.div`
    width:100%;
    padding:1.5rem;
    transform: translateX(2rem);
    
    
`;
export const ModelContainer = styled.h1`
    font-size:1.7rem;
    text-transform: uppercase;
    color:${subColor};
   
`;
export const PriceContainer = styled.span`
    font-family: "Teko",sans-serif;
    font-size:3.5rem;
    font-weight: bold;
    color:${mainColor};

`;
