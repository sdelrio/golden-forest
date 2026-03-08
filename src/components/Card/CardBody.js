import React from 'react';
import clsx from 'clsx';

export default function CardBody({ children, className }) {
  return (
    <div className={clsx('card__body', className)}>
      {children}
    </div>
  );
}
