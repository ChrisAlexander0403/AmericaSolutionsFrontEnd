import React, { useState } from 'react';

import { Nav, NavLinkLogo, NavLink, Bars, Close, NavMenu, Image } from './NavBarElements';
import LogoBlanco from '../../assets/img/logos/AmericaSolutions/LogoBlanco.png';

export default function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <Nav>
                <NavLinkLogo to="/" onClick={closeMobileMenu}>
                    <Image src={LogoBlanco} />
                </NavLinkLogo>
                <div onClick={handleClick}>
                    {click ? <Close /> : <Bars />}
                </div>
                <NavMenu className={click ? 'active' : null}>
                    <NavLink to="/about" onClick={closeMobileMenu}>
                        Nosotros
                    </NavLink>
                    <NavLink to="/contact" onClick={closeMobileMenu}>
                        Contacto
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}