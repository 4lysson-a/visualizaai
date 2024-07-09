import React from 'react';

import dash from '../../../../assets/img/dash.png';
import Image from 'next/image';
import Button, { LinkButton } from '@/components/shared/Button';
import HappySVG from '@/assets/svg/Happy';

import { CADASTRO_APP_LINK, openSignupAppPage } from '@/constants/links';

const Span = ({ ...rest }) => {
	return (
		<span
			className='font-bold text-primary'
			{...rest}>
			{' '}
			{rest.children}
		</span>
	);
};

const Informative = () => {
	return (
		<section className='w-full lg:pl-20 lg:pr-20 lg:mt-20 flex flex-col justify-center items-center gap-10'>
			<div className='lg:grid lg:grid-cols-[0.8fr_1fr_0.8fr] items-center justify-center flex flex-col gap-10'>
				<div className='w-full flex justify-center text-center lg:justify-end'>
					<h2 className='text-center lg:text-3xl text-2xl lg:w-[80%] lg:mt-72 font-medium lg:text-right'>
						Utilizando nosso
						<Span>aplicativo</Span>, você pode alcançar
						<Span>todo</Span>
						<br />
						esse público-alvo com apenas
						<Span>alguns toques na tela</Span>
					</h2>
				</div>

				<div className='w-full flex items-center justify-center'>
					<Image
						className='w-full'
						src={dash}
						alt='Phone'
						width={700}
						height={700}
					/>
				</div>

				<div>
					<p className='lg:max-w-[40%] text-center font-bold opacity-70 lg:text-left lg:text-2xl align-top lg:mb-72'>NO BRASIL EXISTEM MAIS DE 240 MILHÕES DE SMARTPHONES</p>
				</div>
			</div>

			<LinkButton
				black='true'
				href={CADASTRO_APP_LINK}
				className='lg:p-4 pl-7 pr-7 lg:pl-12 lg:pr-12 flex flex-row items-center gap-5 font-medium lg:text-2xl'>
				<HappySVG 
					className="w-5 lg:w-auto"
				/>
				Teste agora
			</LinkButton>
		</section>
	);
};

export default Informative;
