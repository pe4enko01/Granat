import * as React from 'react';
import Card from '../Card/Card';

interface CardContainerProps {
}

const CardContainer: React.FunctionComponent<CardContainerProps> = (props) => {
    return (
        <div className='container flex justify-center' >
            <Card img='img.home1.png' cardDescribe='Контрактные разработки' cardTitle='Проектируем и производим электронные устройства для различных задач и условий применения' />
            <Card img='img.home1.png' cardDescribe='Контрактные разработки' cardTitle='Проектируем и производим электронные устройства для различных задач и условий применения' />
            <Card img='img.home1.png' cardDescribe='Контрактные разработки' cardTitle='Проектируем и производим электронные устройства для различных задач и условий применения' />
            <Card img='img.home1.png' cardDescribe='Контрактные разработки' cardTitle='Проектируем и производим электронные устройства для различных задач и условий применения' />
        </div>

    );
};

export default CardContainer;
