import React, { useContext } from 'react';

import {Facebook, Link, SocialMedia, Instagram} from './FooterElements';
import { Contact, Container, FooterInformation, Description, FooterEnd, Text, Title, Image, Mail, Phone, Location } from './FooterElements';
import { ThemeContext } from '../../contexts/ThemeContext';

import LogoBlanco from '../../assets/img/logos/AmericaSolutions/LogoBlanco.png';

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
            <FooterInformation>
                <Description>
                    <Image src={LogoBlanco}/>
                    <Text>Nacimos para solucionarte la vida.</Text>
                    <SocialMedia>
                        <Facebook onClick={facebook} title="Facebook"></Facebook>
                        <Instagram onClick={instagram} title="Instagram"></Instagram>
                        {/* <div 
                            style={{color: '#fff', 
                                margin: '5px 20px',
                                fontSize: '10px'}}
                        >
                            Icons made by 
                            <a 
                                style={{textDecoration:'none', color: '#ffef00'}} 
                                href="https://www.freepik.com" 
                                title="Freepik"
                            > Freepik </a> from 
                            <a 
                                style={{textDecoration:'none', color: '#ffef00'}} 
                                href="https://www.flaticon.com/" 
                                title="Flaticon"
                            > www.flaticon.com </a>
                        </div> */}
                    </SocialMedia>
                </Description>
                <Contact>
                    <Title>Contacto</Title>
                    <Text><Mail/><p>elara@solucionesamerica.com</p></Text>
                    <Text><Phone/><p>999-927-5000, 999-927-5002</p></Text>
                    <Text><Location/><p>C.20 No.277 x23 y 23-A Col. Miguel Alemán, Mérida Yucatán, 97148.</p></Text>
                </Contact>
            </FooterInformation>
            <FooterEnd isDark={isDark}>
                <Link to="/Inicio">Inicio</Link> | <Link to="/About">¿Quienes Somos?</Link> | <Link to="/Contact">Contacto</Link>
            </FooterEnd>
        </Container>
    );
}