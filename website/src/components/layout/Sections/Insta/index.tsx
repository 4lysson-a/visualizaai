import Image from 'next/image';
import InstaSVG from '@/assets/svg/Insta';
import { LinkButton } from '@/components/shared/Button';
import { CADASTRO_APP_LINK } from '@/constants/links';

const Span = ({ ...rest }) => <span className='text-insta_primary font-bold'>{rest.children}</span>;

export default function Insta() {
	return (
		<section className='flex w-full items-center justify-center'>
			<div className='lg:w-[60%] w-full flex flex-col-reverse lg:grid grid-cols-2 gap-10 h-full items-center'>
				<div className='flex lg:h-[80%] flex-col gap-10 lg:gap-1 justify-around'>
					<h3 className='invisible h-0 lg:h-auto lg:visible tracking-[8px] text-xl text-insta_primary font-bold mb-5'>#MANDAOLINK</h3>

					<div className='flex flex-col gap-5 lg:gap-3'>
						<h2 className='text-5xl leading-[60px]'>
							O nosso aplicativo é <Span>perfeito</Span> para as <Span>redes sociais</Span>
						</h2>
						<p className='text-xl tracking-[3px] leading-[40px] lg:leading-[30px]'>
							Através do nosso app você consegue gerar um link pra o seu cardápio que pode ser <Span>compartilhado</Span> em qualquer <Span>rede social</Span>
						</p>
					</div>

					<LinkButton
						style={{ background: 'var(--insta-bg-gradient)' }}
						href={CADASTRO_APP_LINK}
						className='p-5 rounded-full font-bold text-white'>
						Teste agora!!!
					</LinkButton>
				</div>

				<div className='rounded-[30px] lg:rounded-[40px] w-full h-full relative lg:w-[400px] lg:h-[600px] overflow-hidden'>
					<Image
						width={800}
						height={600}
						alt='Instagram'
						content='Instagram Image'
						className='w-full h-full'
						src='/cake.jpg'
					/>

					<InstaSVG className='absolute top-7 right-7 w-14 h-14' />
				</div>
				<h3 className='lg:invisible lg:h-0 visible tracking-[8px] text-xl text-insta_primary font-bold mb-5'>#MANDAOLINK</h3>
			</div>
		</section>
	);
}
