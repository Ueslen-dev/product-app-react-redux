import styled from 'styled-components'
import bg from '../../assets/img/bg.svg'

export const Loginbg = styled.section`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url(${bg});
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Logincontent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;

    @media (min-width: 700px){
        display: grid;
        grid-template-columns: 3fr 2fr;
        text-align: left;
    }
`;

export const Logininfos = styled.div`
    padding: 1.6rem 0 3.0rem;
    p{
        font-size: 3.0rem;
        color: var(--color-grey);
    }
    h1{
        font-size: 5.0rem;
        color: var(--color-purple);
    }
    @media (min-width: 700px){
        p{
            font-size: 4.0rem;
        }
        h1{
            font-size: 6.5rem;
        }
    }
`;

export const Loginform = styled.form`
    background-color: var(--color-white);
    padding: 5.0rem;
    border-radius: 3.0rem;
    width: 100%;
    -webkit-box-shadow: -26px 14px 48px -23px rgba(128,128,128,1);
    -moz-box-shadow: -26px 14px 48px -23px rgba(128,128,128,1);
    box-shadow: -26px 14px 48px -23px rgba(128,128,128,1);
    p{
        font-size: 1.8rem;
        color: var(--color-green);
    }
    input{
        margin-top: 2.0rem;
        border: none;
        border-bottom: 1px solid var(--color-grey-3);
        height: 3.5rem;
        width: 100%;
    }
    button{
        margin-top: 3.0rem;
    }

    @media (min-width: 700px){
        p{
            font-size: 2.0rem;
            margin-bottom: 6.5rem;
            text-align: center;
        }
        input{
            height: 4.0rem;
            margin-top: 3.5rem;
        }
        button{
            margin-top: 6.5rem;
        }
    }
`;
