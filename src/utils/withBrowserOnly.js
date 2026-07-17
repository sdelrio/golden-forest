import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

/**
 * Higher-order component that wraps a component in Docusaurus BrowserOnly.
 * Eliminates the repeated BrowserOnly + render-function boilerplate.
 *
 * @param {React.ComponentType} WrappedComponent - The component to wrap
 * @param {Object} [options]
 * @param {React.ReactNode} [options.fallback=null] - Fallback UI during SSR
 * @returns {React.FC}
 */
export default function withBrowserOnly(WrappedComponent, { fallback = null } = {}) {
  function WithBrowserOnly(props) {
    return (
      <BrowserOnly fallback={fallback}>
        {() => <WrappedComponent {...props} />}
      </BrowserOnly>
    );
  }

  WithBrowserOnly.displayName = `withBrowserOnly(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithBrowserOnly;
}
