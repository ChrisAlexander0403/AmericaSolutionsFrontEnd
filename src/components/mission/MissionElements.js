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

export const Subtitle = styled.h2`
    margin: 10px 0;
    font-size: 20px;
    color: ${props => props.isDark ? '#0082cc' : '#151b4e'};
`;

export const Info = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    width: 80%;
    padding: 20px 10px;
    margin: 20px 0;
    text-align: center;
    color: ${props => props.isDark ? '#fff' : '#000'};
    @media screen and (max-width: 1080px){
        width: 90%;
    }

    article{
        padding: 10px 20px;
        @media screen and (max-width: 768px){
            grid-column: 1/-1;
        }
    }

    aside{
        padding: 10px 20px;
        @media screen and (max-width: 768px){
            grid-column: 1/-1;
        }
    }
`;

export const Text = styled.p`
    font-size: 16px;
`;