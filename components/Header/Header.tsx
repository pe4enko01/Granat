import * as React from 'react';

import type { RootState } from '../../store/'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/counterSlice'
import { useAppSelector, useAppDispatch } from '../../Hook/hook'
import Image from 'next/image'

import styles from './Header.module.css'


interface HeaderProps {
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
    const count = useAppSelector((state: RootState) => state.counter.value)
    const dispatch = useAppDispatch()
    return (
        <header className="styles.text">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Image
                    // loader={myLoader}
                    src="/logos.png"
                    alt="lol"
                   
                    width={200}
                    height={200}
                />
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">Главная</a>
                    <a className="mr-5 hover:text-gray-900">О компании</a>
                    <a className="mr-5 hover:text-gray-900">Направления</a>
                    <a className="mr-5 hover:text-gray-900">Производство</a>
                    <a className="mr-5 hover:text-gray-900">Новости</a>
                    <a className="mr-5 hover:text-gray-900">Контакты</a>
                </nav>

            </div>
        </header>
    );
};

export default Header;

