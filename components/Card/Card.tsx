import Image from 'next/image';
import * as React from 'react';

interface CardProps {
    img: string,
    cardTitle: string,
    cardDescribe: string,
}

const Card: React.FunctionComponent<CardProps> = ({ img, cardTitle, cardDescribe }) => {
    return (
            <div className="">
                <div className="h-full bg-gray-100 bg-opacity-75 px-4 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
                    <Image src={`/${img}`}
                        alt="logo"

                        width={200}
                        height={135} />
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{cardDescribe}</h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{cardTitle}</h1>
                    <p className="leading-relaxed mb-3">{cardDescribe}</p>
                    <a className="text-indigo-500 inline-flex items-center">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>

                </div>
            </div>

    );
};

export default Card;
