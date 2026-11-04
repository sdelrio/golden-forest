import React from 'react';
import resolveIcon from './icons';

// @iconify/react is client-only, so render the bundled icon data inline here to
// get the SVG into the static build.
export default function CardIcon({ icon }) {
  const data = resolveIcon(icon);

  if (!data) {
    return null;
  }

  return (
    <span style={{ marginRight: '0.5rem', display: 'flex', alignItems: 'center' }}>
      <svg
        viewBox={`0 0 ${data.width || 24} ${data.height || 24}`}
        width="1.5rem"
        height="1.5rem"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: data.body }}
      />
    </span>
  );
}
