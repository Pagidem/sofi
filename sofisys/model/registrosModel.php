<?php 
class Registros
{
	/*metodo para registrar un nuevo cliente*/
	public function nuevo_cliente($num,$ext,$tip,$edad,$nac,$nom,$ape,$cel,$ref,$eciv,$ocu) 
	{
		$db = new Conexion();

		$nu = $db->real_escape_string($num);
		$ex = $db->real_escape_string($ext);
		$t = $db->real_escape_string($tip);
		
		$no = $db->real_escape_string($nom);
		$ap = $db->real_escape_string($ape);
		$ce = $db->real_escape_string($cel);
		$re = $db->real_escape_string($ref);
		$ec = $db->real_escape_string($eciv);
		$ed = $db->real_escape_string($edad);
		$o = $db->real_escape_string($ocu);

		$na = $db->real_escape_string($nac);

		/*variable para query de ingreso de registro de documento*/
		$idoc = $db->query("INSERT INTO `documento` (`idd`, `tipod`, `numerod`, `extension`) VALUES (NULL, '$t', '$nu', '$ex');");
		/*variable que obtiene el ultimo id insertado en la tabla documento*/
		$sql1 = $db->query("SELECT MAX(idd) from documento;");
		$row1= $sql1->fetch_row();
		$u_doc = $row1[0];
		/*variable para query de ingreso de registro de persona*/
		$ipersona = $db->query("INSERT INTO `persona` (`idpe`, `nombres`, `apellidos`, `celular`, `estadoCivil`, `ocupacion`, `referencias`, `edad`, `doc`) VALUES (NULL, '$no', '$ap', '$ce', '$ec', '$o', '$re', '$ed', '$u_doc');");
		/*variable que obtiene el ultimo id insertado en la tabla persona*/
		$sql2 = $db->query("SELECT MAX(idpe) from persona;");
		$row2= $sql2->fetch_row();
		$u_per = $row2[0];
		/*variable para indicar que se registro en cliente*/
		$icli = $db->query("INSERT INTO `cliente` (`idc`, `origen_cliente`, `datos`) VALUES (NULL, '$na', '$u_per');");

		if ($idoc && $ipersona && $icli) {
			$result = '1';
		} else {
			$result = 'No Registrado';
		}

		$db->close();
		return $result;
	}


	/*metodo para registrar un nuevo usuario*/
	function nuevo_usuario($num,$ext,$tip,$nom,$ape,$cel,$ref,$usu,$cla) 
	{

		/*instancia de conexion*/
		$db = new Conexion();
		/*Variables pasadas por el fcontrolador*/
		$num_doc = $db->real_escape_string($num);
		$ext_doc = $db->real_escape_string($ext);
		$tipo_doc = $db->real_escape_string($tip);
		
		$nombres = $db->real_escape_string($nom);
		$apellidos = $db->real_escape_string($ape);
		$n_celular = $db->real_escape_string($cel);
		$n_referencia = $db->real_escape_string($ref);

		$usuario = $db->real_escape_string($usu);
		$clave = $db->real_escape_string($cla);

		$id = $_SESSION['app_id'];
		/*variable para query de ingreso de registro de documento*/
		$idoc = $db->query("INSERT INTO `documento` (`idd`, `tipod`, `numerod`, `extension`) VALUES (NULL, '$tipo_doc', '$num_doc', '$ext_doc');");
		/*variable que obtiene el ultimo id insertado en la tabla documento*/
		$sql1 = $db->query("SELECT MAX(idd) from documento;");
		$row1= $sql1->fetch_row();
		$u_doc = $row1[0];
		/*variable para query de ingreso de registro de persona*/
		$ipersona = $db->query("INSERT INTO `persona` (`idpe`, `nombres`, `apellidos`, `celular`, `estadoCivil`, `ocupacion`, `referencias`, `edad`, `doc`) VALUES (NULL, '$nombres', '$apellidos', '$n_celular', NULL, NULL, '$n_referencia', NULL, '$u_doc');");
		/*variable que obtiene el ultimo id insertado en la tabla persona*/
		$sql2 = $db->query("SELECT MAX(idpe) from persona;");
		$row2= $sql2->fetch_row();
		$u_per = $row2[0];
		/*variable para query de ingreso de registro de usuario*/
		$iusu = $db->query("INSERT INTO `usuario` (`idu`, `nicku`, `passu`, `responsable`) VALUES (NULL, '$usuario', '$clave', '$u_per');");


		if ($idoc && $ipersona && $iusu) {
			$result = '1';
		} else {
			$result = 'No registrado';
		}
		$db->close();
		return $result;
	}

