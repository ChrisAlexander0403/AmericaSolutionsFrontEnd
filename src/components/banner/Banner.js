import React, { useEffect, useState } from 'react';

import { Container, Image, Logo, Text } from './BannerElements';

import BannerImage from '../../assets/img/slider/Consulting.jpg';
import AmericaSolutions from '../../assets/img/logos/AmericaSolutions/LogoBlanco.png';

const Banner = () => {

    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <Container>
            <Logo src={AmericaSolutions} />
            <Text>Buscando la manera de solucionar tu vida</Text>
            <Image 
                src={BannerImage}
                style={{ transform: `translateY(-${offsetY * 0.25}px)` }}
            />
        </Container>
    );
}

export default Banner;