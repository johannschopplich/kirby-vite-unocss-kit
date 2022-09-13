<?php

load([
    'KirbyExtended\\Vite' => 'classes/KirbyExtended/Vite.php',
], __DIR__);

\Kirby\Cms\App::plugin('kirby-extended/vite', [
    'options' => [
        'entry' => 'main.js',
        'outDir' => 'dist',
        'devServer' => 'http://localhost:5173'
    ]
]);

if (!function_exists('vite')) {
    /**
     * Returns the Vite instance
     */
    function vite(): \KirbyExtended\Vite
    {
        return \KirbyExtended\Vite::getInstance();
    }
}
