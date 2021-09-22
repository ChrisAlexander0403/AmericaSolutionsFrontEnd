import styled from "styled-components";

export const Title = styled.h2`
    margin: 20px 60px 0;
    color: ${props => props.isDark ? '#fff' : '#151b4e'};
    @media screen and (max-width: 768px){
        margin: 30px 30px 20px;
    }
`;

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 160px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-evenly;

    div{
        box-shadow: 5px 5px 5px ${props => props.isDark ? 'rgba(0, 0, 0, .5)' : 'rgba(100, 100, 100, .5)'};
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
        height: auto;
    }
`;

export const EnterpriseContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 80px;
    background: ${props => props.background || '#ffef00'};
    border-radius: 15px;
    cursor: pointer;

    &:hover{
        transform: scale(1.1, 1.1);
    }

    @media screen and (max-width: 768px){
        margin: 10px 0;
        &:first-child{
            margin: 20px 0 10px;
        }
        &:last-child{
            margin: 10px 0 20px;
        }
    }
`;

export const EnterpriseLogo = styled.img`
    width: 150px;
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Text = styled.div`
    width: 300px;
    padding: 10px;
    color: #333;
    text-align: center;
`;

export const ConstructionImage = styled.img`
    width: 300px;
    border-radius: 25px;
`;