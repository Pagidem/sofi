<?php 

class Consultas
{

	public function habitacion()
	{

		$db = new Conexion();

		//$h = $db->real_escape_string($nh);

		$result = $db->query("SELECT * FROM `habitacion` ORDER BY numeroh ASC;");

		$resultado = array();
		if ($db->rows($result) > 0) {
			while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
				$resultado[] = $row;
			}
			return $resultado;
		} else {
			return "No hay habitación con ese número";
		}
		$db->liberar($result);
		$db->close();

	}

	public function cestadia($nh)
	{

		$db = new Conexion();

		$h = $db->real_escape_string($nh);

		$result = $db->query("SELECT * FROM `habitacion` where numeroh='$nh' ORDER BY numeroh ASC LIMIT 1;");

		$resultado = array();
		if ($db->rows($result) > 0) {
			while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
				$resultado[] = $row;
			}
			return $resultado;
		} else {
			return "No hay habitación con ese número";
		}
		$db->liberar($result);
		$db->close();

	}

	public function existeCliente($_ci)
  {
    $db = new Conexion();
    $ci= $db->real_escape_string($_ci);

    $sql = $db->query("SELECT idd,numerod from documento where numerod='$ci'");
    $resultado = array();

    if ($db->rows($sql) > 0) {
      while ($row = $sql->fetch_array(MYSQLI_ASSOC)) {
        $resultado[] = $row;
      }
      return $resultado;
    }
    else
    {
      return "0";
    }
    $db->liberar($sql);
    $db->close();
  }

  public function estadiasRegistradas()
  {
   $db = new Conexion();
   $result = $db->query("SELECT s.ids,h.tipoh,s.tipo,s.fechaIni,s.fechaFin,s.dias,p.nombres,p.apellidos,pa.total
    FROM
    solicitud as s
    INNER JOIN habitacion as h
    ON
    s.pieza=h.numeroh
    INNER JOIN pagos as pa
    ON
    s.paga=pa.idpa
    INNER JOIN cliente as c
    ON
    s.cliente=c.idc
    INNER JOIN persona as p
    ON
    c.datos=p.idpe
    INNER JOIN documento as d
    ON
    p.doc=d.idd ORDER BY s.ids ASC;");

   $resultados = array();

   if ($db->rows($result) > 0) {
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
     $resultados[] = $row;
   }
   return $resultados;
   } else {
    return "Sin resultados";
  }
  $db->liberar($result);
  $db->close();
  }

public function detalleRegistro($nr)
{
  $db = new Conexion();
  $n = $db->real_escape_string($nr);
  $result = $db->query("SELECT s.ids,p.nombres,p.apellidos,d.numerod,p.celular,h.numeroh,h.tipoh,s.tipo,s.fechaIni,s.dias,pa.total,pa.acuenta,pa.pagado,pa.porpagar
    FROM
    solicitud as s
    INNER JOIN habitacion as h
    ON
    s.pieza=h.numeroh
    INNER JOIN pagos as pa
    ON
    s.paga=pa.idpa
    INNER JOIN cliente as c
    ON
    s.cliente=c.idc
    INNER JOIN persona as p
    ON
    c.datos=p.idpe
    INNER JOIN documento as d
    ON
    p.doc=d.idd 
    WHERE 
    s.ids='$n'
    ORDER BY s.ids ASC;");

  $resultados = array();

  if ($db->rows($result) > 0) {
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
      $resultados[] = $row;
    }
    return $resultados;
  } else {
    return "Sin resultados";
  }
  $db->liberar($result);
  $db->close();
}

public function detalleReserva($nr)
{
  $db = new Conexion();
  $n = $db->real_escape_string($nr);
  $result = $db->query("SELECT 
                        MAX(s.ids),s.ids,d.numerod,p.nombres,p.apellidos,p.celular,s.dias,s.fechaIni,s.fechaFin,h.numeroh,pa.total,pa.pagado,pa.acuenta,pa.porpagar 
                        FROM documento as d 
                        INNER JOIN persona as p 
                        ON p.doc=d.idd 
                        INNER JOIN cliente as c 
                        ON c.datos=p.idpe 
                        INNER JOIN solicitud as s 
                        ON s.cliente=c.idc 
                        INNER JOIN habitacion as h 
                        ON s.pieza=h.numeroh 
                        INNER JOIN pagos as pa 
                        ON s.paga=pa.idpa 
                        WHERE h.numeroh='$n'");

  $resultados = array();

  if ($db->rows($result) > 0) {
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
      $resultados[] = $row;
    }
    return $resultados;
  } else {
    return "Sin resultados";
  }
  $db->liberar($result);
  $db->close();
}

public function clientesRegistrados()
{
  $db = new Conexion();
  $result = $db->query("SELECT c.idc,p.nombres,p.apellidos,d.numerod,c.origen_cliente,p.celular,p.referencias,p.edad
    FROM
    cliente as c
    INNER JOIN persona as p
    ON
    c.datos=p.idpe
    INNER JOIN documento as d
    ON
    p.doc=d.idd;");

  $resultados = array();

  if ($db->rows($result) > 0) {
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
      $resultados[] = $row;
    }
    return $resultados;
  } else {
    return "Sin resultados";
  }
  $db->liberar($result);
  $db->close();
}

public function pagos()
{
  $db = new Conexion();

  $result = $db->query("SELECT s.ids,s.tipo,s.fechaIni,s.fechaFin,p.acuenta,p.pagado,p.porpagar,p.total FROM solicitud as s INNER JOIN pagos as p WHERE s.paga=p.idpa ORDER BY ids");

  $resultados = array();

  if ($db->rows($result) > 0) {
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
      $resultados[] = $row;
    }
    return $resultados;
  } else {
    return "Sin resultados";
  }
  $db->liberar($result);
  $db->close();
}

public function pagadosXfecha($fini,$ffin)
{
  $db = new Conexion();

  $inicio = $db->real_escape_string($fini);
  $fin = $db->real_escape_string($ffin);

  $result = $db->query("SELECT s.ids,s.tipo,s.fechaIni,s.fechaFin,p.acuenta,p.pagado,p.porpagar,p.total 
                        FROM solicitud as s INNER JOIN pagos as p 
                        WHERE s.paga=p.idpa
                        AND
                        fechaIni
                        BETWEEN
                        '$inicio'
                        AND
                        '$inicio'
                        AND
                        fechaFin
                        BETWEEN
                        '$inicio'
                        AND
                        '$fin'
                        ORDER BY ids;");

  $resultados = array();

  if ($db->rows($result) > 0) {
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
      $resultados[] = $row;
    }
    return $resultados;
  } else {
    return "Sin resultados";
  }
  $db->liberar($result);
  $db->close();
}



}

?>