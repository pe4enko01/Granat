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
            <div>
              
            </div>
          </div>
          <div className="w-1/4 p-4">
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