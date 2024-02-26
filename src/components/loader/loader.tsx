import React from 'react';
import Lottie from 'react-lottie';

import animationLoader from '@public/loader.json';

import './loader.scss';

export const Loader: React.FC = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationLoader,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className='loader-wrapper'>
            <Lottie options={defaultOptions} height={150} width={150} />
        </div>
    );
};
