<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

//après installation de https://packagist.org/packages/zendframework/zend-db on ajoute les use ci-dessous
use Zend\Db\Adapter\Adapter;
use Zend\Db\Sql\Sql;


class IndexController extends AbstractActionController
{
    // public function indexAction()
    // {
    //     return new ViewModel();
    // }
    public function indexAction()
    {
        $adaptater = new Adaptater(array(
            'driver' => 'Mysqli',
            'database' => 'cms',
            'username' => 'root',
            'password' => ''
        ));
        // $sql = new sql(array(
        //     'driver' => 'Mysqli',
        //     'database' => 'cms',
        //     'username' => 'root',
        //     'password' => ''
        // ));


        $viewModel = new ViewModel();
        $viewModel->setVariables(array(
            'someVariableName' => 'bla',
            'someVariableName2' => 'coco',
        ));
        $viewModel->setVariables(array(
            'someVariableName3' => 'crotte',
        ));

        return $viewModel;
    }




    public function aboutmeAction() //modif
    {
        return new ViewModel();
    }
    public function teamAction() //modif
    {
        return new ViewModel();
    }
    public function portfolioAction() //modif
    {
        return new ViewModel();
    }
    public function otherAction() //modif
    {
        return new ViewModel();
    }
    public function contactAction() //modif
    {
        return new ViewModel();
    }
}