import React, { useContext } from 'react';

import { Container, Info, Subtitle, Text, Title } from './MissionElements';
import { ThemeContext } from '../../contexts/ThemeContext';

const Mission = () => {

    const { isDark } = useContext(ThemeContext);

    return (
        <Container>
            <Title isDark={isDark}>Nosotros</Title>
            <Info isDark={isDark}>
                <article>
                    <Subtitle isDark={isDark}>Nuestra historia</Subtitle>
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
                </article>
                <aside>
                    <Subtitle isDark={isDark}>¿Quiénes somos?</Subtitle>
                    <Text>Somos un grupo empresarial que desde el 2007 se ha dedicado a ser líderes en ventas,
                        creación de redes comerciales, desarrollo en tecnología de software, logística,
                        consultoría empresarial, planeación, conciliación y asesoría fiscal.</Text>
                    <Text>Somos un cúmulo del esfuerzo colectivo de un grupo de empresarios con uan meta
                        prioritaria: "Usar toda nuestra experiencia así como todos nuestros recursos para
                        el mejor servicio con el mejor producto y así poder tener la satisfacción del cliente".</Text>
                    <Subtitle isDark={isDark}>Misión</Subtitle>
                    <Text> Atender las necesidades de las empresas, proporcionando soluciones a la medida de 
                        nuestro clientes con total apego a las leyes, generando seguridad y confianza.</Text>
                    <Subtitle isDark={isDark}>Visión</Subtitle>
                    <Text>Ser la firma líder en México, que ofrezca soluciones a las necesidades de sus 
                        clientes catapultándolos al éxito tanto en el ámbito empresarial como económico, 
                        derivando un crecimiento lateral.</Text>
                </aside>
            </Info>
        </Container>
    );
}

export default Mission;