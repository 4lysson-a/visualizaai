'use client';

import sty from '@/utils/sty';
import { useRive } from '@rive-app/react-canvas';

export default function LogoAnimation({ ...rest }) {
	const { rive, RiveComponent } = useRive({
		src: 'animations/rive/visualiza_ai.riv',
		autoplay: true,
	});

	const handleStopAnimation = () => {
		rive?.stop();
	};

	return (
		<RiveComponent
			{...rest}
			onAnimationEnd={handleStopAnimation}
			className={sty('w-full h-14 lg:w-56 lg:h-24', rest?.className,)}
		/>
	);
}
