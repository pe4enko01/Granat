import * as React from 'react';
import Achievement from '../Achievement/Achievement';

interface IAchivementContainerProps {
}

const AchivementContainer: React.FunctionComponent<IAchivementContainerProps> = (props) => {
    return (
        <section className="text-gray-600 body-font ">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
                </div>
                <div className="flex justify-between">
                    <div className="w-3/4">
                        <div className="flex flex-wrap ">

                            <Achievement />
                            <Achievement />
                            <Achievement />




                        </div>
                    </div>
                    <div className=" flex justify-end px-4">
                        <div className="xl:w-1/2 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default AchivementContainer;
