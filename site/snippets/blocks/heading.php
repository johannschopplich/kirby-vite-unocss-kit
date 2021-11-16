<?php

use Kirby\Toolkit\Html;
use Kirby\Toolkit\Str;

/** @var \Kirby\Cms\Block $block */
$level = $block->level()->or('h2');
$id = Str::slug(Str::unhtml($block->text()));

echo Html::tag($level, [$block->text()], ['id' => $id]);
