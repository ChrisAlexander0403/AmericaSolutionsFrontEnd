import React, { useContext } from 'react';

import { Background, DivForm, Subtitle, Success } from './ContactFormElements';

import Light from '../../assets/img/light.jpg';
import Dark from '../../assets/img/dark.jpg';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function FormSuccess(){

    const { isDark } = useContext(ThemeContext);

    return(
        <DivForm isDark={isDark}>
            <Background src={isDark ? Dark : Light}/>
            <Subtitle isDark={isDark} style={{ textAlign: 'center' }}>Hemos recibido tu correo</Subtitle>
            <Success isDark={isDark}>En breve nos pondremos en contacto contigo.</Success>
        </DivForm>
    );
}