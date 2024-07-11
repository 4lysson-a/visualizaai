import HeaderDesktop from './Desktop';
import HeaderMobile from './Mobile';

export default function Header() {
	return (
		<div className='-mt-48'>
			<HeaderMobile />
			<HeaderDesktop />
		</div>
	);
}
