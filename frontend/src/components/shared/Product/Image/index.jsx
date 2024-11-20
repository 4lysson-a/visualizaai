import React from 'react';
import ImagePreview from '@/components/shared/ImagePreview';

export default function Image({ product, ...rest }) {
  if (product?.get('image') === undefined) {
    return <div className='w-[40%] h-0 object-cover' />;
  }

  return (
    <ImagePreview
      alt={product?.get('name')}
      source={product?.get('image').url()}
      {...rest}
    />
  );
}
