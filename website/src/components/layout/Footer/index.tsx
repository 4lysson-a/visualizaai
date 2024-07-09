import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/img/LOGO (2).png';

import { CADASTRO_APP_LINK } from '@/constants/links';
import { WHATSAPP_NUMBER, WHATSAPP_NUMBER_LINK } from '@/constants/whatsapp';

const Footer = () => {
	return (
		<footer className='bg-black rounded-t-3xl flex justify-between flex-col lg:flex-row p-12'>
			<div className='flex flex-col gap-4'>
				<Image
					src={logo}
					alt='Qr Code'
					width={301}
					height={172}
					objectFit='cover'
					objectPosition='center'
				/>
				<span className='text-white font-bold'>2024 © Visualiza Ai - Todos os direitos reservados.</span>
			</div>

			<div className='flex flex-col gap-5'>
				<div className='flex flex-col gap-4'>
					<span className='text-[rgba(255,255,255,44)] text-2xl'>Contato</span>
					<Link target='_blank' href={WHATSAPP_NUMBER_LINK} className='text-white hover:underline'>
            {WHATSAPP_NUMBER}
          </Link>
					<span className='text-white'>contato@grupogenializa.com.br</span>
				</div>

				<a
					href={CADASTRO_APP_LINK}
					target='_blank'
					className='text-[rgba(187,107,79,100)] underline '>
					Testar agora
				</a>
			</div>
      
		</footer>
	);
};

export default Footer;
