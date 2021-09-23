import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 40px 0;
`;

export const Title = styled.h1`
    color: ${props => props.isDark ? '#0082cc' : '#151b4e'};
`;

export const Info = styled.div`
    width: 60%;
    padding: 20px 10px;
    color: ${props => props.isDark ? '#fff' : '#000'};
    @media screen and (max-width: 768px){
        width: 80%;
    }
`;

export const Text = styled.p`

`;