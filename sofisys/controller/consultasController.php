<?php

if (isset($_SESSION['app_id'])) {
  if (isset($_GET['tipo'])) {
    switch ($_GET['tipo']) {
      case 'res':
        rHabitacion();
        break;
      case 'hab':
        oHabitacion();
        break;
      case 'rest' :
        cHabitacion();
      break;
      case 'ecli' :
        cCliente();
      break;
      case 'regest' :
        estadias_registradas();
      break;
      case 'detest' :
        cDetalle_estadia();
      break;
      case 'detres' :
        cDetalle_reserva();
      break;
      case 'clireg' :
        clientes_registrados();
      break;
      case 'pag' :
       ingresos();
      break;
      case 'pagx' :
       ingresos_porfechas();
      break;
      
      



      default:

        break;
    }
  } else {
    include(VIEW_DIR . 'privilegiosView.php');
  }

} else {
  header('location: ?view=login');
}


function rHabitacion()
{
  require('model/consultasModel.php');
  $consulta = new Consultas();
  $result = $consulta->habitacion();
  if ($result != null) {
    echo json_encode($result);
  } else {
    echo '0';
  }

}

function oHabitacion()
{
  require('model/consultasModel.php');
  $consulta = new Consultas();
  //$h1 = $_GET['num'];
  $result = $consulta->habitacion();
  if ($result != null) {
    echo json_encode($result);
  } else {
    echo '0';
  }

}

function cHabitacion()
{
  require('model/consultasModel.php');
  $consulta = new Consultas();
  $h1 = $_GET['nh'];
  $result = $consulta->cestadia($h1);
  if ($result != null) {
    echo json_encode($result);
  } else {
    echo '0';
  }
}

function cCliente()
{
  require('model/consultasModel.php');
  $cliente = new Consultas();
  $ci = $_GET['ci'];
  $result = $cliente->existeCliente($ci);
  if ($result != null) {
    echo json_encode($result);
  } else {
    echo '0';
  }
}

function estadias_registradas() {
  require('model/consultasModel.php');
  $consulta = new Consultas();
  $result = $consulta->estadiasRegistradas();
  if ($result != null) {
    echo json_encode($result);
  } else {
    echo '0';
  }
}

function cDetalle_estadia() {
  require('model/consultasModel.php');
  $consulta = new Consultas();
  $nr = $_GET['nr'];
  $result = $consulta->detalleRegistro($nr);
  if ($result != null) {
    echo json_encode($result);
  } else {
    echo '0';
  }
}

function cDetalle_reserva() {
  require('model/consultasModel.php');
  $consulta = new Consultas();
  $nr = $_GET['nr'];
  $result = $consulta->detalleReserva($nr);
  if ($result != null) {
    echo json_encode($result);
  } else {
    echo '0';
  }
}

function clientes_registrados() {
  require('model/consultasModel.php');
  $consulta = new Consultas();
  $result = $consulta->clientesRegistrados();
  if ($result != null) {
    echo json_encode($result);
  } else {
    echo '0';
  }
}

function ingresos() {
  require('model/consultasModel.php');
  $consulta = new Consultas();
  $result = $consulta->pagos();
  if ($result != null) {
    echo json_encode($result);
  } else {
    echo '0';
  }
}

function estadias_pagadas() {
  require('model/consultasModel.php');
  $consulta = new Consultas();
  $inicio = $_GET['i'];
  $fin = $_GET['f'];
  $result = $consulta->pagadosXfecha($inicio,$fin);
  if ($result != null) {
    echo json_encode($result);
  } else {
    echo '0';
  }
}

function ingresos_porfechas() {
  require('model/consultasModel.php');
  $consulta = new Consultas();
  $i = $_GET['ini'];
  $s = $_GET['sal'];
  $result = $consulta->pagadosXfecha($i,$s);
  if ($result != null) {
    echo json_encode($result);
  } else {
    echo '0';
  }
}



?>
