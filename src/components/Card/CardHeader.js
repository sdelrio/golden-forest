import React from 'react';
import clsx from 'clsx';
import CardIcon from './CardIcon';

export default function CardHeader({ children, className, icon }) {
  return (
    <div className={clsx('card__header', className)}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CardIcon icon={icon} />
        <h3 style={{ margin: 0 }}>{children}</h3>
      </div>
    </div>
  );
}
