import { QrCodeAnimation } from '@/components/animations/Qrcode';
import Image from 'next/image';

import user from '@/assets/img/user.png';
import Button, { LinkButton } from '@/components/shared/Button';
import { CADASTRO_APP_LINK } from '@/constants/links';

const Animation = () => (
	<div className='w-full flex justify-center items-center lg:-mb-24 -mb-10'>
		<div className='max-w-[600px]'>
			<QrCodeAnimation />
		</div>
	</div>
);

export default function QrCode() {
	return (
		<section className='w-full flex flex-col gap-14 p-0 mb-32'>
			<div className='flex flex-col gap-2'>
				<Animation />
				<div className='flex flex-col pl-5 pr-5 gap-1 w-full items-center'>
					<h2 className='font-bold text-center text-4xl lg:text-5xl'>Facilitar a vida do cliente ?</h2>
					<h3 className='text-primary text-center text-4xl font-bold lg:text-5xl'>Esse é o nosso objetivo !! </h3>
				</div>
			</div>

			<div className='bg-black rounded-[30px] lg:rounded-[60px] w-full h-full lg:p-20 flex gap-10 lg:gap-0 flex-col-reverse lg:grid grid-cols-2 items-center justify-center'>
				<div className='w-full items-center justify-center flex lg:-mb-64 -mb-24'>
					<Image
						src={user}
						alt='Qr Code'
						width={1280}
						height={1280}
						objectFit='cover'
						objectPosition='center'
					/>
				</div>

				<div className='w-full items-center justify-center flex flex-col gap-10 p-5 pt-14 lg:p-0'>
					<h2 className='text-white text-2xl text-center lg:text-left lg:text-5xl lg:leading-[70px]'>
						Através do QR code o seu cliente consegue ver tudo que está disponível no seu cardápio sem esforço nenhum, é só mirar a câmera e aproveitar os produtos
					</h2>

          <LinkButton href={CADASTRO_APP_LINK} className='w-full lg:p-5 font-bold lg:text-2xl'>Testar Agora !</LinkButton>
				</div>
			</div>
		</section>
	);
}
