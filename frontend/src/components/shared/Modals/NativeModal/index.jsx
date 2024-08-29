import React from 'react';

import sty from './style.module.css';
import { MODAL_Z_INDEX } from '@/utils/zIndex';

const NativeModal = ({ children, onClose, isOpen }) => {
	React.useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [isOpen])

	React.useEffect(() => {
		return () => {
			document.body.style.overflow = 'auto';
		}
	}, []);

	return (
		<>
			<div style={{ zIndex: MODAL_Z_INDEX }} className={sty.modal}>{children}</div>
			<div
				onClick={onClose}
				className={sty.backdrop}
			/>
		</>
	);
};

export default NativeModal;
