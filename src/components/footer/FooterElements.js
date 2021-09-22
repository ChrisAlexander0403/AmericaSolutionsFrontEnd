import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {FiMail, FiPhone} from 'react-icons/fi';
import {GoLocation} from 'react-icons/go'
import {TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialInstagramCircular} from 'react-icons/ti';

export const Container = styled.div`
    height: 18rem;
    width: 100%;
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

export const FooterInformation = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 90%;
    background-color: ${props => props.isDark ? '#181818' : '#e7e7e7'};
    box-shadow: 0 -5px 15px ${props => props.isDark ? 'rgba(0, 0, 0, .25)' : 'rgba(100, 100, 100, .25)'};
`;

export const Contact = styled.div`
    height: 100%;
    width: 100%;
    margin: 20px 0;
    padding: 20px 20px 30px;

    div, p{
        color: ${props => props.isDark ? '#fff' : '#000'}
    }
    
    @media screen and (max-width: 768px){
        grid-column: 1/-1;
    }
`;

export const Title = styled.p`
    padding: 10px 20px 30px 20px;
    font-size: 20px;
    @media screen and (max-width: 768px){
        text-align: center;
    }
`;

export const Text = styled.div`
    display: flex;
    padding: 20px 40px 0 20px;
    color: ${props => props.isDark ? '#fff' : '#000'};
    font-size: 16px;
    @media screen and (max-width: 768px){
        padding: 10px 0 0 10px;
    }
`;

export const ImageContainer = styled.div`
    margin: 0 10px;
    width: 200px;
    height: 150px;
    overflow: hidden;
    object-fit: cover;
    transform: translateY(-20px);
`;

export const Image = styled.img`
    width: 200px;
    object-fit: cover;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 20px 20px 10px;

    @media screen and (max-width: 768px){
        grid-column: 1/-1;
        align-items: center;
    }
`;

export const FooterEnd = styled.div`
    color: ${props => props.isDark ? '#fff' : '#000'};
    display: flex;
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

export const Facebook = styled(TiSocialFacebookCircular)`
    color: ${props => props.isDark ? '#fff' : '#3b5998'};
    font-size: 50px;
    cursor: pointer;
`;
export const Twitter = styled(TiSocialTwitterCircular)`
    color: ${props => props.isDark ? '#fff' : '#00acee'};
    font-size: 50px;
    cursor: pointer;
`;
export const Instagram = styled(TiSocialInstagramCircular)`
    color: ${props => props.isDark ? '#fff' : '#e1306c'};
    font-size: 50px;
    cursor: pointer;
`;