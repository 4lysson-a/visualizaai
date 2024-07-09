'use client';

import React from 'react';
import sty from '@/utils/sty';
import { useRive } from '@rive-app/react-canvas';
import { MenuOpen } from '@/components/shared/Menu/menu-open/menu-open';

export default function MenuAnimation({ ...rest }) {
	const [active, setActive] = React.useState(false);

	const { rive, RiveComponent } = useRive({
		autoplay: true,
		animations: '+',
		src: 'animations/rive/hamburger_menu.riv'
	});

	const handleStopAnimation = () => {
		rive?.stop();
	};

	const handleClose = () => {
		setActive(false);
		window.document.body.style.overflow = 'auto';
		rive?.play('+');
	};

	const handleActiveAnimation = () => {
		setActive(!active);

		// Menu open
		if (!active) {
			window.document.body.style.overflow = 'hidden';
			rive?.play('X');
		}

		// Menu closed
		if (active) {
			window.document.body.style.overflow = 'auto';
			rive?.play('+');
		}
	};

	const isOpen = React.useMemo(() => active, [active]);

	return (
		<>
			<MenuOpen
				onClose={handleClose}
				isOpen={isOpen}
			/>

			<RiveComponent
				{...rest}
				onClick={handleActiveAnimation}
				onAnimationEnd={handleStopAnimation}
				className={sty('w-7 h-7 z-50 animate-fade-up *:active:scale-80', rest?.className)}
			/>
		</>
	);
}
