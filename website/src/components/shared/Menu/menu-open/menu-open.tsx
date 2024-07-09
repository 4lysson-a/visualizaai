import sty from '@/utils/sty';

import styles from './styles.module.css';
import React from 'react';
import { CADASTRO_APP_LINK } from '@/constants/links';
import { LinkButton } from '../../Button';
import { WHATSAPP_NUMBER_LINK } from '@/constants/whatsapp';
import Link from 'next/link';

function Wave() {
	return (
		<svg
			width='100'
			height='568'
			fill='none'
			viewBox='0 0 67 568'
			xmlns='http://www.w3.org/2000/svg'
			className='h-full z-[-1] absolute scale-125 -left-[12svh] top-0'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M56.4159 568L45.9852 544.925C35.5545 520.075 14.6931 473.925 10.7816 426C6.87014 378.075 18.6047 331.925 18.6047 284C18.6047 236.075 6.87014 189.925 1.65479 142C-2.25671 94.075 1.65479 47.925 4.26246 23.075L6.87014 0H67L67 23.075C67 47.925 67 94.075 67 142C67 189.925 67 236.075 67 284C67 331.925 67 378.075 67 426C67 473.925 67 520.075 67 544.925V568H56.4159Z'
				fill='var(--menu-bg)'
			/>
		</svg>
	);
}

export function MenuOpen({ ...rest }) {
	const handleClick = () => {
		rest.onClose();
		window.location.href = '#price';
	}
	
	return (
		<>
			<div className={sty('w-10 h-10 bg-menu_bg duration-300 scale-0 origin-top-right fixed z-40 rounded-full right-0 top-0', rest.isOpen && 'w-full h-full rounded-none rounded-bl-full scale-100')}>
				<div className={sty('h-[100%] w-[90%] flex flex-col gap-10 justify-center items-end invisible opacity-0', rest.isOpen && 'visible opacity-100')}>
					{/* <button
						type="button"
						onClick={rest.onClose}
						className={sty(rest.isOpen && 'animate-duration-300 animate-fade-left animate-delay-100')}>
						Preço
					</button> */}
					<Link
						target="_blank"
						href={WHATSAPP_NUMBER_LINK}
						className={sty(rest.isOpen && 'animate-duration-300 animate-fade-left animate-delay-200')}>
						Contato
					</Link>
					<LinkButton
						target="_blank"
						href={CADASTRO_APP_LINK}
						className={sty(rest.isOpen && 'animate-duration-300 animate-fade-left animate-delay-500')}>
						Testar agora
					</LinkButton>
				</div>
			</div>
			<div className={sty('hidden', styles.backdrop, 'opacity-0', rest.isOpen && 'opacity-100 block')} />
		</>
	);
}
