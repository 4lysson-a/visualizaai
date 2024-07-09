import React from 'react';
import Lottie from 'lottie-react';

import loadingDark from '@/assets/animations/loading-dark.json';
import loadingLight from '@/assets/animations/loading-light.json';

export default function Loading() {
	const theme = localStorage.getItem('theme');
	const animate = theme === 'dark' ? loadingDark : loadingLight;

	return (
		<div className='flex flex-col h-full justify-center items-center'>
			<Lottie animationData={animate} />
		</div>
	);
}
