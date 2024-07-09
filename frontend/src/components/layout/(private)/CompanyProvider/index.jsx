import React from 'react';
import Loading from '@/components/shared/Loading';

export default function CompanyProvider({ children }) {
	const isFirstTime = React.useRef(true);

	const [overlook, setOverlook] = React.useState(false);

	React.useEffect(() => {
		if (isFirstTime.current) {
			isFirstTime.current = false;

			async function getData() {
				try {
					const res = [];

					if (res) {
						setOverlook(true);
					}
				} catch (err) {
					console.log(err);
				}
			}

			getData();
			return;
		}
	}, []);

	if (overlook) {
		return children;
	}

	return <Loading />;
}
