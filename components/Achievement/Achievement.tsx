import * as React from 'react';

interface IAchievementProps {
}

const Achievement: React.FunctionComponent<IAchievementProps> = (props) => {
    return (
        <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg flex ">
                <div className="flex items-center justify-center">

                    <div className="mr-10 w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                            <circle cx="6" cy="6" r="3"></circle>
                            <circle cx="6" cy="18" r="3"></circle>
                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
            </div>
        </div>
    );
};

export default Achievement;
