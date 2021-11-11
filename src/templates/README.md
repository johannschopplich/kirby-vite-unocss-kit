# Templates

Modules in this directory with the following syntax will be chunked and loaded on-demand for corresponding Kirby templates.

```ts
export default () => {
  // Do something
};
```

## How?

We simply add the current template name to the body tag and then lazily import the asset chunk which name equals the template name.

```php
<body data-template="<?= $page->intendedTemplate()->name() ?>">
```
