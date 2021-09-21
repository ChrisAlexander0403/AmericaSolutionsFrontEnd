import styled, { css } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

const button = css`
    display: none;
    color: #fff;

    @media screen and (max-width: 1080px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 55%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const Nav = styled.nav`
    background: #151b4e;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 3;
    position: relative;
    @media screen and (orientation: landscape) and (max-width: 1080px){
        position: relative;
    }
`;

export const NavLinkLogo = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 65%;
    cursor: pointer;
    border-radius: 4px;
    margin: 1rem 0 0 5rem;
    user-select: none;
    @media screen and (max-width: 768px){
        height: 30%;
        margin: auto 0;
    }
`;

export const Image = styled.img`
    height: 125px;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 65%;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    user-select: none;
    &.active{
        color: #fff;
    }

    @media screen and (max-width: 1080px){
        height: 5rem;
    }
`;

export const Bars = styled(FaBars)`
    ${button}
`;
export const Close = styled(CgClose)`
    ${button}
`;

export const NavMenu = styled.ul`
    background: #151b4e;
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 24px;
    z-index: 999;
    transition: left 0.5s ease;
    list-style: none;

    @media screen and (max-width: 1080px){
        flex-direction: column;
        width: 75%;
        height: calc(100vh - 60px);
        position: fixed;
        top: 60px;
        left: -100%;
        overflow-y: scroll;
        &.active{
            left: 0;
        }
    }

    @media screen and (orientation: landscape) and (max-width: 1080px){
        height: calc(85vh - 60px);
        width: 45%;
        padding-bottom: 20px;
    }
`;

export const ThemeDiv = styled.div`
    width: 30px; 
    cursor: pointer;
    margin-left: 30px;
    @media screen and (max-width: 1080px){
        margin-left: 0;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
`;

export const NavBtnLink = styled.button`
    height: 100%;
    background: #000;
    padding: 29px 22px;
    color: #ffef00;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    text-shadow: 0 0 20px #ffef00;
    font-size: 16px;
    &:hover{
        transition: all 0.5s ease-in-out;
        background: #ffef00;
        color: #3d3d3d;
    }

    @media screen and (max-width: 768px){
        height: 5rem;
        font-size: 1.3rem;
        width: 100%;
        margin-left: 0;
        text-align: center;
    }
`;

export const Sun = styled(FaSun)`
    color: #fff;
    font-size: 25px;
`;

export const Moon = styled(FaMoon)`
    color: #fff;
    font-size: 20px;
`;