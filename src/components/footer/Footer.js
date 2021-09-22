import React, { useContext } from 'react';

import {Facebook, Link, SocialMedia, Instagram, ImageContainer} from './FooterElements';
import { Contact, Container, FooterInformation, Description, FooterEnd, Text, Title, Image, Mail, Phone, Location } from './FooterElements';
import { ThemeContext } from '../../contexts/ThemeContext';

import LogoBlanco from '../../assets/img/logos/AmericaSolutions/LogoBlanco.png';
import MedioLogo from '../../assets/img/logos/AmericaSolutions/MedioLogo.png';

export default function Footer(){

    const { isDark } = useContext(ThemeContext);

    const facebook = () => {
        window.open("https://www.facebook.com/SolucionesAmerica.Net", '_blank');
    }

    const instagram = () => {
        window.open("https://www.instagram.com/solucionesamerica/?hl=es", '_blank');
    }

    return(
        <Container>
            <FooterInformation isDark={isDark}>
                <Description>
                    <ImageContainer>
                        <Image src={isDark ? LogoBlanco : MedioLogo} />
                    </ImageContainer>
                    <Text isDark={isDark}>Nacimos para solucionarte la vida.</Text>
                    <SocialMedia>
                        <Facebook onClick={facebook} title="Facebook" isDark={isDark} />
                        <Instagram onClick={instagram} title="Instagram" isDark={isDark} />
                    </SocialMedia>
                </Description>
                <Contact isDark={isDark}>
                    <Title>Contacto</Title>
                    <Text><Mail/><p>elara@solucionesamerica.com</p></Text>
                    <Text><Phone/><p>999-927-5000, 999-927-5002</p></Text>
                    <Text><Location/><p>C.20 No.277 x23 y 23-A Col. Miguel Alemán, Mérida Yucatán, 97148.</p></Text>
                </Contact>
            </FooterInformation>
            <FooterEnd isDark={isDark}>
                <Link to="/">Inicio</Link> | <Link to="/about">¿Quienes Somos?</Link> | <Link to="/contact">Contacto</Link>
            </FooterEnd>
        </Container>
    );
}