<?php 

if (!isset($_SESSION['app_id'])) {
	header('location: ?view=login');
}

if (isset($_GET['tipo'])) {
	switch ($_GET['tipo']) {
		/*Redireccionar al menu de inicio*/
		case 'h1':
		include(VIEW_DIR . 'principalView.php');
		break;
		case 'h2':
		include(VIEW_DIR . 'principalView.php');
		break;
		case 'h3':
		include(VIEW_DIR . 'principalView.php');
		break;
		case 'h4':
		include(VIEW_DIR . 'principalView.php');
		break;
		case 'h5':
		include(VIEW_DIR . 'principalView.php');
		break;
		case 'h6':
		include(VIEW_DIR . 'principalView.php');
		break;
		case 'h7':
		include(VIEW_DIR . 'principalView.php');
		break;
		case 'h8':
		include(VIEW_DIR . 'principalView.php');
		break;
		case 'h9':
		include(VIEW_DIR . 'principalView.php');
		break;
		case 'h10':
		include(VIEW_DIR . 'principalView.php');
		break;
		case 'h11':
		include(VIEW_DIR . 'principalView.php');
		break;
		case 'h12':
		include(VIEW_DIR . 'principalView.php');
		break;
		case 'h13':
		include(VIEW_DIR . 'principalView.php');
		break;
		case 'h14':
		include(VIEW_DIR . 'principalView.php');
		break;
		case 'h15':
		include(VIEW_DIR . 'principalView.php');
		break;
		case 'h16':
		include(VIEW_DIR . 'principalView.php');
		break;
		case 'h17':
		include(VIEW_DIR . 'principalView.php');
		break;
		case 'h18':
		include(VIEW_DIR . 'principalView.php');
		break;
		default:
      # code...
		break;
	}
} else {
	include(VIEW_DIR . 'rsolicitudView.php');
}

?>