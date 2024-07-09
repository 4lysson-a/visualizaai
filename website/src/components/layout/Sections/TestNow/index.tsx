import Image from 'next/image';

import oldman from '@/assets/img/oldman.png';
export default function TestNow(){
  return (
    <section className='mb-2' id="price">
      <div className="w-full flex flex-col gap-14 justify-center items-center">
        <div className="w-full bg-[rgba(187,107,79,100)] p-2 rounded-3xl flex items-center justify-center h-20">
        <h2 className="text-white text-lg font-bold text-center " >
        Teste agora o nosso aplicativo !
        </h2>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-14 justify-center items-center">
          <span className='max-w-60 font-bold text-3xl'>
          Oferecemos <span className='text-amber-800' >7 dias</span> de teste gratuito sem a necessidade de adicionar cartões de crédito
          </span>
          <Image
						src={oldman}
						alt='oldman'
						width={200}
						height={200}
						
					/>
        </div>
        <span className='text-center font-extrabold text-xl max-w-xl lg:text-2xl'>Depois pague apenas 9,99 para ter acesso a todos os recursos por tempo ilimitado</span>
      </div>
    </section>
  )
}
