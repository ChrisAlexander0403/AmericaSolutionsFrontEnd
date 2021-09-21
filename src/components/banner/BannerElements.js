import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
    overflow: hidden;
    @media screen and (max-width: 768px){
        height: auto;
    }
`;

export const Image = styled.img`
    width: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px){
        transform: none;
    }
`;

export const Logo = styled.img`
    position: absolute;
    z-index: 2;
    right: 50px;
    top: -20px;
    width: 300px;
    @media screen and (max-width: 768px){
        width: 150px;
        right: 10px;
    }
`;

export const Text = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 80px;
    left: 50px;
    color: #fff;
    font-size: 25px;
    @media screen and (max-width: 768px){
        bottom: 50px;
        left: 25px;
        font-size: 20px;
        width: 300px;
    }
`;