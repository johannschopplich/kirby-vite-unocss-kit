<?php
/** @var \Kirby\Cms\App $kirby */
/** @var \Kirby\Cms\Site $site */
/** @var \Kirby\Cms\Page $page */
?>

<?php snippet('header') ?>

<div class="box mb-4">
  <?= $page->text()->toBlocks() ?>
</div>

<?php snippet('footer') ?>
