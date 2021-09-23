import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 70vh;
    overflow: hidden;
    
    @media screen and (max-width: 768px){
        height: auto;
    }
`;

export const Image = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: 0 70%;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

export const Logo = styled.img`
    position: absolute;
    z-index: 2;
    right: calc(50vw - 250px);
    top: -40px;
    width: 500px;

    @media screen and (max-width: 768px){
        top: -30px;
        width: 400px;
        right: calc(50vw - 200px);
    }

    @media screen and (max-width: 480px){
        width: 300px;
        top: -20px;
        right: calc(50vw - 150px)
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
        width: 400px;
    }

    @media screen and (max-width: 480px){
        bottom: 10px;
        width: 300px;
        font-size: 16px;
    }
`;