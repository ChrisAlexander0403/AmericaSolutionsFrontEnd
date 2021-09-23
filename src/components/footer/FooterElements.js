import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HiMail } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillPhone } from 'react-icons/ai';

export const Container = styled.div`
    height: 18rem;
    width: 100%;
`;

export const FooterInformation = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.isDark ? '#181818' : '#e7e7e7'};
    box-shadow: 0 -5px 15px ${props => props.isDark ? 'rgba(0, 0, 0, .25)' : 'rgba(100, 100, 100, .25)'};
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 10px 20px 10px;

    @media screen and (max-width: 768px){
        align-items: center;
    }
`;

export const ImageContainer = styled.div`
    margin: 0 10px;
    width: 200px;
    height: 130px;
    overflow: hidden;
    object-fit: cover;
    transform: translateY(-20px);
`;

export const Image = styled.img`
    width: 200px;
    object-fit: cover;
`;

export const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 20px;
    padding: 0 20px;
    @media screen and (max-width: 768px){
        padding: 0;
    }
`;

export const Facebook = styled(AiFillFacebook)`
    color: ${props => props.isDark ? '#fff' : '#3b5998'};
    font-size: 40px;
    margin: 0 10px;
    cursor: pointer;
`;
export const Twitter = styled(AiFillTwitterSquare)`
    color: ${props => props.isDark ? '#fff' : '#00acee'};
    font-size: 40px;
    margin: 0 10px;
    cursor: pointer;
`;
export const Instagram = styled(AiFillInstagram)`
    color: ${props => props.isDark ? '#fff' : '#e1306c'};
    font-size: 40px;
    margin: 0 10px;
    cursor: pointer;
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0  0 20px;
    padding: 20px 20px 30px;

    div, p{
        color: ${props => props.isDark ? '#fff' : '#000'}
    }
`;

export const Title = styled.p`
    padding: 10px 20px 20px;
    font-size: 24px;
    @media screen and (max-width: 768px){
        text-align: center;
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 350px;
    padding: 20px 20px 0 20px;
    color: ${props => props.isDark ? '#fff' : '#000'};
    font-size: 16px;

    p{
        text-align: center;
    }

    @media screen and (max-width: 480px){
        width: 200px;
    }
`;

export const Mail = styled(HiMail)`
    margin: 7px 0 25px;
    font-size: 40px;

    @media screen and (max-width: 480px){
        font-size: 30px;
    }
`;

export const Phone = styled(AiFillPhone)`
    margin: 7px 0 25px;
    font-size: 40px;

    @media screen and (max-width: 480px){
        font-size: 30px;
    }
`;
export const Location = styled(IoLocationSharp)`
    margin: 7px 0 25px;
    font-size: 40px;

    @media screen and (max-width: 480px){
        font-size: 30px;
    }
`;

export const FooterEnd = styled.div`
    color: ${props => props.isDark ? '#fff' : '#000'};
    display: flex;
    justify-content: center;
    height: 10%;
    width: 100%;
    align-items: center;
    padding-left: 30px;
    user-select: none;
    background: ${props => props.isDark ? '#111' : '#d4d4d4'};
    @media screen and (max-width: 768px){
        padding-left: 10px;
        font-size: 10px;
        display: none;
    }
    a{
        color: ${props => props.isDark ? '#fff' : '#000'};
    }
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    cursor: pointer;
    
    margin: auto 5px;
    font-size: 16px;
    @media screen and (max-width: 768px){
        margin: 10px 5px;
    }
`;