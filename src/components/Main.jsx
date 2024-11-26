import React from 'react';
import VideoComponent from './VideoComponent';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 mt-8 md:mt-[69px] px-4 md:px-8">
            {/* Text Section */}
            <div className="font-medium flex flex-col justify-center items-start">
                <h1 className="text-3xl md:text-[48px] leading-tight md:leading-[78px] md:w-[361px] mb-6 md:mb-9">
                    Fact Checking Assistant
                </h1>
                <p className="text-lg md:text-[24px] leading-relaxed md:leading-[36px] mb-6 md:mb-9">
                    Faktın dəqiqliyini hesabla
                </p>
                <Link
                    to="/registration"
                    className="bg-blue text-white px-6 py-3 md:py-4 rounded-md text-base md:text-[16px] leading-[24px] transition-transform transform hover:scale-105"
                >
                    Bura kliklə!
                </Link>
            </div>

            {/* Video Section */}
            <div className="flex justify-center md:justify-end ">
                <VideoComponent />
            </div>
        </div>
    );
};

export default Main;
