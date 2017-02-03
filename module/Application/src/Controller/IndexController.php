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
    public function changeLayoutAndSetAdapter() //layout ...
    {
        // CHANGING LAYOUT
        $this->layout('layout/generic');
        
        // SETTING ADAPTER
        $adaptater = new Adapter(array(
            'driver' => 'Mysqli',
            'database' => 'motion', //nom de la bdd
            'username' => 'root',
            'password' => ''
        ));

        // TAKING DATA FROM DATABASE AND SENDING THEM TO THE LAYOU
        $result = $adaptater->query('SELECT * FROM menu LIMIT 10', $adaptater::QUERY_MODE_EXECUTE); // request sent
        $data = [];
        foreach($result as $row){
            $data[] = utf8_encode($row['name']); // column name needed
        }
        //print_r($data); 

        $this->layout()->setVariable('menu', $data); // sending the array menu to the layout
        //$this->layout()->setVariable('coco', 'le coco'); // sending the array menu to the layout
        return $adaptater;
    }

    public function indexAction()
    {
        // SETTING ADAPTER
        $adaptater = $this->changeLayoutAndSetAdapter();
        // SLIDER QUERY
        $results = $adaptater->query('SELECT * FROM slider_img WHERE `slider_id`=1 LIMIT 3', $adaptater::QUERY_MODE_EXECUTE); // requete sql envoyée
        $data = [];
        foreach($results as $row){
            $data[] = utf8_encode($row['src']); //nom de la colonne 
        }
        // SMART BOX QUERY
        $results = $adaptater->query('SELECT * FROM smart_box LIMIT 3', $adaptater::QUERY_MODE_EXECUTE);
        $smart = [];
        foreach($results as $row){
            //echo utf8_encode($row['text']);
            $smart[] = array(
                'src' => utf8_encode($row['src']), //nom de la colonne 
                'name' => utf8_encode($row['name']),
                'text' => utf8_encode($row['text']),
            ); 
        }
        // TALENTED BOX QUERY
        $results = $adaptater->query('SELECT * FROM talented LIMIT 4', $adaptater::QUERY_MODE_EXECUTE);
        $talented = [];
        foreach($results as $row){
            //echo utf8_encode($row['text']);
            $talented[] = array(
                'src' => utf8_encode($row['src']), //nom de la colonne 
                'first_name' => utf8_encode($row['first_name']),
                'last_name' => utf8_encode($row['last_name']),
                'work' => utf8_encode($row['work']),
            ); 
        }
        // SENDING TO VIEW
        $viewModel = new ViewModel();
        $viewModel->setVariables(array(
            'url' => $data, // nom du tableau dans le tpl
            'smart' => $smart,
            'talented' => $talented,
        ));
        return $viewModel;
    }

    public function aboutmeAction() //modif
    {
        //echo "aaaaaboouutt";
        return new ViewModel();
    }
    public function teamAction() //modif
    {
        // SETTING ADAPTER
        $adaptater = $this->changeLayoutAndSetAdapter();
        // TALENTED BOX QUERY
        $first_name = $this->params()->fromRoute('name');
        $nb = 0;
        if($first_name == 'all'){
            $nb = 1;
            $results = $adaptater->query('SELECT * FROM talented', $adaptater::QUERY_MODE_EXECUTE);
        }else{
            $sqlRequest = 'SELECT * FROM talented WHERE `first_name`="'.$first_name.'"';
            $results = $adaptater->query($sqlRequest, $adaptater::QUERY_MODE_EXECUTE);
            foreach($results as $row){
                $nb ++;
            }
        }
        // SENDING TO VIEW
        $viewModel = new ViewModel();
        if($nb){
            //echo 'true';
            $talented = [];
            foreach($results as $row){
                $talented[] = array(
                    'src' => utf8_encode($row['src']), //nom de la colonne 
                    'first_name' => utf8_encode($row['first_name']),
                    'last_name' => utf8_encode($row['last_name']),
                    'work' => utf8_encode($row['work']),
                ); 
            }
            $viewModel->setVariables(array(
                'talented' => $talented,
            ));
        }else{
            //echo 'not true';
            $talented = [];
            $talented[] = array(
                'src' => '', //nom de la colonne 
                'first_name' => "Ce first_name n'éxiste pas !",
                'last_name' => '',
                'work' => '',
            ); 
            $viewModel->setVariables(array(
                'talented' => $talented,
            ));
        }
        return $viewModel;
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
    public function albumAction() //modif
    {
        echo $this->params()->fromRoute('id');
        return new ViewModel();
    }
}