<?php  

session_start();
date_default_timezone_set('Etc/GMT+4');

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'sofi');

define('VIEW_DIR', 'view/');
define('APP_URL', 'http://localhost/sofi/');
define('APP_TITLE', 'SOFIA');
define('APP_TITLE_MIN', 'SS');
define('APP_DEV', 'Copyright &copy; ' . date('Y', time()) . ' ' . 'GENESYS' . ' Software.');
define('APP_COPY', 'Copyright &copy; ' . date('Y', time()) . ' ' . APP_TITLE . ' Software.');

require('model/Conexion.php');

?>