import React, { useContext } from 'react';

import { EnterpriseContainer, EnterpriseLogo, MainContainer, ModalContainer, Text, Title } from './EnterprisesElements';
import { ThemeContext } from '../../context/ThemeContext';

import Intecel from '../../assets/img/logos/Intecel/Intecel.png';
import HughesNet from '../../assets/img/logos/HughesNet/logo.svg';
import Facturandote from '../../assets/img/logos/Facturandote/FacturandoteLogo.png';
import MSP from '../../assets/img/logos/MSP/LogoMSP.png';
import IntecelModal from '../modal/Modal';
import useModal from '../../hooks/useModal';

const Enterprises = () => {

    const [isOpen, openModal, closeModal] = useModal(false);

    const { isDark } = useContext(ThemeContext);

    const HughesNetLink = () => {
        window.open('https://www.hughesnet.com.mx/', '_blank');
    }

    const FacturandoteLink = () => {
        window.open('http://facturandote.com/', '_blank');
    }

    const MSPMovilLink = () => {
        window.open('https://mspmovil.com/', '_blank');
    }

    return (
        <div>
            <Title isDark={isDark}>Nuestras empresas</Title>    
            <MainContainer>
                <EnterpriseContainer onClick={openModal}>
                    <EnterpriseLogo src={Intecel}/>
                </EnterpriseContainer>
                <EnterpriseContainer background={'#f05a28'} onClick={HughesNetLink}>
                    <EnterpriseLogo src={HughesNet}/>
                </EnterpriseContainer>
                <EnterpriseContainer background={'#222'} onClick={FacturandoteLink}>
                    <EnterpriseLogo src={Facturandote}/>
                </EnterpriseContainer>
                <EnterpriseContainer background={'#ccc'} onClick={MSPMovilLink}>
                    <EnterpriseLogo src={MSP}/>
                </EnterpriseContainer>
            </MainContainer>
            <IntecelModal isOpen={isOpen} closeModal={closeModal}>
                <ModalContainer>
                    <EnterpriseLogo src={Intecel}/>
                    <Text>Este sitio web está actualmente en construcción.</Text>
                </ModalContainer>
            </IntecelModal>
        </div>
    );
}

export default Enterprises;