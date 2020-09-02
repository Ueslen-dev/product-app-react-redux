import styled from 'styled-components'

export const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 2.0rem;
    font-size: 2.0rem;
    color: white;
    font-weight: bold;
    height: 5.0rem;
    background-color: var(--color-green);
    color: var(--color-white);
    transition: 0.5s all;
    cursor: pointer;
    &:hover{
        background-color: var(--color-green-hover);
    }
`;