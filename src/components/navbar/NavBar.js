import React, { useState, useContext } from 'react';

import { Nav, NavLinkLogo, NavLink, Bars, Close, NavMenu, Image, Sun, Moon } from './NavBarElements';
import { ThemeContext } from '../../context/ThemeContext';

import LogoBlanco from '../../assets/img/logos/AmericaSolutions/LogoBlanco.png';

export default function NavBar() {

    const [click, setClick] = useState(false);
    const [toggle, setToggle] = useState(false);

    const closeMobileMenu = () => setClick(false);

    const { setIsDark } = useContext(ThemeContext);

    return (
        <>
            <Nav>
                <NavLinkLogo to="/" onClick={closeMobileMenu}>
                    <Image src={LogoBlanco} />
                </NavLinkLogo>
                <div onClick={() => setClick(!click)}>
                    {click ? <Close /> : <Bars />}
                </div>
                <NavMenu className={click ? 'active' : null}>
                    <NavLink to="/about" onClick={closeMobileMenu}>
                        Nosotros
                    </NavLink>
                    <NavLink to="/contact" onClick={closeMobileMenu}>
                        Contacto
                    </NavLink>
                    <div 
                        onClick={() => setToggle(!toggle)}
                        style={{ width: '30px', cursor: 'pointer', marginLeft: '30px' }}
                    >
                        {!toggle ? <Sun onClick={() => setIsDark(true)}/>
                        : <Moon onClick={() => setIsDark(false)} />
                        }
                    </div>
                </NavMenu>
            </Nav>
        </>
    );
}