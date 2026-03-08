import React from 'react';
import Details from '@theme/Details';

export default function Accordion({ children, title, defaultOpen }) {
  return (
    <Details summary={<summary>{title}</summary>} opened={defaultOpen}>
      {children}
    </Details>
  );
}
