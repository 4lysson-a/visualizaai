import sty from '@/utils/sty';
import Link from 'next/link';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	outline?: string;
	black?: string;
}

export default function Button({ ...rest }: Props) {
	return (
		<button
			{...rest}
			className={sty(
				'bg-primary border border-transparent text-white p-2 pl-3 pr-3 rounded-xl',
				'hover:bg-secondary hover:border-secondary hover:text-white !active:scale-90',
				rest.outline && 'border border-[#ABABAB] bg-transparent text-[#787878]',
				rest.black && 'bg-black text-white',
				rest.className
			)}>
			{rest.children}
		</button>
	);
}

export function LinkButton({ ...rest }) {
	return (
		<Link
			target='_blank'
			href={rest.href}
			{...rest}
			className={sty(
				'text-center',
				'bg-primary border border-transparent text-white p-2 pl-3 pr-3 rounded-xl',
				'hover:bg-secondary hover:border-secondary hover:text-white !active:scale-90',
				rest.outline && 'border border-[#ABABAB] bg-transparent text-[#787878]',
				rest.black && 'bg-black text-white',
				rest.className
			)}>
			{rest.children}
		</Link>
	);
}
