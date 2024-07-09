import LogoAnimation from '@/components/animations/Logo';
import clsx from 'clsx';
import React, { Suspense } from 'react';
import MenuAnimation from '@/components/shared/Menu/menu-animation';
import { MenuAnimationShimmer } from '@/components/shared/Menu/shimmer';
import Link from 'next/link';

export default function HeaderMobile() {
	return (
		<header className={clsx('lg:hidden', 'pb-28')}>
			<div className='absolute top-0 left-0 w-full p-5 pb-2 pr-6 min-h-24 flex items-center flex-row justify-between'>
				<div className='w-36' />
				<LogoAnimation className='absolute left-2 top-8 w-36 z-50 scale-125' />

				<Link href='#price' className='active:scale-90 active:text-primary font-medium'>Preço</Link>

				<div className='flex items-center flex-row justify-between gap-5'>
					<Suspense fallback={<MenuAnimationShimmer />}>
						<MenuAnimation />
					</Suspense>
				</div>
			</div>
		</header>
	);
}
