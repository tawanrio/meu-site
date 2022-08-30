<?php 
date_default_timezone_set('America/Sao_Paulo');
setlocale(LC_TIME, 'pt_BR', 'pt_BR.uft-8', 'portuguese');

// pastas
define('CONTROLLER_PATH', realpath(dirname(__FILE__) . '/../controller'));
define('MODEL_PATH', realpath(dirname(__FILE__) . '/../model'));
define('VIEW_PATH', realpath(dirname(__FILE__) . '/../view'));

// arquivos
require_once(realpath(dirname(__FILE__) . '/class.Database.php'));
require_once(MODEL_PATH . '/class.User.php');
require_once(CONTROLLER_PATH . '/access.php');

