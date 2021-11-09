<?php

return fn (\Kirby\Cms\App $kirby, \Kirby\Cms\Site $site, \Kirby\Cms\Page $page) => [
    'jsonld' => [
        'WebSite' => [
            'name' => $site->title()->value(),
            'description' => $site->description()->value(),
            'url' => url()
        ]
    ]
];
