'use client';

import { DotLottiePlayer } from '@dotlottie/react-player';

export function QrCodeAnimation() {
	return (
		<DotLottiePlayer
			src='/animations/lottie/just-qrcode.json'
			autoplay
			loop
			style={{
				width: '100%',
				height: '100%'
			}}></DotLottiePlayer>
	);
}
