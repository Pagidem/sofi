<?php  

class Usuario
{
	public function iniciarSesion($user,$pass)
	{
		$db = new Conexion();
		$usuario = $db->real_escape_string($user);
		$clave = $db->real_escape_string($pass);

		$sql = $db->query("SELECT nicku FROM usuario WHERE nicku='$usuario' AND passu='$clave' LIMIT 1;");

		if ($db->rows($sql) > 0) {
			$_SESSION['app_id'] = $db->recorrer($sql)[0];
			$id = $_SESSION['app_id'];
			$db->liberar($sql);
			$db->close();
			return '1';
		} else {
			return '0';
		}
	}

	public function cerrar_sesion() 
	{
    $db = new Conexion();
    $id = $_SESSION['app_id'];
    $db->close();
    session_destroy();
    session_unset();
  	}


}

?>