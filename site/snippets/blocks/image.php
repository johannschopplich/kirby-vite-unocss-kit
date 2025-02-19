<?php

use Kirby\Toolkit\Html;

/** @var \Kirby\Cms\Block $block */
$alt     = $block->alt();
$caption = $block->caption();
$link    = $block->link();
$ratio   = $block->ratio();
$img     = null;

if ($block->location() === 'web') {
  $img = Html::img($block->src(), ['alt' => $alt]);
} elseif ($image = $block->image()->toFile()) {
  if ($alt->isEmpty()) $alt = $image->alt();
  if ($caption->isEmpty()) $caption = $image->caption();

  $img = Html::img(
    $image->url(),
    [
      'loading' => 'lazy',
      'data-srcset' => $image->srcset(),
      'data-sizes' => 'auto',
      'width' => $image->width(),
      'height' => $image->height(),
      'alt' => $alt
    ]
  );
} else {
  return;
}

?>
<figure<?= attr(['class' => $ratio], ' ') ?>>
  <?php if ($link->isNotEmpty()) : ?>
    <a href="<?= $link->toUrl() ?>">
      <?= $img ?>
    </a>
  <?php else : ?>
    <?= $img ?>
  <?php endif ?>

  <?php if ($caption->isNotEmpty()) : ?>
    <figcaption>
      <?= $caption ?>
    </figcaption>
  <?php endif ?>
  </figure>
