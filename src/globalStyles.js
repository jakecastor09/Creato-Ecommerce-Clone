import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        padding:0;
        margin:0;
        box-sizing:inherit;
    }

    html{
        box-sizing:border-box;
        font-size:62.5%;
    }
    body{
        background-color: #fff;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 400;
        ${'' /* font-family: 'Teko', sans-serif; */}
    }

    a{
        text-decoration:none;
        color:#65696C;
    }
    li{
        list-style: none;
    }

    .container{
        max-width:1328px;
        overflow: hidden;
        margin:0 auto;
      
    }

`;

export default GlobalStyles;
