<?php

return [

    'debug' => env('KIRBY_MODE') === 'development' || env('KIRBY_DEBUG', false),

    'panel' => [
        'install' => env('KIRBY_PANEL_INSTALL', false),
        'slug' => env('KIRBY_PANEL_SLUG', 'panel')
    ],

    'date.handler' => 'strftime',

    'cache' => [
        'pages' => [
            'active' => env('KIRBY_CACHE', false),
            'ignore' => fn (\Kirby\Cms\Page $page) => $page->kirby()->user() !== null
        ]
    ],

    'thumbs' => [
        'quality' => '80',
        'srcsets' => [
            'default' => [360, 720, 1024, 1280, 1536]
        ]
    ],

    'kirby-helpers' => [
        'meta' => [
            'defaults' => require __DIR__ . '/meta.php'
        ]
    ]

];
