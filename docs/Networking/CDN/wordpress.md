# Wordpress

Force CSS reload in WordPress every time when file is updated

In `$ver`:
- check if actual file has changed, and if so 
  - update it’s version number.

```python
wp_enqueue_style(
    'my_custom_style',
    get_stylesheet_directory_uri() . '/sz_style.css',
    array(),
    filemtime( get_stylesheet_directory_uri() . '/sz_style.css')
);
```

This part:

```python
filemtime( get_stylesheet_directory_uri() . '/sz_style.css')
```

will check when the script or stylesheet file you are adding was modified and fetch that time in Unix Timestamp format.

```html
<link rel='stylesheet' id='all-css-2-1' href='https://s0.wp.com/wp-content/themes/pub/baskerville-2/style.css?ver=1617209817' type='text/css' media='all' />
```
In this example, `1617209817` = `Wed Mar 31 2021 16:56:57 GMT+0000`

So the version of the CSS or JavaScript file you enque will be equil to the time it was modified.

Depending on the wordpress version this usage may vary, for eample, it can have some extra parameters or name of vars:

```html
<link rel='stylesheet' id='all-css-2-1' href='https://s0.wp.com/wp-content/themes/pub/baskerville-2/style.css?m=1626265455h&cssminify=yes' type='text/css' media='all' />
```

## References

* [Force CSS and JS refresh in WordPress during development](https://sabrinazeidan.com/force-css-js-refresh-wordpress-development/)
