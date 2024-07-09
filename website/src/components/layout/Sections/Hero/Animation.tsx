'use client';

import React from 'react';
import {DotLottiePlayer, Controls} from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

export function AnimationMenu() {
    return (
        <DotLottiePlayer
            src="/animations/lottie/menu.json"
            autoplay
            loop
            className="absolute right-0 top-[4px]"
            style={{
                width: '100%',
                height: '100%',
            }}
        >
        </DotLottiePlayer>
    );
};

export function AnimationQrcode() {
    return (
        <DotLottiePlayer
            src="/animations/lottie/qrcode.json"
            autoplay
            loop
            className="absolute right-[30px] top-[20px]"
            style={{
                width: '100%',
                height: '100%',
            }}
        >
        </DotLottiePlayer>
    );
};
