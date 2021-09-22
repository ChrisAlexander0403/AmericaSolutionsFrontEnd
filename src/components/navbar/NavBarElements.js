import styled, { css } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

const button = css`
    display: none;

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

const link = css`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 65%;
    cursor: pointer;
    border-radius: 4px;
    user-select: none;
`;

export const Nav = styled.nav`
    background: ${props => props.isDark ? '#181818' : '#e7e7e7'};
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 3;
    position: relative;
    box-shadow: 0 5px 15px ${props => props.isDark ? 'rgba(0, 0, 0, .25)' : 'rgba(100, 100, 100, .25)'};
    @media screen and (orientation: landscape) and (max-width: 1080px){
        position: relative;
    }
`;

export const NavLinkLogo = styled(Link)`
    ${link}
    margin: 1rem 0 0 5rem;
    @media screen and (max-width: 768px){
        height: 30%;
        margin: auto 0;
        transform: translateY(5px);
    }
`;

export const Image = styled.img`
    height: 125px;
`;

export const NavLink = styled(Link)`
    ${link}
    font-size: 16px;
    &.active{
        color: #0082cc;
    }

    @media screen and (max-width: 1080px){
        height: 5rem;
    }
`;

export const DivButtons = styled.div`
    color: ${props => props.isDark ? '#fff' : '#151b4e'};
`;

export const Bars = styled(FaBars)`
    ${button}
`;
export const Close = styled(CgClose)`
    ${button}
`;

export const NavMenu = styled.ul`
    background: ${props => props.isDark ? '#181818' : '#e7e7e7'};
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 24px;
    transition: left 0.5s ease;
    list-style: none;

    a{
        color: ${props => props.isDark ? '#fff' : '#151b4e'};
    }
    
    @media screen and (max-width: 1080px){
        position: fixed;
        z-index: 99 ;
        flex-direction: column;
        width: 75%;
        height: calc(100vh - 60px);
        top: 60px;
        left: -100%;
        overflow-y: scroll;
        box-shadow: 5px 15px 15px ${props => props.isDark ? 'rgba(0, 0, 0, .25)' : 'rgba(100, 100, 100, .25)'};
        
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
    margin: 30px;
    @media screen and (max-width: 1080px){
        margin: 1rem 0 5rem 0;
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
    color: #FAF547;
    font-size: 25px;
`;

export const Moon = styled(FaMoon)`
    color: #fff;
    font-size: 20px;
`;