	/*metodo para registrar la estadia*/
	public function nueva_estadia($acu,$pag,$xpa,$tot,$ts,$fis,$ffs,$ds,$nh,$ci)
	{
		$db = new Conexion();

		$e1 = $db->real_escape_string($acu);
		$e2 = $db->real_escape_string($pag);
		$e3 = $db->real_escape_string($xpa);
		$e4 = $db->real_escape_string($tot);
		/*TIPO DE REGISTRO PARA ESTADIA*/
		$e5 = $db->real_escape_string($ts);
		/*FECHA INICIAL*/
		$e6 = $db->real_escape_string($fis);
		/*FECHA FINAL*/
		$e7 = $db->real_escape_string($ffs);
		/*DIAS*/
		$e8 = $db->real_escape_string($ds);
		/*NUMERO DE HABITACION*/
		$e9 = $db->real_escape_string($nh);
		/*ID DE DOCUMENTO PARA CLIENTE*/
		$e10 = $db->real_escape_string($ci);


		/*Condicional para determinar el tipo de registro si es estadia o reserva*/
		if ($e5 == 'estadia') 
		{

			/*Editar el estado de la habitacion para que este ocupada*/
			$estHab = $db->query("UPDATE `habitacion` SET `estadoOcupado` = 'ocupada' WHERE `habitacion`.`numeroh` = '$e9'");
		}
		else if($e5 == 'reserva')
		{
			/*Editar el estado de la habitacion para que este reservada*/
			$estHab = $db->query("UPDATE `habitacion` SET `estadoOcupado` = 'reservada' WHERE `habitacion`.`numeroh` = '$e9'");
		}

		/*variable para query de ingreso de registro de pagos*/
		$ipag = $db->query("INSERT INTO `pagos` (`idpa`, `acuenta`, `pagado`, `porpagar`, `total`) VALUES (NULL, '$e1', '$e2', '$e3', '$e4')");
		/*variable que obtiene el ultimo id insertado en la tabla pagos*/
		$sql1 = $db->query("SELECT MAX(idpa) from pagos;");
		/*recorriendo el resultado de la bd*/
		$row1= $sql1->fetch_row();
		/*ultimo id insertado en pagos convertido a string*/
		$u_pag = $row1[0];

		/*obtener el id del cliente*/
		$sqlcli = $db->query("SELECT c.idc FROM documento as d INNER JOIN persona as p ON d.idd=p.doc INNER JOIN cliente as c ON p.idpe=c.datos WHERE d.idd='$e10'");
		/*recorriendo el resultado de la bd*/
		$rowcli= $sqlcli->fetch_row();
		/*oobteniedo el ID del cliente*/
		$idcli = $rowcli[0];

		/*insertar registro en la solicitud*/
		$iest = $db->query("INSERT INTO `solicitud` (`ids`, `tipo`, `fechaIni`, `fechaFin`, `dias`, `pieza`, `paga`, `cliente`) VALUES (NULL, '$e5', '$e6', '$e7', '$e8', '$nh', '$u_pag', '$idcli')");

		if ($ipag && $iest) {
			$result = '1';
		} else {
			$result = 'No registrado';
		}
		$db->close();
		return $result;
	}

	/*metodo para liberar una habitacion que este ocupada o reservada*/
	public function liberar_habitacion($num)
	{
		$db = new Conexion();
		$nu = $db->real_escape_string($num);

		$estado = $db->query("UPDATE `habitacion` SET `estadoOcupado` = 'libre' WHERE `habitacion`.`numeroh` = '$nu';");

		if ($estado) {
			$result = '1'; 
		}else{
			$result = 'Habitacion libre';
		}
		$db->close();

		return $result;
	}

	/*metodo para liberar una habitacion que este ocupada o reservada*/
	public function editar_habitacion($n,$t,$p,$e)
	{
		$db = new Conexion();
		$numero = $db->real_escape_string($n);
		$tipo = $db->real_escape_string($t);
		$precio = $db->real_escape_string($p);
		$limpieza = $db->real_escape_string($e);

		$estado = $db->query("UPDATE `habitacion` SET `tipoh` = '$tipo', `precioh` = '$precio', `estadoLimpieza` = '$limpieza' WHERE `habitacion`.`numeroh` = '$numero'");

		if ($estado) {
			$result = '1'; 
		}else{
			$result = '0';
		}
		$db->close();

		return $result;
	}

	/*metodo para liberar una habitacion que este ocupada o reservada*/
	public function editarPago($registro,$acuenta,$pagado,$xpagar,$total)
	{
		$db = new Conexion();
		$r = $db->real_escape_string($registro);
		$a = $db->real_escape_string($acuenta);
		$p = $db->real_escape_string($pagado);
		$x = $db->real_escape_string($xpagar);
		$t = $db->real_escape_string($total);

		/*variable que obtiene el ultimo id insertado en la tabla pagos*/
		$sql1 = $db->query("SELECT * FROM solicitud WHERE ids='$r'");
		/*recorriendo el resultado de la bd*/
		$row1= $sql1->fetch_row();
		/*ultimo id insertado en pagos convertido a string*/
		$idp= $row1[0];

		$estado = $db->query("UPDATE `pagos` SET `acuenta` = '$a', `pagado` = '$p', `porpagar` = 'x', `total` = '$t' WHERE `pagos`.`idpa` ='$idp'");

		if ($estado) {
			$result = '1'; 
		}else{
			$result = '0';
		}
		$db->close();

		return $result;
	}

	/*metodo para liberar una habitacion que este ocupada o reservada*/
	public function confirmarEstadia($num)
	{
		$db = new Conexion();
		$nu = $db->real_escape_string($num);

		$estado = $db->query("UPDATE `habitacion` SET `estadoOcupado` = 'ocupada' WHERE `habitacion`.`numeroh` = '$nu';");

		if ($estado) {
			$result = '1'; 
		}else{
			$result = '0';
		}
		$db->close();

		return $result;
	}






}


?>