import styled from "styled-components";

export const Modal = styled.article`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background: rgba(0,0,0,.75);
    display: none;
    justify-content: center;
    align-items: center;

    &.isOpen{
        display: flex;
    }
`;

export const ModalContainer = styled.div`
    position: relative;
    padding: 1rem;
    min-width: 320px;
    max-width: 540px;
    min-height: 320px;
    max-height: 480px;
    overflow-y: auto;
    background: #ffef00;
    border-radius: 25px;
    @media screen and (max-width: 480px){
        width: 320px;
        min-height: 480px;
        max-height: 600px;
    }
`;

export const Close = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 25px;
    height: 30px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #fff;
    background: #151b4e;
    &:hover{
        background: red;
    }
`;