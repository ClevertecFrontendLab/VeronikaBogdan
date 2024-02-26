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
        <div className='loader-wrapper' data-test-id='loader'>
            <Lottie options={defaultOptions} height={150} width={150} />
        </div>
    );
};
