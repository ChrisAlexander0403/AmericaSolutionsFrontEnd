import React from 'react';
import { DivForm, Subtitle, Success } from './ContactFormElements';

export default function FormSuccess(){
    return(
        <DivForm>
            <Subtitle>Hemos recibido tu correo</Subtitle>
            <Success>En breve nos pondremos en contacto contigo.</Success>
        </DivForm>
    );
}