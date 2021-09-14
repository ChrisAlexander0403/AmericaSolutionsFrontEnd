import React, { useState } from 'react';

import {
    FormContainer, InfoForm, Subtitle, TextInfo,
    Mail, Phone, Location, Global, Logo
} from './ContactFormElements';
import Form from './Form';
import FormSuccess from './FormSuccess'
import axios from 'axios';
import AmericaSolutions from '../../assets/img/logos/AmericaSolutions/LogoBlanco.png';

export default function ContactForm({ subject }) {
    const [isSubmitted, setIsSubmitted] = useState(false)
    async function submitForm(values) {
        await axios.post('http://localhost:8000/api/mails/contact', {
            name: values.name,
            email: values.email,
            phone: values.phone,
            content: values.Comment
        })
        setIsSubmitted(true);
    }
    return (
        <FormContainer>
            {!isSubmitted ? <Form submitForm={submitForm} subject={subject}/> : <FormSuccess />}
            <InfoForm>
                <Subtitle>Más Información</Subtitle>
                <TextInfo><Location /><p>C.20 No.277 x23 y 23-A Col. Miguel Alemán, Mérida Yucatán, 97148.</p></TextInfo>
                <TextInfo><Phone /><p>999-927-5000, 999-927-5002</p></TextInfo>
                <TextInfo><Mail /><p>soporte@facturandote.com</p></TextInfo>
                <TextInfo><Global /><p>facturandote.com</p></TextInfo>
                <Logo src={AmericaSolutions}/>
            </InfoForm>
        </FormContainer>
    );
}