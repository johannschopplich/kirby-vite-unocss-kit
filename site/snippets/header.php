<?php
/** @var \Kirby\Cms\App $kirby */
/** @var \Kirby\Cms\Site $site */
/** @var \Kirby\Cms\Page $page */
?>
<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title><?= $page->customTitle()->or($page->title() . ' – ' . $site->title()) ?></title>

  <?php $meta = $page->meta() ?>
  <?= $meta->robots() ?>
  <?= $meta->jsonld() ?>
  <?= $meta->social() ?>

  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍁</text></svg>">

  <?= vite()->js() ?>
  <?= vite()->css() ?>

  <?php if (vite()->isDev()): ?>
    <?= css('assets/dev/index.css', ['id' => 'vite-dev-css']) ?>
  <?php endif ?>

</head>

<body data-template="<?= $page->intendedTemplate()->name() ?>">
  <main class="mx-auto max-w-screen-md py-4 px-4">
