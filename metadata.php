<?php
/**
 * Copyright © OXID eSales AG. All rights reserved.
 * See LICENSE file for license details.
 */
use OxidEsales\Eshop\Core\Registry;
/**
 * Metadata version
 */
$sMetadataVersion = '2.0';

/**
 * Module information
 */
$aModule = [
    'id'            => 'oxcom/react-translations',
    'title'         => '<span style="color: #49c8ef">React</span> Translations',
    'description'   =>  [
        'en' => '<span>React Translations</span>',
    ],
    'thumbnail'   => 'out/pictures/react-logo.png',
    'version'     => '0.0.1',
    'author'      => 'OXID eSales',
    'url'         => 'www.oxid-esales.com',
    'email'       => 'info@oxid-esales.com',
    'extend'      => [
    ],
    'controllers' => [
       'translations'          => \OxidProjects\React\Translations\Controller\Admin\Translations::class,
    ],
    'templates'   => [
        'translations.tpl'    => 'oxcom/react-translations/out/index.html'
    ],
    'blocks'      => [
    ],
    'settings'    => [
    ],
    'events'      => [
    ]
];

