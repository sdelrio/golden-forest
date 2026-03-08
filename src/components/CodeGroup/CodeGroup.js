import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function CodeGroup({ children }) {
  // Filter out whitespace-only children that MDX might inject
  const items = React.Children.toArray(children).filter(
    (child) => typeof child !== 'string' || child.trim() !== ''
  );

  return (
    <Tabs>
      {items.map((child, index) => {
        // Try to extract a label from the code block's title or metastring
        const label = child.props?.title || child.props?.children?.props?.title || `Tab ${index + 1}`;
        const value = `tab-${index}`;

        return (
          <TabItem key={index} value={value} label={label}>
            {child}
          </TabItem>
        );
      })}
    </Tabs>
  );
}
