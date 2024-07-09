import LogoAnimation from '@/components/animations/Logo';
import sty from '@/utils/sty';
import clsx from 'clsx';
import Button from '../shared/Button';
import { WHATSAPP_NUMBER_LINK, openWhatsapp } from '@/constants/whatsapp';
import Link from 'next/link';

function Item({ ...rest }) {
	return (
		<div
			className={sty(
				rest.className,
				'active:after:h-full',
				'after:absolute after:bg-primary after:opacity-0 after:-bottom-0',
				'after:z-[-1] after:rounded-sm after:left-[-5px] after:w-[calc(100%_+_10px)]',
				'after:h-[2px] hover:after:h-[50%] hover:cursor-pointer hover:after:opacity-100'
			)}>
			<p className='duration-100 text-secondary'>{rest.children}</p>
		</div>
	);
}

export default function HeaderDesktop() {
	return (
		<header className='pb-56 hidden select-none lg:block'>
			<div
				className={clsx(
					'pl-24 pr-24 w-[95%]',
					'flex flex-row items-center justify-between',
					'bg-white shadow-lg  rounded-full border ',
					'absolute top-10 left-1/2 -translate-x-1/2 opacity-0 header-fadein'
				)}>
				<LogoAnimation className='scale-95 cursor-pointer active:scale-90' />

				<div className={sty('flex items-center flex-row gap-10 *:opacity-0 *:animate-fade-up *:animate-fill-forwards *:animate-duration-300')}>
					<Link href='#price'>
						<Item className='!animate-delay-150'>Preço</Item>
					</Link>
					<Link
						target='_blank'
						href={WHATSAPP_NUMBER_LINK}>
						<Item className='!animate-delay-200'>Contato</Item>
					</Link>
					<Link target="_blank" href="https://tanamao-app.vercel.app/dash/auth/signup" className='!animate-delay-500'>Testar agora</Link>
				</div>
			</div>
		</header>
	);
}
