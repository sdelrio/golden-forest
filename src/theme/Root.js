import React from 'react';

export default function Root({ children }) {
  return (
    <>
      <svg
        style={{ height: 0, width: 0, position: 'absolute', visibility: 'hidden' }}
        width="0" height="0"
        aria-hidden="true"
      >
        <defs>
          <filter id="paper-texture">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="5"
              result="noise"
            />
            <feDiffuseLighting
              in="noise"
              lightingColor="#fff9e6"
              surfaceScale="2"
              result="texture"
            >
              <feDistantLight azimuth="45" elevation="60" />
            </feDiffuseLighting>
            <feComposite
              in="texture"
              in2="SourceGraphic"
              operator="multiply"
            />
          </filter>
          <filter id="wavy1">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              seed="7"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="10"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      {children}
    </>
  );
}
