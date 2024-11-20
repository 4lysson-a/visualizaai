import React from 'react';

export default function ScrollShadow({ color, variant = 'vertical', ...rest }) {
  const _color = color || 'var(--background)';

  const verticalStyle = {
    background: `
      linear-gradient(${_color} 30%, rgba(255, 255, 255, 0)) center top,
      linear-gradient(rgba(255, 255, 255, 0), ${_color} 70%) center bottom,
      radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) center top,
      radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) center bottom
    `,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 40px, 100% 40px, 100% 14px, 100% 14px',
    backgroundAttachment: 'local, local, scroll, scroll',
  };

  const horizontalStyle = {
    background: `
      linear-gradient(90deg, ${_color} 30%, rgba(255, 255, 255, 0)) left center,
      linear-gradient(90deg, rgba(255, 255, 255, 0), ${_color} 70%) right center,
      radial-gradient(farthest-side at 0 50%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) left center,
      radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) right center
    `,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '40px 100%, 40px 100%, 14px 100%, 14px 100%',
    backgroundAttachment: 'local, local, scroll, scroll',
  };

  const style = variant === 'horizontal' ? horizontalStyle : verticalStyle;

  return (
    <div
      {...rest}
      style={{
        overflow: 'auto',
        ...style,
      }}
    />
  );
}