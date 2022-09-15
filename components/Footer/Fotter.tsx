import * as React from 'react';

import type { RootState } from '../../store/'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/counterSlice'
import { useAppSelector, useAppDispatch } from '../../Hook/hook'
import Image from 'next/image'

import styles from './Header.module.css'


interface FooterProps {
}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
    const count = useAppSelector((state: RootState) => state.counter.value)
    const dispatch = useAppDispatch()
    return (
        <footer className="text-gray-600 body-font">
            <div className="container mx-auto px-5 py-24">
                <div className="flex justify-between">
                    <div className="w-3/4">
                        <div className="flex justify-start ">
                            <div className="mt-2">
                                <Image src={`/optikov-exit1.png`} alt="logo" width={240} height={142} className="mt-2" />
                            </div>
                            <div className="ml-5 mt-2">
                                <Image src={`/optikov-exit2.png`} alt="logo" width={240} height={142} className="" />
                            </div>

                            <div className="ml-5">
                                <h3 className="" >График работы:</h3>
                                <p>СПн - Пт: 09:00 - 17:30
                                    <br /> Сб - Вс: Выходные дни
                                    <br /> Сб - Вс: Выходные дни
                                    <br /> Доступ на территорию осуществляется
                                    <br /> с проходной на ул. Оптиков, д. 4.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="w-1/4 ">
                        <h3>Контакты</h3>
                        <p>e-mail: granat@npcgranat.ru</p>
                        <p>Санкт-Петербург, вн.тер.г. муниципальный
                            округ № 65, ул Оптиков, д. 4, литера А, к.
                            508, помещ. 6-Н/(288)</p>
                        <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Button</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;