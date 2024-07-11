import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';
import '@/styles/animations.css';

import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Visualiza ai',
	description: 'Facilite o acesso dos clientes ao seu cardápio!! Ofereça os seus produtos de forma rápida e descomplicada utilizando o nosso aplicativo!!',
	authors: [{ name: 'Grupo Genializa' }],
	keywords: ['visualiza ai', 'cardápio', 'vale do paraiba', 'cardápio digital', 'cardápio online', 'cardápio eletrônico', 'cardápio virtual'],
	viewport: 'width=device-width, initial-scale=1',
	robots: 'index, follow',
	themeColor: '#BB6B4F'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Head>
				<meta
					name='theme-color'
					content='#BB6B4F'
				/>
			</Head>
			<html lang='pt-br'>
				<body className={inter.className}>{children}</body>
			</html>
		</>
	);
}
