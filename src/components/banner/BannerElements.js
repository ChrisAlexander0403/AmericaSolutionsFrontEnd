import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 90vh;
    overflow: hidden;
    
    @media screen and (max-width: 768px){
        height: auto;
    }
`;

export const Image = styled.img`
    width: 80%;
    object-fit: cover;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const Logo = styled.img`
    position: absolute;
    z-index: 2;
    right: 150px;
    top: -50px;
    width: 300px;

    @media screen and (max-width: 1080px){
        right: 100px;
    }

    @media screen and (max-width: 768px){
        width: 150px;
        right: 10px;
        top: -20px;
    }
`;

export const Text = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 80px;
    left: 150px;
    color: #fff;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, .75);
    font-size: 30px;

    @media screen and (max-width: 1080px){
        font-size: 20px;
        left: 120px;
        bottom: 60px;
    }

    @media screen and (max-width: 768px){
        bottom: 50px;
        left: 25px;
        width: 300px;
    }

    @media screen and (max-width: 480px){
        width: 200px;
        font-size: 16px;
    }
`;