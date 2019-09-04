<?php
/**
 * Copyright © OXID eSales AG. All rights reserved.
 * See LICENSE file for license details.
 */

 namespace OxidProjects\React\Translations\Controller\Admin;

use OxidEsales\Eshop\Application\Controller\Admin\AdminDetailsController;

use OxidEsales\EshopCommunity\Internal\Application\ContainerFactory;
use OxidEsales\GraphQl\DataObject\TokenRequest;
use OxidEsales\GraphQl\Service\AuthenticationServiceInterface;
use OxidEsales\GraphQl\Service\DeveloperToolsServiceInterface;
use OxidEsales\GraphQl\Service\KeyRegistryInterface;
use OxidEsales\GraphQl\Utility\AuthConstants;
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
    protected $_sThisTemplate = 'translations.tpl';

    /**
     * Render
     *
     * @return string
     */
    public function render()
    {
        parent::render();

        
        $container = ContainerFactory::getInstance()->getContainer();
        /** @var DeveloperToolsServiceInterface $authService */
        $authService = $container->get(DeveloperToolsServiceInterface::class);
        $this->_aViewData["token"] = $authService->getAuthTokenString();
        $this->_aViewData["shopurl"] = $authService->getShopUrl();
        
        return $this->_sThisTemplate;
    }

}