import React from 'react';
import clsx from 'clsx';

export default function CardGroup({ children, cols = 2, className }) {
  return (
    <div className={clsx('row', className)}>
      {React.Children.map(children, (child) => (
        <div className={clsx('col', cols === 2 ? 'col--6' : 'col--4')}>
          <div style={{ height: '100%', marginBottom: '1rem' }}>
            {child}
          </div>
        </div>
      ))}
    </div>
  );
}
