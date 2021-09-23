import React, { useContext, useEffect, useState } from 'react';

import { Container, Image, Logo, Text } from './BannerElements';
import { ThemeContext } from '../../contexts/ThemeContext';

import BannerImage from '../../assets/img/slider/Compromised.jpg';
import AmericaSolutions from '../../assets/img/logos/AmericaSolutions/AmericaSolutions.png';
import AmericaSolutionsGray from '../../assets/img/logos/AmericaSolutions/AmericaSolutionsGray.png';

const Banner = () => {

    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.scrollY);

    const { isDark } = useContext(ThemeContext);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <Container>
            <Logo src={isDark ? AmericaSolutionsGray : AmericaSolutions} />
            <Text>Comprometidos en crear soluciones para tu día a día.</Text>
            <Image 
                src={BannerImage}
                style={{ transform: `translateY(-${offsetY * 0.25}px)` }}
            />
        </Container>
    );
}

export default Banner;