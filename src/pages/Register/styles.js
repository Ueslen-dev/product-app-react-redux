import styled from 'styled-components'

export const Registerbg = styled.section`
    width: 100vw;
    height: 100vh;
    background: var(--color-grey-2);
    padding-bottom: 5.0rem;
`;

export const Registerbox = styled.div`
    background-color: var(--color-white);
    padding: 5.0rem;
    border-radius: 2.0rem;
    margin-top: 4.0rem;
`;

export const Registerform = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 1200px){
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 5.0rem;
    }
`;

export const Registerforminput = styled.div`
    input{
        border: none;
        border-bottom: 1px solid var(--color-grey-3);
        margin-top: 2.0rem;
        width: 100%;
        height: 2.5rem; 
        padding: 2.0rem 1.0rem 2.0rem;
    }
    p{
        font-size: 2.0rem;
        margin-bottom: 3.0rem;
        color: var(--color-green);
    }
    span{
        position: relative;
        top: 4.2rem;
        color: var(--color-grey-3);
        font-size: 1.6rem;
    }
    .inputNotPlaceholder{
        input{
            &:focus{
                margin-top: 3.8rem;
                transition: 0.3s;
            }
        }
    }

    @media (min-width: 1200px){
        p{
            font-size: 2.8rem;
        }
        div:nth-child(2){
            display: grid;
            grid-template-columns: 4fr 1fr;
            grid-gap: 5.0rem;
        }
        div:nth-child(3){
            display: grid;
            grid-template-columns: 1fr 4fr;
            grid-gap: 1.0rem;
            overflow: hidden;
            input{
                width: 67%;
            }   
        }
        div:nth-child(4){
            display: grid;
            grid-template-columns: 2fr 5fr;
            grid-gap: 1.0rem;
            overflow: hidden;
            input{
                width: 25%;
            }
        }
    }
`;

export const Registerformimg = styled.div`
    img{
        display: none;
    }
    button{
        margin-top: 2.0rem;
    }
    @media (min-width: 1200px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
            display: block;
            width: 100%;
            max-width: 300px;
        }
    }
`;