import React from 'react';
import { sty } from '@/utils';
import ReactDOM from 'react-dom';
import useImagePreview from './useImagePreview';
import { useBackButton } from '@/hooks/useBackButton';
import { IMAGE_PREVIEW } from '@/utils/zIndex';

function PortalImageExpanded({ children }) {
  return ReactDOM.createPortal(<div className='PortalImageExpanded'>{children}</div>, document.getElementById('preview-img'));
}

export default function ImagePreview({ source, alt, ...rest }) {
  const { backdropRef, expanded, handleClose, handleOpen } = useImagePreview();

  useBackButton(() => {
    handleClose();
  }, [expanded]);

  if (source) {
    return (
      <>
        <img
          alt={alt}
          src={source}
          onClick={handleOpen}
          className={sty(
            'image-preview',
            !expanded && 'active:scale-75 duration-200 w-[30%] min-w-20 max-w-32 h-20 object-cover rounded-xl shadow-sm max-h-32 bg-slate-500 animate-fade-up animate-duration-200',
            expanded && 'hidden'
          )}
          {...rest}
        />

        {expanded && (
          <PortalImageExpanded>
            <div
              style={{ zIndex: IMAGE_PREVIEW }}
              className={sty('fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-80')}>
              <p
                style={{ zIndex: IMAGE_PREVIEW }}
                className='absolute top-10 right-10 z-50 text-2xl text-primary font-bold bg-background w-10 h-10 items-center flex justify-center rounded-full opacity-70'>
								x
              </p>
              <img
                alt={alt}
                src={source}
                className={sty(!expanded && 'scale-0', 'delay-500 max-w-full max-h-[90%] object-contain duration-200 animate-duration-200 scale-100')}
              />
              <div ref={backdropRef} />
            </div>
          </PortalImageExpanded>
        )}

        {expanded && (
          <style>
            {`
						body *:not(.PortalImageExpanded) {
							pointer-events: none;
						}
						`}
          </style>
        )}
      </>
    );
  }

  return <div className='w-[40%] object-cover shadow-xl h-full bg-slate-500 animate-pulse' />;
}
