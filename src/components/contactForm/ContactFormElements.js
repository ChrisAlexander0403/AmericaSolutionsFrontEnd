import styled from 'styled-components';
import { FiMail, FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { AiOutlineGlobal } from 'react-icons/ai';

export const Image = styled.img`
    width: 200px;
`;

export const Success = styled.p`
    margin: 20px;
`;
export const DivSuccess = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const FormContainer = styled.div`
    display: grid;
    grid-template-columns: 5fr 3fr;
    margin: 50px;

    @media screen and (max-width: 1080px){
        width: 99%;
        box-shadow: none;
        margin: 50px 0;
        grid-template-columns: 100%;
    }
`;
export const DivForm = styled.div`
    padding: 2em;

    @media screen and (max-width: 768px){
        grid-column: 1/-1;
        width: 100%;
        padding: 2em 1em;
        border: none;
    }
`;
export const ContactForm = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 20px;
    color: ${props => props.isDark ? '#fff' : '#000'};

    input, textarea{
        border-bottom: ${props => props.isDark ? '1px solid #0082cc' : '1px solid #151b4e'};
    }

    button{
        background: ${props => props.isDark ? '#0082cc' : '#151b4e'};
    }

    @media screen and (max-width: 768px){
        grid-column: 1/-1;
        width: 100%;
        grid-template-columns: 100%;
    }
`;
export const InfoForm = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: ${props => props.isDark ? '#0082cc': '#151b4e'};
    padding: 0 2em;
    min-height: 350px;
    color: #fff;

    h2{
        color: #fff;
    }

    @media screen and (max-width: 768px){
        grid-column: 1/-1;
        padding: 2em 1em;
        min-height: 300px;
    }
`;

export const Logo = styled.img`
    width: 250px;
    align-self: center;
    transform: translateY(60px);
`;

export const Subtitle = styled.h2`
    margin: 20px 0;
    color: ${props => props.isDark ? '#fff' : '#151b4e'};
`;
export const Text = styled.p`
    margin-top: 20px; 
    @media screen and (max-width: 768px){
        grid-column: 1/-1;
    }
`;
export const Error = styled.p`
    padding-top: 5px;
    font-size: 12px;
    color: red;
`;
export const AreaText = styled.p`
    margin-top: 20px;
    grid-column: span 2;
`;
export const TextInfo = styled.div`
    font-size: 14px;
    display: flex;
    margin: 5px 25px 10px;
`;
export const Label = styled.label`
    
`;
export const TextArea = styled.textarea`
    width: 90%;
    padding: .7em;
    border: none;
    background: none;
    color: ${props => props.isDark ? '#fff' : '#000'};
    outline: 0;
    resize: none;
`;
export const Mail = styled(FiMail)`
    margin-right: 7px;
    min-width: 16px;
    min-height: 16px;
`;
export const Phone = styled(FiPhone)`
    margin-right: 7px;
    min-width: 16px;
    min-height: 16px;
`;
export const Location = styled(GoLocation)`
    margin-right: 7px;
    min-width: 16px;
    min-height: 16px;
`;
export const Global = styled(AiOutlineGlobal)`
    margin-right: 7px;
    min-width: 16px;
    min-height: 16px;
`;
export const Input = styled.input.attrs(props => ({
    type: props.type
}))`
    width: 90%;
    padding: .7em;
    border: none;
    background: none;
    color: ${props => props.isDark ? '#fff' : '#000'};
    outline: 0;
    -moz-appearance:textfield;
    &::placeholder{
        content: ${props => props.placeholder};
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active{
        box-shadow: 0 0 0 30px #181818 inset !important;
    }
    &:-webkit-autofill {
        -webkit-text-fill-color: #fff !important;
        caret-color: white;
    }
    //https://qastack.mx/programming/2781549/removing-input-background-colour-for-chrome-autocomplete
`;
export const SendInput = styled.button`
    width: 90%;
    border: none;
    margin-top: 20px;
    background: #151b4e;
    color: #fff;
    outline: 0;
    text-transform: uppercase;
    padding: 1em;
    grid-column: span 2;
    cursor: pointer;
    transition: transform .5 ease-in-out;

    &:hover{
        transform: translateY(-3px);
    }

    &:active{
        transform: scale(0.95, 0.95);
    }
`;