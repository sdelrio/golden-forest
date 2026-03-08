import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { Icon } from '@iconify/react';

export default function Card({ children, title, icon, href, shadow, className }) {
  const { siteConfig } = useDocusaurusContext();
  const { pathname } = useLocation();
  const baseUrl = siteConfig.baseUrl;

  const getLinkTo = (target) => {
    if (!target || !isInternalUrl(target)) {
      return target;
    }

    if (target.startsWith('/')) {
      return useBaseUrl(target);
    }

    // Relative path resolution for trailingSlash: true
    // If pathname ends in / (and isn't root), relative links like './foo' 
    // resolve as children. We want them as siblings.
    if (siteConfig.trailingSlash && pathname !== baseUrl && pathname.endsWith('/')) {
      // If it already starts with ../ don't add another one
      if (target.startsWith('../')) {
        return target;
      }
      return `../${target.replace(/^\.\//, '')}`;
    }

    return target;
  };

  const linkTo = getLinkTo(href);
  const CardContainer = href ? Link : 'div';

  const content = (
    <>
      {(title || icon) && (
        <div className="card__header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {icon && (
              <span style={{ marginRight: '0.5rem', display: 'flex', alignItems: 'center' }}>
                <Icon icon={icon.includes(':') ? icon : `mdi:${icon}`} fontSize="1.5rem" />
              </span>
            )}
            {title && <h3 style={{ margin: 0 }}>{title}</h3>}
          </div>
        </div>
      )}
      {title ? <div className="card__body">{children}</div> : children}
    </>
  );

  return (
    <CardContainer
      to={linkTo}
      className={clsx('card', shadow && `shadow--${shadow}`, className)}
      style={href ? { textDecoration: 'none', color: 'inherit', display: 'block' } : {}}
    >
      {content}
    </CardContainer>
  );
}
