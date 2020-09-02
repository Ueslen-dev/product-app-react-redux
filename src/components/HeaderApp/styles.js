import styled from 'styled-components'

export const Header = styled.header`
    display: flex; 
    align-items:center;
    justify-content: center;
    flex-direction: column;
    width:100%;
    text-align: center;
    padding: 1.6rem 0 1.6rem;
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--color-purple);

    @media (min-width: 700px){
        flex-direction: row;
        justify-content: space-between;
        font-size: 2.0rem;
    }

`;

export const Navigator = styled.div`
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
      
    a{
        text-decoration: none;
        color: var(--color-purple);
        margin-top: 1.6rem;
        padding: 2.0rem;
        margin-left: 1.8rem;
        border-radius: 1.6rem;
        transition: 0.3s all;     
               
        &:hover{
            background-color: var(--color-purple);
            color: var(--color-white);
        }
    }
    

    @media (min-width:700px){
        margin-top: 0;
        flex-direction: row;
        a{
            display: inline-block;
            margin-top: 0;
        }
    }
`;