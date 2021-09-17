import React from 'react';

import { EnterpriseContainer, EnterpriseLogo, MainContainer } from './EnterprisesElements';

import Intecel from '../../assets/img/logos/Intecel/Intecel.png';
import HughesNet from '../../assets/img/logos/HughesNet/logo.svg';
import Facturandote from '../../assets/img/logos/Facturandote/FacturandoteLogo.png';
import MSP from '../../assets/img/logos/MSP/LogoMSP.png';

const Enterprises = () => {
    return (
        <MainContainer>
            <EnterpriseContainer>
                <EnterpriseLogo src={Intecel}/>
            </EnterpriseContainer>
            <EnterpriseContainer background={'#f05a28'}>
                <EnterpriseLogo src={HughesNet}/>
            </EnterpriseContainer>
            <EnterpriseContainer background={'#222'}>
                <EnterpriseLogo src={Facturandote}/>
            </EnterpriseContainer>
            <EnterpriseContainer background={'#ccc'}>
                <EnterpriseLogo src={MSP}/>
            </EnterpriseContainer>
        </MainContainer>
    );
}

export default Enterprises;