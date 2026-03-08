import React from 'react';
import clsx from 'clsx';

export default function CardImage({ src, alt, className }) {
  return (
    <div className={clsx('card__image', className)}>
      <img src={src} alt={alt || ''} title={alt || ''} style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}
