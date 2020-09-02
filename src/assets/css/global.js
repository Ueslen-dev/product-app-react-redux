import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{
        --color-white: #ffff;
        --color-grey: #727272;
        --color-grey-2: #EFEFEF;
        --color-grey-3: #848484;
        --color-purple: #790048;
        --color-green: #C2C375;
        --color-black: #000000;
        --color-green-hover: #939455;
        font-size: 60%;
    }
    #root{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root{
        height: 100vh;
    }
    *, html, body, #root{
        font-family: 'Merriweather', serif;
        overflow-x: hidden;
    }
    body,
    input,
    button,
    textarea{
        font: 500 1.6rem Poppins;
        font-family: 'Merriweather', serif;
    }
    img{
        width: 100%;
    }

    @media (min-width: 700px){
        #root{
          font-size: 62.5%;
        }
    }

`;