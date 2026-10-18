# Kirby Vite UnoCSS Kit

A [Kirby](https://getkirby.com) starter kit with [Vite](https://vitejs.dev) and [UnoCSS](https://github.com/unocss/unocss) pre-wired – a sensible baseline for new projects.

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

To quote [Anthony Fu](https://antfu.me), the author of UnoCSS:

> UnoCSS is an atomic-CSS engine instead of a framework. Everything is designed with flexibility and performance in mind. In UnoCSS, there are no core utilities; all functionalities are provided via presets.
>
> By default, UnoCSS applies the default preset. Which provides a common superset of the popular utilities-first framework, including Tailwind CSS, Windi CSS, Bootstrap, Tachyons, etc.

For this kit's demo, UnoCSS generates the following CSS:

```css
/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-bg-opacity:100%;--un-space-x-reverse:initial;}}
@property --un-bg-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
@property --un-inset-ring-color{syntax:"*";inherits:false;}
@property --un-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000;}
@property --un-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000;}
@property --un-inset-shadow-color{syntax:"*";inherits:false;}
@property --un-ring-color{syntax:"*";inherits:false;}
@property --un-ring-inset{syntax:"*";inherits:false;}
@property --un-ring-offset-color{syntax:"*";inherits:false;}
@property --un-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000;}
@property --un-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0px;}
@property --un-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000;}
@property --un-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000;}
@property --un-shadow-color{syntax:"*";inherits:false;}
@property --un-space-x-reverse{syntax:"*";inherits:false;initial-value:0;}
/* layer: theme */
:root, :host {
--container-7xl: 80rem;
--radius-md: 0.375rem;
--spacing: 0.25rem;
--colors-gray-100: oklch(96.7% 0.003 264.542);
--text-base-fontSize: 1rem;
--text-base-lineHeight: 1.5rem;
--text-4xl-fontSize: 2.25rem;
--text-4xl-lineHeight: 2.5rem;
--font-sans: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
--font-mono: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
--default-font-family: var(--font-sans);
--default-monoFont-family: var(--font-mono);
}
/* layer: base */
/*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
  2. Remove default margins and padding
  3. Reset all borders.
*/

*,
::after,
::before,
::backdrop,
::file-selector-button {
  box-sizing: border-box; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 2 */
  border: 0 solid; /* 3 */
}

/*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured `sans` font-family by default.
  5. Use the user's configured `sans` font-feature-settings by default.
  6. Use the user's configured `sans` font-variation-settings by default.
  7. Disable tap highlights on iOS.
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  tab-size: 4; /* 3 */
  font-family: var(
    --default-font-family,
    ui-sans-serif,
    system-ui,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji'
  ); /* 4 */
  font-feature-settings: var(--default-font-featureSettings, normal); /* 5 */
  font-variation-settings: var(--default-font-variationSettings, normal); /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Reset the default border style to a 1px solid border.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
  Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

/*
  Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
  Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
}

/*
  Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
  1. Use the user's configured `mono` font-family by default.
  2. Use the user's configured `mono` font-feature-settings by default.
  3. Use the user's configured `mono` font-variation-settings by default.
  4. Correct the odd `em` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: var(
    --default-monoFont-family,
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    'Liberation Mono',
    'Courier New',
    monospace
  ); /* 1 */
  font-feature-settings: var(--default-monoFont-featureSettings, normal); /* 2 */
  font-variation-settings: var(--default-monoFont-variationSettings, normal); /* 3 */
  font-size: 1em; /* 4 */
}

/*
  Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
  Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
  Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
  Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
  Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
  Make lists unstyled by default.
*/

ol,
ul,
menu {
  list-style: none;
}

/*
  1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
  2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
      This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/*
  1. Inherit font styles in all browsers.
  2. Remove border radius in all browsers.
  3. Remove background color in all browsers.
  4. Ensure consistent opacity for disabled states in all browsers.
*/

button,
input,
select,
optgroup,
textarea,
::file-selector-button {
  font: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  border-radius: 0; /* 2 */
  background-color: transparent; /* 3 */
  opacity: 1; /* 4 */
}

/*
  Restore default font weight.
*/

:where(select:is([multiple], [size])) optgroup {
  font-weight: bolder;
}

/*
  Restore indentation.
*/

:where(select:is([multiple], [size])) optgroup option {
  padding-inline-start: 20px;
}

/*
  Restore space after button.
*/

::file-selector-button {
  margin-inline-end: 4px;
}

/*
  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
*/

::placeholder {
  opacity: 1;
}

/*
  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not
  crash when using `color-mix(…)` with `currentcolor`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)
*/

@supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or
  (contain-intrinsic-size: 1px) /* Safari 17+ */ {
  ::placeholder {
    color: color-mix(in oklab, currentcolor 50%, transparent);
  }
}

/*
  Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
  Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
  1. Ensure date/time inputs have the same height when empty in iOS Safari.
  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
*/

::-webkit-date-and-time-value {
  min-height: 1lh; /* 1 */
  text-align: inherit; /* 2 */
}

/*
  Prevent height from changing on date/time inputs in macOS Safari when the input is set to `display: block`.
*/

::-webkit-datetime-edit {
  display: inline-flex;
}

/*
  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.
*/

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-datetime-edit,
::-webkit-datetime-edit-year-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-minute-field,
::-webkit-datetime-edit-second-field,
::-webkit-datetime-edit-millisecond-field,
::-webkit-datetime-edit-meridiem-field {
  padding-block: 0;
}

/*
  Center dropdown marker shown on inputs with paired `<datalist>`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)
*/

::-webkit-calendar-picker-indicator {
  line-height: 1;
}

/*
  Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
  Correct the inability to style the border radius in iOS Safari.
*/

button,
input:where([type='button'], [type='reset'], [type='submit']),
::file-selector-button {
  appearance: button;
}

/*
  Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
  Make elements with the HTML hidden attribute stay hidden by default.
*/

[hidden]:where(:not([hidden~='until-found'])) {
  display: none !important;
}
/* layer: icons */
.i-carbon-sun{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6M5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}
.i-carbon-warning{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12'/%3E%3Cpath fill='currentColor' d='M15 8h2v11h-2zm1 14a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}
.hover\:i-carbon-moon:hover{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M13.503 5.414a15.076 15.076 0 0 0 11.593 18.194a11.1 11.1 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1 1 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.07 13.07 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}
/* layer: typography */
:is(.prose){color:var(--un-prose-body);max-width:65ch;:where(p):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:1.25em;margin-bottom:1.25em;}:where([class~="lead"]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:var(--un-prose-lead);font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em;}:where(a):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:var(--un-prose-links);text-decoration:underline;font-weight:500;}:where(strong):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:var(--un-prose-bold);font-weight:600;}:where(a strong):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:inherit;}:where(blockquote strong):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:inherit;}:where(thead th strong):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:inherit;}:where(ol):not(:where([class~="not-prose"],[class~="not-prose"] *)) {list-style-type:decimal;margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em;}:where(ol[type="A"]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {list-style-type:upper-alpha;}:where(ol[type="a"]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {list-style-type:lower-alpha;}:where(ol[type="A" s]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {list-style-type:upper-alpha;}:where(ol[type="a" s]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {list-style-type:lower-alpha;}:where(ol[type="I"]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {list-style-type:upper-roman;}:where(ol[type="i"]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {list-style-type:lower-roman;}:where(ol[type="I" s]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {list-style-type:upper-roman;}:where(ol[type="i" s]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {list-style-type:lower-roman;}:where(ol[type="1"]):not(:where([class~="not-prose"],[class~="not-prose"] *)) {list-style-type:decimal;}:where(ul):not(:where([class~="not-prose"],[class~="not-prose"] *)) {list-style-type:disc;margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em;}:where(ol > li):not(:where([class~="not-prose"],[class~="not-prose"] *))::marker {font-weight:400;color:var(--un-prose-counters);}:where(ul > li):not(:where([class~="not-prose"],[class~="not-prose"] *))::marker {color:var(--un-prose-bullets);}:where(dt):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:var(--un-prose-headings);font-weight:600;margin-top:1.25em;}:where(hr):not(:where([class~="not-prose"],[class~="not-prose"] *)) {border-color:var(--un-prose-hr);border-top-width:1px;margin-top:3em;margin-bottom:3em;}:where(blockquote):not(:where([class~="not-prose"],[class~="not-prose"] *)) {font-weight:500;font-style:italic;color:var(--un-prose-quotes);border-inline-start-width:0.25rem;border-inline-start-color:var(--un-prose-quote-borders);quotes:"\201C""\201D""\2018""\2019";margin-top:1.6em;margin-bottom:1.6em;padding-inline-start:1em;}:where(blockquote p:first-of-type):not(:where([class~="not-prose"],[class~="not-prose"] *))::before {content:open-quote;}:where(blockquote p:last-of-type):not(:where([class~="not-prose"],[class~="not-prose"] *))::after {content:close-quote;}:where(h1):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:var(--un-prose-headings);font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:0.8888889em;line-height:1.1111111;}:where(h1 strong):not(:where([class~="not-prose"],[class~="not-prose"] *)) {font-weight:900;color:inherit;}:where(h2):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:var(--un-prose-headings);font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333;}:where(h2 strong):not(:where([class~="not-prose"],[class~="not-prose"] *)) {font-weight:800;color:inherit;}:where(h3):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:var(--un-prose-headings);font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:0.6em;line-height:1.6;}:where(h3 strong):not(:where([class~="not-prose"],[class~="not-prose"] *)) {font-weight:700;color:inherit;}:where(h4):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:var(--un-prose-headings);font-weight:600;margin-top:1.5em;margin-bottom:0.5em;line-height:1.5;}:where(h4 strong):not(:where([class~="not-prose"],[class~="not-prose"] *)) {font-weight:700;color:inherit;}:where(img):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:2em;margin-bottom:2em;}:where(picture):not(:where([class~="not-prose"],[class~="not-prose"] *)) {display:block;margin-top:2em;margin-bottom:2em;}:where(video):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:2em;margin-bottom:2em;}:where(kbd):not(:where([class~="not-prose"],[class~="not-prose"] *)) {font-weight:500;font-family:inherit;color:var(--un-prose-kbd);box-shadow:0 0 0 1px rgb(var(--un-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--un-prose-kbd-shadows) / 10%);font-size:0.875em;border-radius:0.3125rem;padding-top:0.1875em;padding-inline-end:0.375em;padding-bottom:0.1875em;padding-inline-start:0.375em;}:where(code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:var(--un-prose-code);font-weight:600;font-size:0.875em;}:where(code):not(:where([class~="not-prose"],[class~="not-prose"] *))::before {content:"`";}:where(code):not(:where([class~="not-prose"],[class~="not-prose"] *))::after {content:"`";}:where(a code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:inherit;}:where(h1 code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:inherit;}:where(h2 code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:inherit;font-size:0.875em;}:where(h3 code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:inherit;font-size:0.9em;}:where(h4 code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:inherit;}:where(blockquote code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:inherit;}:where(thead th code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:inherit;}:where(pre):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:var(--un-prose-pre-code);background-color:var(--un-prose-pre-bg);overflow-x:auto;font-weight:400;font-size:0.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:0.375rem;padding-top:0.8571429em;padding-inline-end:1.1428571em;padding-bottom:0.8571429em;padding-inline-start:1.1428571em;}:where(pre code):not(:where([class~="not-prose"],[class~="not-prose"] *)) {background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:inherit;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit;}:where(pre code):not(:where([class~="not-prose"],[class~="not-prose"] *))::before {content:none;}:where(pre code):not(:where([class~="not-prose"],[class~="not-prose"] *))::after {content:none;}:where(table):not(:where([class~="not-prose"],[class~="not-prose"] *)) {width:100%;table-layout:auto;margin-top:2em;margin-bottom:2em;font-size:0.875em;line-height:1.7142857;}:where(thead):not(:where([class~="not-prose"],[class~="not-prose"] *)) {border-bottom-width:1px;border-bottom-color:var(--un-prose-th-borders);}:where(thead th):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:var(--un-prose-headings);font-weight:600;vertical-align:bottom;padding-inline-end:0.5714286em;padding-bottom:0.5714286em;padding-inline-start:0.5714286em;}:where(tbody tr):not(:where([class~="not-prose"],[class~="not-prose"] *)) {border-bottom-width:1px;border-bottom-color:var(--un-prose-td-borders);}:where(tbody tr:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {border-bottom-width:0;}:where(tbody td):not(:where([class~="not-prose"],[class~="not-prose"] *)) {vertical-align:baseline;}:where(tfoot):not(:where([class~="not-prose"],[class~="not-prose"] *)) {border-top-width:1px;border-top-color:var(--un-prose-th-borders);}:where(tfoot td):not(:where([class~="not-prose"],[class~="not-prose"] *)) {vertical-align:top;}:where(th, td):not(:where([class~="not-prose"],[class~="not-prose"] *)) {text-align:start;}:where(figure > *):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:0;margin-bottom:0;}:where(figcaption):not(:where([class~="not-prose"],[class~="not-prose"] *)) {color:var(--un-prose-captions);font-size:0.875em;line-height:1.4285714;margin-top:0.8571429em;}font-size:1rem;line-height:1.75;:where(picture > img):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:0;margin-bottom:0;}:where(li):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:0.5em;margin-bottom:0.5em;}:where(ol > li):not(:where([class~="not-prose"],[class~="not-prose"] *)) {padding-inline-start:0.375em;}:where(ul > li):not(:where([class~="not-prose"],[class~="not-prose"] *)) {padding-inline-start:0.375em;}:where(> ul > li p):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:0.75em;margin-bottom:0.75em;}:where(> ul > li > p:first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:1.25em;}:where(> ul > li > p:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-bottom:1.25em;}:where(> ol > li > p:first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:1.25em;}:where(> ol > li > p:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-bottom:1.25em;}:where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:0.75em;margin-bottom:0.75em;}:where(dl):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:1.25em;margin-bottom:1.25em;}:where(dd):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:0.5em;padding-inline-start:1.625em;}:where(hr + *):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:0;}:where(h2 + *):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:0;}:where(h3 + *):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:0;}:where(h4 + *):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:0;}:where(thead th:first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {padding-inline-start:0;}:where(thead th:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {padding-inline-end:0;}:where(tbody td, tfoot td):not(:where([class~="not-prose"],[class~="not-prose"] *)) {padding-top:0.5714286em;padding-inline-end:0.5714286em;padding-bottom:0.5714286em;padding-inline-start:0.5714286em;}:where(tbody td:first-child, tfoot td:first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {padding-inline-start:0;}:where(tbody td:last-child, tfoot td:last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {padding-inline-end:0;}:where(figure):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:2em;margin-bottom:2em;}:where(> :first-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-top:0;}:where(> :last-child):not(:where([class~="not-prose"],[class~="not-prose"] *)) {margin-bottom:0;}--un-prose-body:oklch(37.3% 0.034 259.733);--un-prose-invert-body:oklch(87.2% 0.01 258.338);--un-prose-headings:oklch(21% 0.034 264.665);--un-prose-invert-headings:white;--un-prose-lead:oklch(44.6% 0.03 256.802);--un-prose-invert-lead:oklch(70.7% 0.022 261.325);--un-prose-links:oklch(21% 0.034 264.665);--un-prose-invert-links:white;--un-prose-bold:oklch(21% 0.034 264.665);--un-prose-invert-bold:white;--un-prose-counters:oklch(55.1% 0.027 264.364);--un-prose-invert-counters:oklch(70.7% 0.022 261.325);--un-prose-bullets:oklch(87.2% 0.01 258.338);--un-prose-invert-bullets:oklch(44.6% 0.03 256.802);--un-prose-hr:oklch(92.8% 0.006 264.531);--un-prose-invert-hr:oklch(37.3% 0.034 259.733);--un-prose-quotes:oklch(21% 0.034 264.665);--un-prose-invert-quotes:oklch(96.7% 0.003 264.542);--un-prose-quote-borders:oklch(92.8% 0.006 264.531);--un-prose-invert-quote-borders:oklch(37.3% 0.034 259.733);--un-prose-captions:oklch(55.1% 0.027 264.364);--un-prose-invert-captions:oklch(70.7% 0.022 261.325);--un-prose-kbd:oklch(21% 0.034 264.665);--un-prose-invert-kbd:white;--un-prose-kbd-shadows:oklch(21% 0.034 264.665);--un-prose-invert-kbd-shadows:white;--un-prose-code:oklch(21% 0.034 264.665);--un-prose-invert-code:white;--un-prose-pre-code:oklch(92.8% 0.006 264.531);--un-prose-invert-pre-code:oklch(87.2% 0.01 258.338);--un-prose-pre-bg:oklch(27.8% 0.033 256.848);--un-prose-invert-pre-bg:rgb(0 0 0 / 50%);--un-prose-th-borders:oklch(87.2% 0.01 258.338);--un-prose-invert-th-borders:oklch(44.6% 0.03 256.802);--un-prose-td-borders:oklch(92.8% 0.006 264.531);--un-prose-invert-td-borders:oklch(37.3% 0.034 259.733);}
/* layer: shortcuts */
.box{margin-inline:auto;padding:calc(var(--spacing) * 4);border-radius:var(--radius-md);background-color:color-mix(in srgb, var(--colors-gray-100) var(--un-bg-opacity), transparent) /* oklch(96.7% 0.003 264.542) */;max-width:var(--container-7xl);--un-shadow:0 1px 3px 0 var(--un-shadow-color, rgb(0 0 0 / 0.1)),0 1px 2px -1px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-inset-shadow), var(--un-inset-ring-shadow), var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
@supports (color: color-mix(in lab, red, red)){
.box{background-color:color-mix(in oklab, var(--colors-gray-100) var(--un-bg-opacity), transparent) /* oklch(96.7% 0.003 264.542) */;}
}
/* layer: default */
.text-4xl{font-size:var(--text-4xl-fontSize);line-height:var(--un-leading, var(--text-4xl-lineHeight));}
.text-base{font-size:var(--text-base-fontSize);line-height:var(--un-leading, var(--text-base-lineHeight));}
.mx-auto{margin-inline:auto;}
.mb-4{margin-bottom:calc(var(--spacing) * 4);}
.px-4{padding-inline:calc(var(--spacing) * 4);}
.py-4{padding-block:calc(var(--spacing) * 4);}
.flex{display:flex;}
.h2{height:calc(var(--spacing) * 2);}
.max-w-screen-md{max-width:48rem;}
.space-x-3{
:where(&>:not(:last-child)){--un-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 3) * var(--un-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--un-space-x-reverse)));}
}
```

For the story behind this project, see the blog post [Reimagine Atomic CSS](https://antfu.me/posts/reimagine-atomic-css).

## How It Works

When running `npm run dev`:

1. The [`dev:unocss`](./package.json) script runs [@unocss/cli](https://github.com/unocss/unocss/tree/main/packages/cli) in watch mode. It scans the glob defined in [`uno.config.ts`](./uno.config.ts) – `site/{snippets,templates}/**/*` by default – collects every utility class, and writes the result to `src/styles/uno.css`. Any change to a matched PHP file triggers a regeneration.

2. In parallel, Vite's dev server builds the JavaScript entry and [`main.css`](./src/styles/main.css), which imports `uno.css`. HMR handles every change to JS, `main.css`, or `uno.css`.

   Both processes run side by side via [mprocs](https://github.com/pvolok/mprocs), configured in [`mprocs.yaml`](./mprocs.yaml).

3. A full page reload fires whenever a PHP snippet or template changes, so layout edits show up without a manual refresh.

## Installation

1. Duplicate the [`.env.development.example`](./.env.development.example) as `.env`:

```bash
cp .env.development.example .env
```

2. Install Node dependencies:

```bash
npm install
```

3. Install Composer dependencies:

```bash
composer install
```

## Configuration

All rules, shortcuts, and presets live in [`uno.config.ts`](./uno.config.ts). The kit ships with one shortcut as an example:

```ts
shortcuts: [
  { box: "max-w-7xl mx-auto bg-gray-100 rounded-md shadow-sm p-4" },
],
```

## Usage

### Development

1. Start the dev server:

```bash
npm run dev
```

2. Run the built-in PHP server, or a dev server like [Laravel Valet](https://laravel.com/docs/10.x/valet):

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

> [!TIP]
> For Apache web servers: Some hosting environments require uncommenting `RewriteBase /` in [`.htaccess`](./public/.htaccess) to make site links work.

## License

[MIT](./LICENSE) License © 2021-PRESENT [Johann Schopplich](https://github.com/johannschopplich)
