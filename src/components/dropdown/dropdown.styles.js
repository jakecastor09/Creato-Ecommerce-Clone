import styled from 'styled-components'

const primaryColor = '#65696C';
const secondaryColor = '#9ca3ab';

export const DropDownContainer = styled.li`
    
        display:flex;
        flex-direction: column;
        width:28rem;
       

        & > select{
            padding:1.3rem 2.5rem;
            font-size:1.8rem;
            font-weight: 600;
            color:${primaryColor};
            border: .05px solid ${secondaryColor};
            
            &:hover{
                border: .05px solid #ffd910;
            }
            &:focus{
                outline:none;
            }
            & > option{
            font-size:1.6rem;
            font-family: 'Roboto Condensed', sans-serif;
        
        }
            
        }
        
        &>label{
            font-size:1.8rem;
            color:${secondaryColor};
            margin-bottom:0.4rem;
        }

    

    
`;
