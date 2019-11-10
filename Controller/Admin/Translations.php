<?php
/**
 * Copyright © OXID eSales AG. All rights reserved.
 * See LICENSE file for license details.
 */

 namespace OxidProjects\React\Translations\Controller\Admin;

use OxidEsales\Eshop\Application\Controller\Admin\AdminDetailsController;

use OxidEsales\EshopCommunity\Internal\Container\ContainerFactory;
use OxidEsales\GraphQL\Developer\Service\DeveloperToolsServiceInterface;

/**
 * Class Translations
 * @package OxidProjects\React\Translations\Controller\Admin
 */
class Translations extends AdminDetailsController
{
    /**
     * Template to render
     *
     * @var string
     */
    protected $_thisTemplate = 'translations.tpl';

    /**
     * Render
     *
     * @return string
     */
    public function render()
    {
        parent::render();

        
        $container = ContainerFactory::getInstance()->getContainer();
        /** @var DeveloperToolsServiceInterface $developerToolsService */
        $developerToolsService = $container->get(DeveloperToolsServiceInterface::class);
        $this->_aViewData["bearer"] = $developerToolsService->getAuthTokenString();
        $this->_aViewData["shopurl"] = $developerToolsService->getShopUrl();
        
        return $this->_thisTemplate;
    }

}