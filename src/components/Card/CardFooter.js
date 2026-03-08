import React from 'react';
import clsx from 'clsx';

export default function CardFooter({ children, className }) {
  return (
    <div className={clsx('card__footer', className)}>
      {children}
    </div>
  );
}
