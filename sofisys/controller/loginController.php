<?php  

	if (isset($_SESSION['app_id'])) {
	  header('location: ?view=principal');
	}

	if ($_POST) {
	  if (isset($_GET['mode'])) {
	    iniciarSesion();
	  }
	} else {
	  include(VIEW_DIR . 'loginView.php');
	}

	function iniciarSesion() {
	  require('model/usuarioModel.php');
	  $login = new Usuario();
	  $user = $_POST['u'];
	  $pass = $_POST['p'];

	  $result = $login->iniciarSesion($user, $pass);
	  echo $result;
	}

?>