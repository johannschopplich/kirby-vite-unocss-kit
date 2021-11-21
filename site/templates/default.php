<?php
/** @var \Kirby\Cms\App $kirby */
/** @var \Kirby\Cms\Site $site */
/** @var \Kirby\Cms\Page $page */
layout();
?>

<div class="box mb-4">
  <div class="text-base prose">
    <?= $page->text()->toBlocks() ?>
    <div class="flex space-x-3">
      <div class="i-carbon-sun hover:i-carbon-moon text-4xl"></div>
      <div class="i-carbon-warning text-4xl"></div>
      <div class="i-logos-kirby-icon text-4xl"></div>
    </div>
  </div>
</div>
