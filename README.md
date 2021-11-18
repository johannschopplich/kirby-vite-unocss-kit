# Kirby Vite UnoCSS Kit

A powerful and performant integration of [Vite](https://vitejs.dev), [UnoCSS](https://github.com/antfu/unocss) and [Kirby](https://getkirby.com). This project seeks to provide a best practice that combines these three solutions while focusing on the development experience.

## Key Features

- ⚡️ [Vite](https://vitejs.dev) – HMR and all the bells and whistles
- 📑 [Module system](./src/modules) inspired by Nuxt.js
- 💡 [On-demand template loading](./src/templates)
- 🪄 Page reload on snippet/template changes
- 🎨 [UnoCSS](https://github.com/antfu/unocss) – on-demand atomic CSS engine similar to Tailwind CSS
- 🔍 [SEO-friendly](https://github.com/johannschopplich/kirby-extended/blob/main/docs/meta.md) defaults
- 🦾 TypeScript, of course

## Why UnoCSS

tl;dr: Write your CSS like you prefer to and pull in only the utilities you need on top.

Let me cite Anthony Fu:

> UnoCSS is an atomic-CSS engine instead of a framework. Everything is designed with flexibility and performance in mind. In UnoCSS, there are no core utilities; all functionalities are provided via presets.
>
> By default, UnoCSS applies the default preset. Which provides a common superset of the popular utilities-first framework, including Tailwind CSS, Windi CSS, Bootstrap, Tachyons, etc.

For example, for this kit only the following utilities are generated:

```css
/* layer: shortcuts */
.box{padding:1rem;margin-left:auto;margin-right:auto;--un-bg-opacity:1;background-color:rgba(244,244,245,var(--un-bg-opacity));border-radius:0.375rem;--un-shadow-color:0,0,0;--un-shadow:0 1px 2px 0 rgba(var(--un-shadow-color), 0.05);box-shadow:var(--un-ring-offset-shadow, 0 0 #0000), var(--un-ring-shadow, 0 0 #0000), var(--un-shadow);max-width:7xl;}
/* layer: default */
.px-4{padding-left:1rem;padding-right:1rem;}
.py-4{padding-top:1rem;padding-bottom:1rem;}
.mx-auto{margin-left:auto;margin-right:auto;}
.mb-4{margin-bottom:1rem;}
.max-w-screen-md{max-width:768px;}
```

You may also want to give this blog post a read [Reimagine Atomic CSS](https://antfu.me/posts/reimagine-atomic-css) for the story behind.

## Installation

1. Duplicate the [`.env.example`](.env.example) as `.env` and optionally adapt its values depending on your environment:

```bash
cp .env.example .env
```

1. Install the required dependencies:

```bash
npm install
composer install
```

## Configuration

To add custom rules or shortcuts, edit the [`unocss.config.ts`](./unocss.config.ts).

For example, this project already defines a `box` class via a shortcut:

```js
shortcuts: {
  'box': 'max-w-7xl mx-auto bg-gray-100 rounded-md shadow-sm p-4'
}
```

## Usage

### Development

1. Build assets and watch for changes accordingly:

```bash
npm run dev
```

1. Run the PHP built-in web server or use a development web server of your choice (like Laravel Valet).

```bash
composer start
```

### Production

Build the frontend assets (CSS & JS files):

```bash
npm run build
```

If you have caching enabled, make sure to wipe the cache after each build:

```bash
rm -rf storage/cache/<your-website>
```

### Deployment

1. Deploy whole repository on your server.
2. Duplicate [`.env.example`](.env.example) as `.env`.
3. Install dependencies:
   - `npm install`
   - `composer install`
4. Build frontend assets:
   - `npm run build`
5. Point your web server to the `public` folder.
6. For Apache web servers: Some hosting environments require to uncomment `RewriteBase /` in [`.htaccess`](public/.htaccess) to make site links work.

## License

[MIT](https://opensource.org/licenses/MIT)
