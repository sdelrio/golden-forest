# Install rehype-extended-table

To install `rehype-extended-table` in Docusaurus, follow these steps:

1. Install the package using your preferred package manager:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm install rehype-extended-table --save-dev
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add rehype-extended-table
```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">

```bash
pnpm add rehype-extended-table
```

  </TabItem>
</Tabs>

2. In your `docusaurus.config.js` file, import the plugin and add it to the `rehypePlugins` array within the `docs` configuration. Use the `[plugin, options]` syntax if you need to pass configuration options. For example:

```js
import { rehypeExtendedTable } from 'rehype-extended-table';


const config = {
  (...)
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          rehypePlugins: [rehypeExtendedTable],
        },
      })
    (...)
    ],
  ],
}
```

3. If you need to customize the behavior, refer to the plugin's documentation for available options and pass them as the second element in the array.

4. Note that `rehype-extended-table` enables advanced table features such as multi-line `cells`, `colspan`, and `rowspan` in Docusaurus, which are not supported by standard Markdown tables.

:::info
This plugin is particularly useful for creating complex tables with enhanced formatting capabilities.
:::

:::tip
The `rehype-extended-table` plugin supports table syntax allowing `colspan` and `rowspan` in Markdown, which is particularly useful when working with complex tables in Docusaurus projects.

- It is recommended over `remark-extended-table` in Docusaurus because the latter requires injecting handlers into `remark-rehype`, a functionality not directly supported in Docusaurus configurations.

- Using `rehype-extended-table` avoids compatibility issues and provides a straightforward way to enable extended table features.
:::

## Samples

A sample usage of `rehype-extended-table` in Markdown includes support for complex table cells with multiple lines and embedded code blocks or other Markdown elements:

| Head 1 | Head 2 | Head 3 |
| :--- | :--- | :--- |
| (2x1) | > | Cell |
| (1x2) | Cell | Cell |
| ^ | Cell | Cell |

## Referneces

- [rehype-extended-table](https://github.com/show-docs/rehype-extended-table)
- [Docusaurus](https://docusaurus.io/)
