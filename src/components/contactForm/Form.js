import React, { useContext, useState } from 'react';

import { allowEmailCharacters, allowLettersOnly, formatInput, limitPhone } from '../../validations';
import {DivForm, ContactForm, Subtitle, Text, Input, 
    TextArea, SendInput, Error, Background} from './ContactFormElements';
import useForm from '../../hooks/useForm';
import ValidateInfo from './ValidateInfo';
import { ThemeContext } from '../../contexts/ThemeContext';

import Light from '../../assets/img/light.jpg';
import Dark from '../../assets/img/dark.jpg';

export default function Form({ submitForm, subject }){

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        Comment: ''
    });

    const { isDark } = useContext(ThemeContext);

    const {handleChange, handleSubmit, errors} = useForm(values, setValues, submitForm,ValidateInfo);

    return(
        <DivForm isDark={isDark}>
            <Background src={isDark ? Dark : Light}/>
            <Subtitle isDark={isDark}>Contáctanos</Subtitle>
            <form onSubmit={handleSubmit}>
                <ContactForm isDark={isDark}>
                    <Text>
                        <Input 
                            id='name'
                            type='text'
                            placeholder='Nombre'
                            name='name'
                            value={values.name.replace(/\s+/g, ' ')} 
                            onChange={handleChange}
                            onKeyPress={allowLettersOnly}
                            isDark={isDark}
                        />
                        {errors.name && <Error>{errors.name}</Error>}
                    </Text>
                    <Text>
                        <Input 
                            id='email'
                            type='text'
                            placeholder='Correo'
                            name='email'
                            value={values.email}
                            onKeyPress={allowEmailCharacters} 
                            onChange={handleChange}
                            isDark={isDark}
                        />
                        {errors.email && <Error>{errors.email}</Error>}   
                    </Text>
                    <Text>
                        <Input 
                            id='phone'
                            type='number'
                            placeholder='Teléfono'
                            name='phone'
                            onInput={limitPhone}
                            values={values.phone} 
                            onChange={handleChange}
                            onKeyDown={formatInput}
                            isDark={isDark}
                        />
                        {errors.phone && <Error>{errors.phone}</Error>}   
                    </Text>
                    <Text>
                        <TextArea 
                            id='Comment'
                            placeholder='¿Cómo podemos ayudarte?'
                            name='Comment'
                            values={values.Comment.replace(/\s+/g, ' ')}
                            onChange={handleChange}
                            isDark={isDark}
                            rows='3'
                        />
                        {errors.Comment && <Error>{errors.Comment}</Error>}
                    </Text>
                    <SendInput type="submit">Enviar</SendInput>
                </ContactForm>
            </form>
        </DivForm>
    );
}