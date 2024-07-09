'use client';

import React from 'react';
import styles from './styles.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const StartNow = () => {
	if (typeof window != 'undefined' && window.innerWidth < 912) {
		return (
			<>
				<div
					className={styles.title}
					id='PRECOS'>
					<h2 className='lato'> COMEÇE AGORA</h2>
					<p className='lato'>
						Nossos planos oferecem 7 dias de
						<span> teste grátis</span>
					</p>
				</div>
				<Swiper
					loop={true}
					autoplay={true}
					centeredSlides={true}
					spaceBetween={60}
					pagination={{ clickable: true }}
					modules={[Pagination]}
					className={styles.swiper}>
					<SwiperSlide className={styles.swiper_monthly}>
						<h3 className='lato'>MENSAL</h3>
						<ul className='lato'>
							<li>CARDÁPIO DIGITAL 24HR</li>
							<li>GERADOR DE QR CODE</li>
							<li>LINK PARA REDES SOCIAIS</li>
							<li>DOWNLOAD DO CARDÁPIO</li>
							<li>DOWNLOAD DO QR CODE</li>
						</ul>
						<h3>R$10,00</h3>
						<button>TESTAR</button>
					</SwiperSlide>

					<SwiperSlide className={styles.swiper_yearly}>
						<h3 className='lato'>ANUAL</h3>
						<ul className='lato'>
							<li>CARDÁPIO DIGITAL 24HR</li>
							<li>GERADOR DE QR CODE</li>
							<li>LINK PARA REDES SOCIAIS</li>
							<li>DOWNLOAD DO CARDÁPIO</li>
							<li>DOWNLOAD DO QR CODE</li>
						</ul>
						<h3>R$100,00</h3>
						<button>TESTAR</button>
					</SwiperSlide>
				</Swiper>
			</>
		);
	}

	return (
		<>
			<div
				className={styles.container}
				id='PRECOS'>
				<div className={styles.title}>
					<h2 className='lato'>COMEÇE AGORA</h2>
					<p className='lato'>
						Nossos planos oferecem 7 dias de
						<span> teste grátis</span>
					</p>
				</div>

				<div className={styles.cards}>
					<div className={styles.monthly}>
						<h3 className='lato'>MENSAL</h3>
						<ul className='lato'>
							<li>CARDÁPIO DIGITAL 24HR</li>
							<li>GERADOR DE QR CODE</li>
							<li>LINK PARA REDES SOCIAIS</li>
							<li>DOWNLOAD DO CARDÁPIO</li>
							<li>DOWNLOAD DO QR CODE</li>
						</ul>
						<h3>R$10,00</h3>
						<button>TESTAR</button>
					</div>
					<div>
						<h3 className='lato'>
							<span>44% DE </span>
							DESCONTO
						</h3>
						<div className={styles.yearly}>
							<h3 className='lato'>ANUAL</h3>
							<ul className='lato'>
								<li>CARDÁPIO DIGITAL 24HR</li>
								<li>GERADOR DE QR CODE</li>
								<li>LINK PARA REDES SOCIAIS</li>
								<li>DOWNLOAD DO CARDÁPIO</li>
								<li>DOWNLOAD DO QR CODE</li>
							</ul>
							<h3>R$100,00</h3>
							<button>TESTAR</button>
						</div>
						<p className='lato'>Com esse plano você economiza dois meses de assinatura </p>
					</div>
				</div>
			</div>
		</>
	);
};

export default StartNow;
