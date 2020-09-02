import styled from 'styled-components'

export const Listbg = styled.section`
    width: 100vw;
    height: 100vh;
    background: var(--color-grey-2);
    padding-bottom: 5.0rem;
`;

export const Listcontent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 700px){
        display: grid;
        grid-template-columns: 2fr 2fr;
        grid-gap: 1.5rem;
    }
    @media (min-width: 1200px){
        grid-template-columns: 2fr 2fr 2fr;
    }
`;
