import React from 'react';
import ReactModal from 'react-modal';

import './style.css';

/**
 * @typedef {import('react-modal').Props} ReactModalProps
 */

/**
 * @typedef {ReactModalProps & {
 *   children: React.ReactNode;
 * }} ModalProps
 */

/**
 * @param {ModalProps} props
 * @returns {JSX.Element}
 */
export default function Modal({ children, onClose, ...rest }) {
  return (
    <ReactModal
      shouldCloseOnEsc={true}
      closeTimeoutMS={60}
      className={'Modal'}
      shouldCloseOnOverlayClick={true}
      overlayClassName={'Overlay'}
      onRequestClose={onClose}
      appElement={document.getElementById('root')}
      portalClassName='ReactModalPortal'
      {...rest}>
      {children}
    </ReactModal>
  );
}
