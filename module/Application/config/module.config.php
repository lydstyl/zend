<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application;

use Zend\Router\Http\Literal;
use Zend\Router\Http\Segment;
use Zend\ServiceManager\Factory\InvokableFactory;

return [
    'router' => [
        'routes' => [
            'home' => [
                'type' => Literal::class,
                'options' => [
                    'route'    => '/',
                    'defaults' => [
                        'controller' => Controller\IndexController::class,
                        'action'     => 'index',
                    ],
                ],
            ],
            'about' => [//changement
                'type' => Literal::class, //une histoire de paramètre ou pas --> segment pour les paramètres pas totalement vrai
                'options' => [
                    'route'    => '/about-me',//changement url
                    'defaults' => [
                        'controller' => Controller\IndexController::class,
                        'action'     => 'aboutme', //changement
                    ],
                ],
            ],
            'team' => [//changement
                'type' => Segment::class, //une histoire de paramètre ou pas --> segment pour les paramètres pas totalement vrai
                'options' => [
                    'route'    => '/team[/:name]',//changement url
                    'constraints' => [
                        'name' => '[A-Za-z]+',
                    ],
                    'defaults' => [
                        'controller' => Controller\IndexController::class,
                        'action'     => 'team', //changement
                        'name'       => 'all',
                    ],
                ],
            ],
            'portfolio' => [//changement
                'type' => Literal::class, //une histoire de paramètre ou pas --> segment pour les paramètres pas totalement vrai
                'options' => [
                    'route'    => '/portfolio',//changement url
                    'defaults' => [
                        'controller' => Controller\IndexController::class,
                        'action'     => 'portfolio', //changement
                    ],
                ],
            ],
            'other' => [//changement
                'type' => Literal::class, //une histoire de paramètre ou pas --> segment pour les paramètres pas totalement vrai
                'options' => [
                    'route'    => '/other',//changement url
                    'defaults' => [
                        'controller' => Controller\IndexController::class,
                        'action'     => 'other', //changement
                    ],
                ],
            ],
            'contact' => [//changement
                'type' => Literal::class, //une histoire de paramètre ou pas --> segment pour les paramètres pas totalement vrai
                'options' => [
                    'route'    => '/contact',//changement url
                    'defaults' => [
                        'controller' => Controller\IndexController::class,
                        'action'     => 'contact', //changement
                    ],
                ],
            ],
            // url type segment (au lieu de litteral)
            'album' => [//changement
                'type' => Segment::class, //une histoire de paramètre ou pas --> segment pour les paramètres pas totalement vrai Segment::class peut etre remplacé par 'segment'
                'options' => [
                    'route'    => '/album[/:id]',//changement url
                    'constraints' => [
                        'id' => '[0-9]+',
                    ],
                    'defaults' => [
                        'controller' => Controller\IndexController::class,
                        'action'     => 'album', //changement
                        'id'         => 1,
                    ],
                ],
            ],

            'application' => [
                'type'    => Segment::class,
                'options' => [
                    'route'    => '/application[/:action]',
                    'defaults' => [
                        'controller' => Controller\IndexController::class,
                        'action'     => 'index',
                    ],
                ],
            ],
        ],
    ],
    'controllers' => [
        'factories' => [
            Controller\IndexController::class => InvokableFactory::class,
        ],
    ],
    'view_manager' => [
        'display_not_found_reason' => true,
        'display_exceptions'       => true,
        'doctype'                  => 'HTML5',
        'not_found_template'       => 'error/404',
        'exception_template'       => 'error/index',
        'template_map' => [
            'layout/layout'           => __DIR__ . '/../view/layout/layout.phtml',
            'application/index/index' => __DIR__ . '/../view/application/index/index.phtml',
            'error/404'               => __DIR__ . '/../view/error/404.phtml',
            'error/index'             => __DIR__ . '/../view/error/index.phtml',
        ],
        'template_path_stack' => [
            __DIR__ . '/../view',
        ],
    ],
];
