import styled from 'styled-components'

export const Alert = styled.div`
    padding: 3.0rem;
    font-size: 1.6rem;
    color: white;
    text-align: center;
    background-color: ${props => props.errorType === true ? 'red' : 'green' };
`;