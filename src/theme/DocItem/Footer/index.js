import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import OriginalFooter from '@theme-original/DocItem/Footer';
import BookmarkButton from '../../../components/BookmarkButton/BookmarkButton';

export default function DocItemFooterWrapper(props) {
  const {metadata} = useDoc();
  const slug = metadata.id;

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'flex-end', margin: '1rem 0'}}>
        <BookmarkButton slug={slug} />
      </div>
      <OriginalFooter {...props} />
    </>
  );
}
