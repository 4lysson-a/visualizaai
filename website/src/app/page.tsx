import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Sections/Hero';
import Informative from '@/components/layout/Sections/Informative';
import Insta from '@/components/layout/Sections/Insta';
import QrCode from '@/components/layout/Sections/QrCode';
import TestNow from '@/components/layout/Sections/TestNow';
import Script from 'next/script';

export default function Home() {
	return (
		<>
			<Script
				type='module'
				src='https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs'
			/>

			<Script strategy="lazyOnload" id="clarity-script">
				{`(function(c,l,a,r,i,t,y){
						c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
						t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
						y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
					})(window, document, "clarity", "script", "lkv3zmtuoz");`}
			</Script>
			
			<main className='w-full h-full flex flex-col gap-20'>
				<Header />
				<Hero />
				<Informative />
				<Insta />
				<QrCode />
				<TestNow />
			</main>
			
			<Footer />
		</>
	);
}
