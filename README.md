# Kirby Vite UnoCSS Kit

A powerful and performant integration of [Vite](https://vitejs.dev), [UnoCSS](https://github.com/unocss/unocss) and [Kirby](https://getkirby.com). This project seeks to provide a best practice that combines these three solutions while focusing on the developer experience.

## Key Features

- ⚡️ [Vite](https://vitejs.dev) – with all its bells and whistles
- 🎨 [UnoCSS](https://github.com/unocss/unocss) – on-demand atomic CSS engine similar to Tailwind CSS
- 📑 [Module system](./src/modules) inspired by Nuxt
- 💡 [On-demand template loading](./src/templates) based on the current page template
- 🪄 Page reload on PHP snippet/template changes
- 🤹‍♀️ [Pure CSS icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) – use any icon as a single class
- 🔍 [SEO-friendly](https://github.com/johannschopplich/kirby-helpers/blob/main/docs/meta.md) defaults
- 🦾 TypeScript, of course

## Why UnoCSS

**tl;dr**: Write CSS like you always did, while getting the benefits of a utility-first framework.

Let me cite [Anthony Fu](https://antfu.me), the author of UnoCSS:

> UnoCSS is an atomic-CSS engine instead of a framework. Everything is designed with flexibility and performance in mind. In UnoCSS, there are no core utilities; all functionalities are provided via presets.
>
> By default, UnoCSS applies the default preset. Which provides a common superset of the popular utilities-first framework, including Tailwind CSS, Windi CSS, Bootstrap, Tachyons, etc.

For example, for this demo website the following CSS is generated:

```css
/* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.hover\:i-carbon-moon:hover{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}
.i-carbon-sun{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}
.i-carbon-warning{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z'/%3E%3Cpath fill='currentColor' d='M15 8h2v11h-2zm1 14a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}
/* layer: typography */
.prose :where(h1,h2,h3,h4,h5,h6):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-headings);font-weight:600;line-height:1.25;}.prose :where(a):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-links);text-decoration:underline;font-weight:500;}.prose :where(a code):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-links);}.prose :where(p,ul,ol,pre):not(:where(.not-prose,.not-prose *)){margin:1em 0;line-height:1.75;}.prose :where(blockquote):not(:where(.not-prose,.not-prose *)){margin:1em 0;padding-left:1em;font-style:italic;border-left:.25em solid var(--un-prose-borders);}.prose :where(h1):not(:where(.not-prose,.not-prose *)){margin:1rem 0;font-size:2.25em;}.prose :where(h2):not(:where(.not-prose,.not-prose *)){margin:1.75em 0 .5em;font-size:1.75em;}.prose :where(h3):not(:where(.not-prose,.not-prose *)){margin:1.5em 0 .5em;font-size:1.375em;}.prose :where(h4):not(:where(.not-prose,.not-prose *)){margin:1em 0;font-size:1.125em;}.prose :where(img,video):not(:where(.not-prose,.not-prose *)){max-width:100%;}.prose :where(figure,picture):not(:where(.not-prose,.not-prose *)){margin:1em 0;}.prose :where(figcaption):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-captions);font-size:.875em;}.prose :where(code):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-code);font-size:.875em;font-weight:600;font-family:var(--un-prose-font-mono);}.prose :where(:not(pre) > code):not(:where(.not-prose,.not-prose *))::before,.prose :where(:not(pre) > code):not(:where(.not-prose,.not-prose *))::after{content:"`";}.prose :where(pre):not(:where(.not-prose,.not-prose *)){padding:1.25rem 1.5rem;overflow-x:auto;border-radius:.375rem;}.prose :where(pre,code):not(:where(.not-prose,.not-prose *)){white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;hyphens:none;background:transparent;}.prose :where(pre code):not(:where(.not-prose,.not-prose *)){font-weight:inherit;}.prose :where(ol,ul):not(:where(.not-prose,.not-prose *)){padding-left:1.25em;}.prose :where(ol):not(:where(.not-prose,.not-prose *)){list-style-type:decimal;}.prose :where(ol[type="A"]):not(:where(.not-prose,.not-prose *)){list-style-type:upper-alpha;}.prose :where(ol[type="a"]):not(:where(.not-prose,.not-prose *)){list-style-type:lower-alpha;}.prose :where(ol[type="A" s]):not(:where(.not-prose,.not-prose *)){list-style-type:upper-alpha;}.prose :where(ol[type="a" s]):not(:where(.not-prose,.not-prose *)){list-style-type:lower-alpha;}.prose :where(ol[type="I"]):not(:where(.not-prose,.not-prose *)){list-style-type:upper-roman;}.prose :where(ol[type="i"]):not(:where(.not-prose,.not-prose *)){list-style-type:lower-roman;}.prose :where(ol[type="I" s]):not(:where(.not-prose,.not-prose *)){list-style-type:upper-roman;}.prose :where(ol[type="i" s]):not(:where(.not-prose,.not-prose *)){list-style-type:lower-roman;}.prose :where(ol[type="1"]):not(:where(.not-prose,.not-prose *)){list-style-type:decimal;}.prose :where(ul):not(:where(.not-prose,.not-prose *)){list-style-type:disc;}.prose :where(ol > li):not(:where(.not-prose,.not-prose *))::marker,.prose :where(ul > li):not(:where(.not-prose,.not-prose *))::marker,.prose :where(summary):not(:where(.not-prose,.not-prose *))::marker{color:var(--un-prose-lists);}.prose :where(hr):not(:where(.not-prose,.not-prose *)){margin:2em 0;border:1px solid var(--un-prose-hr);}.prose :where(table):not(:where(.not-prose,.not-prose *)){display:block;margin:1em 0;border-collapse:collapse;overflow-x:auto;}.prose :where(tr):not(:where(.not-prose,.not-prose *)):nth-child(2n){background:var(--un-prose-bg-soft);}.prose :where(td,th):not(:where(.not-prose,.not-prose *)){border:1px solid var(--un-prose-borders);padding:.625em 1em;}.prose :where(abbr):not(:where(.not-prose,.not-prose *)){cursor:help;}.prose :where(kbd):not(:where(.not-prose,.not-prose *)){color:var(--un-prose-code);border:1px solid;padding:.25rem .5rem;font-size:.875em;border-radius:.25rem;}.prose :where(details):not(:where(.not-prose,.not-prose *)){margin:1em 0;padding:1.25rem 1.5rem;background:var(--un-prose-bg-soft);}.prose :where(summary):not(:where(.not-prose,.not-prose *)){cursor:pointer;font-weight:600;}
.prose{color:var(--un-prose-body);max-width:65ch;}
/* layer: shortcuts */
.box{margin-left:auto;margin-right:auto;max-width:80rem;border-radius:0.375rem;--un-bg-opacity:1;background-color:rgba(243,244,246,var(--un-bg-opacity));padding:1rem;--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgba(0,0,0,0.05));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
/* layer: default */
.mx-auto{margin-left:auto;margin-right:auto;}
.mb-4{margin-bottom:1rem;}
.h2{height:0.5rem;}
.max-w-screen-md{max-width:768px;}
.flex{display:flex;}
.space-x-3>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(0.75rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(0.75rem * var(--un-space-x-reverse));}
.px-4{padding-left:1rem;padding-right:1rem;}
.py-4{padding-top:1rem;padding-bottom:1rem;}
.text-4xl{font-size:2.25rem;line-height:2.5rem;}
.text-base{font-size:1rem;line-height:1.5rem;}
```

For the story behind this project, see the blog post [Reimagine Atomic CSS](https://antfu.me/posts/reimagine-atomic-css).

## How It Works

When running `npm run dev`:

1. The [@unocss/cli](https://github.com/unocss/unocss/tree/main/packages/cli) is given the glob pattern `site/{snippets,templates}/**/*` via the `uno` npm script. Once started, it scans each directory and collects all occurring utility class names.
   The CSS for these classes will be generated by UnoCSS and the output saved to `src/styles/uno.css`.
   Each time one of the PHP files changes, the UnoCSS will generate the latest `uno.css` accordingly.

2. At the same time, the Vite development server will be started. It builds the JavaScript assets, but also the [`main.scss`](./src/styles/main.scss), which itself uses the `uno.css` in the same directory.
   Vite will watch for JavaScript asset changes or changes in the `main.scss` (or consequently `uno.css`) and manages those with its HMR capabilities.

3. Vite will reload the page, if any of the PHP files get changed, so you won't have to reload the tab yourself when updating your layout.

## Installation

1. Duplicate the [`.env.development.example`](./.env.development.example) as `.env`:

```bash
cp .env.development.example .env
```

2. Install the required Node dependencies:

```bash
npm install
```

3. Install the required Composer dependencies:

```bash
composer install
```

## Configuration

To add custom rules or shortcuts, edit the [`uno.config.ts`](./uno.config.ts).

For example, this project already defines a `box` class via a shortcut:

```
shortcuts: {
  'box': 'max-w-7xl mx-auto bg-gray-100 rounded-md shadow-sm p-4'
}
```

## Usage

### Development

1. Start the Vite development server and watch for file changes accordingly:

```bash
npm run dev
```

2. Run the built-in PHP web server or use a development web server of your choice (like [Laravel Valet](https://laravel.com/docs/10.x/valet)).

```bash
composer start
```

### Production

Build the frontend assets for production:

```bash
npm run build
```

If you have caching enabled, make sure to wipe the cache after each build:

```bash
rm -rf storage/cache/<your-website>
```

### Deployment

> [!NOTE]
> See [ploi-deploy.sh](./scripts/ploi-deploy.sh) for deployment instructions.

> [!TIP]
> For Apache web servers: Some hosting environments require uncommenting `RewriteBase /` in [`.htaccess`](./public/.htaccess) to make site links work.

## License

[MIT](./LICENSE) License © 2021-PRESENT [Johann Schopplich](https://github.com/johannschopplich)
