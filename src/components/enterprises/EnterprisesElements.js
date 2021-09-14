import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    background: #fff;
    align-items: center;
    justify-content: space-evenly;

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