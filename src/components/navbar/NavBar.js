import React, { useState, useContext, useEffect } from 'react';

import { Nav, NavLinkLogo, NavLink, Bars, Close, NavMenu, Image, Sun, Moon, ThemeDiv, DivButtons } from './NavBarElements';
import { ThemeContext } from '../../contexts/ThemeContext';
import useScroll from '../../hooks/useScroll';

import LogoBlanco from '../../assets/img/logos/AmericaSolutions/LogoBlanco.png';
import MedioLogo from '../../assets/img/logos/AmericaSolutions/MedioLogo.png';

export default function NavBar() {

    const [click, setClick] = useState(false);

    const [disableScroll, enableScroll] = useScroll();

    const closeMobileMenu = () => setClick(false);

    const { isDark, dispatch } = useContext(ThemeContext);

    useEffect(() => {
        if(click){
            disableScroll();
        }else if(!click){
            enableScroll();
        }
    }, [click, disableScroll, enableScroll]);

    return (
        <>
            <Nav isDark={isDark}>
                <NavLinkLogo to="/" onClick={closeMobileMenu}>
                    <Image src={isDark ? LogoBlanco : MedioLogo} />
                </NavLinkLogo>
                <DivButtons isDark={isDark} onClick={() => setClick(!click)}>
                    {click ? <Close /> : <Bars />}
                </DivButtons>
                <NavMenu 
                    className={click ? 'active' : null}
                    isDark={isDark}
                >
                    <li>
                        <NavLink to="/about" onClick={closeMobileMenu}>
                            Nosotros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={closeMobileMenu}>
                            Contacto
                        </NavLink>
                    </li>
                    <li>
                        <ThemeDiv 
                            onClick={
                                () => dispatch({ 
                                    type: 'TOGGLE_THEME', payload: isDark 
                                })
                            }
                        >
                            { 
                                !isDark ? <Sun />
                                : <Moon />
                            }
                        </ThemeDiv>
                    </li>
                </NavMenu>
            </Nav>
        </>
    );
}