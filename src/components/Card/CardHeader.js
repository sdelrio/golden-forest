import React from 'react';
import clsx from 'clsx';
import { Icon } from '@iconify/react';

export default function CardHeader({ children, className, icon }) {
  return (
    <div className={clsx('card__header', className)}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {icon && (
          <span style={{ marginRight: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <Icon icon={icon.includes(':') ? icon : `mdi:${icon}`} fontSize="1.5rem" />
          </span>
        )}
        <h3 style={{ margin: 0 }}>{children}</h3>
      </div>
    </div>
  );
}
