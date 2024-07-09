import React from 'react';

import sty from './style.module.css';
import { MODAL_Z_INDEX } from '@/utils/zIndex';

const NativeModal = ({ children, onClose }) => {
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
