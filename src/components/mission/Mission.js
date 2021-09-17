import React from 'react';
import { Container, Info, Text, Title } from './MissionElements';

const Mission = () => {
    return (
        <Container>
            <Title>¿Quienes somos?</Title>
            <Info>
                <Text>Todo comenzó el 8 de Agosto de 1992 cuando Jerry Barceló Cazola y Jose 
                    Enrique Mendicuti Moguel unieron fuerzas en una empresa de computación llamada 
                    PC HELP y una empresa que empezaba en telefonía celular como Distribuidor 
                    Autorizado de Telcel nombrándola INTECEL (Informática y Telefonía Celular).</Text>
                <br/>
                <Text>Comenzamos a diversificarnos en 1994 como Distribuidor Máster de 
                    DIRECTV (Empresa mundial de televisión vía satélite que empezaba a funcionar en 
                    México) hasta que ésta dejó de ofrecer sus servicios. La empresa continuó con el 
                    negocio de alarmas con "Top Security", que luego cambió a 911 hasta el día 
                    de hoy.</Text>
                <br/>
                <Text>Posteriormente incursionamos con el Centro de Servicio de NOKIA con la empresa
                    llamada Fix High Electronic Service el cual daba servicio en R7 y R8 de forma 
                    exclusiva en Yucatán, Quintana Roo, Campeche, Tabasco, Chiapas, Veracrúz, Puebla, 
                    Tlaxcala y Oaxaca siendo el más grande Centro de Servicio de Nokia a nivel 
                    Nacional.</Text>
                <br/>
                <Text>Comenzamos a ofrecer servicios como con una empresa de mensajería llamada INTELPACK 
                    CARGO la cual brindó servicio a nivel Regional en todas las capitales y principales 
                    ciudades en el sureste con oficinas propias y flotillas propias durante más de 
                    12 años, y asociada al grupo TIPSA para dar a nivel Nacional servicio de 
                    mensajería.</Text>
                <br/>
                <Text>En 2012 nos adentramos al grupo de Tecnología con Plataformas con FACTURÁNDOTE, 
                    que entró la facturación electrónica en nuestro país y asociándonos con MSP Móvil,
                    que desarrolla Mobile Apps e incursionando con plataformas de TAE, como la última 
                    representación que entro con HughesNet (Internet Satelital), y la comercialización de 
                    diferentes productos relacionados a la pandemia del virus COVID 19 y demás.</Text>
            </Info>
        </Container>
    );
}

export default Mission;