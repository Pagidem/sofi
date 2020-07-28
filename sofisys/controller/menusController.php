<?php
if (!isset($_SESSION['app_id'])) {
  header('location: ?view=login');
}

if (isset($_GET['tipo'])) {
  switch ($_GET['tipo']) {
    /*Redireccionar al menu de inicio*/
    case 'ini':
      include(VIEW_DIR . 'principalView.php');
      break;
    /*Opcion que redirige a la vista de registrar cliente*/
    case 'ncli':
      include(VIEW_DIR . 'nClienteView.php');
      break;
    /*Opcion que redirige a la vista registrar usuario*/
    case 'nusu':
      include(VIEW_DIR . 'rUsuarioView.php');
      break;
    case 'rest':
      include(VIEW_DIR . 'rEstadiaView.php');
      break;
    case 'res':
      include(VIEW_DIR . 'rHabitacionView.php');
      break;
    case 'rres':
      include(VIEW_DIR . 'Registros/reservarView.php');
      break;
    case 'ocu':
      include(VIEW_DIR . 'oHabitacionView.php');
      break;
    case 'conf':
      include(VIEW_DIR . 'Registros/confirmarView.php');
      break;
    case 'lib':
      include(VIEW_DIR . 'lHabitacionView.php');
      break;
    case 'edi':
      include(VIEW_DIR . 'eHabitacionView.php');
      break;
    case 'ehab':
      include(VIEW_DIR . 'editarHabView.php');
      break;
    /*Estadias registradas*/
    case 'estreg':
      include(VIEW_DIR . '/consultas/estadiasView.php');
      break;
    /*Detalle de estadia*/
    case 'detest':
      include(VIEW_DIR . '/consultas/detalleEstView.php');
      break;
    /*Estadias registradas*/
    case 'creg':
      include(VIEW_DIR . '/consultas/clientesView.php');
      break;
    /*pagos realizados*/
    case 'pagos':
      include(VIEW_DIR . '/consultas/pagosView.php');
      break;
    /*Detalle de pagos*/
    case 'detpag':
      include(VIEW_DIR . '/consultas/detallePagoView.php');
      break;
    /*confirmar pagos*/
    case 'conpag':
      include(VIEW_DIR . '/consultas/confPagoView.php');
      break;

      case 'baja':
      baja();
      break;
    default:
      # code...
      break;
  }
} else {
    include(VIEW_DIR . 'rsolicitudView.php');
}


?>