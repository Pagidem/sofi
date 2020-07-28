<?php
if (!isset($_SESSION['app_id'])) {
  header('location: ?view=login');
}

if (isset($_GET['tipo'])) {
  switch ($_GET['tipo']) {
    case 'cli':
    nuevo_cliente();
    break;
    case 'usu':
    nuevo_usuario();
    break;
    case 'est':
    nueva_estadia();
    break;
    case 'lib':
    liberar_habitacion();
    break;
    case 'edi':
    editar_habitacion();
    break;
    case 'edipag':
    editar_pago();
    break;
    case 'conf':
    confirmar_estadia();
    break;
    
    default:
      # code...
    break;
  }
} else {
  include(VIEW_DIR . 'principalView.php');
}
/*metodo del controlador para registrar un nuevo cliente*/
function nuevo_cliente() {
  require('model/registrosModel.php');
  $cliente = new Registros();

  /*numero de documento*/
  $num = $_POST['nu'];
  /*extencion de documento*/
  $ext = $_POST['ex'];
  /*tipo de documento*/
  $tip = $_POST['ti'];

  /*nacionalidad de cliente*/
  $nac = $_POST['na'];
  /*nombres*/
  $nom = $_POST['no'];
  /*apellidos*/
  $ape = $_POST['ap'];
  /*numero de celular*/
  $cel = $_POST['ce'];
  /*numero de referencia*/
  $ref = $_POST['re'];
  /*edad*/
  $edad = $_POST['ed'];
  /*estado civil*/
  $eciv = $_POST['eci'];
  /*ocupacion*/
  $ocu = $_POST['oc'];

  $result = $cliente->nuevo_cliente($num,$ext,$tip,$edad,$nac,$nom,$ape,$cel,$ref,$eciv,$ocu);
  
  echo $result;
}

/*metodo del controlador para registrar un nuevo usuario*/
function nuevo_usuario()
{
  /*Instancia del modelo Registros*/
  require('model/registrosModel.php');
  $cliente = new Registros();
  /*Variables pasadas por el AJAX*/
  /*numero de documento*/
  $num = $_POST['nu'];
  /*extencion de documento*/
  $ext = $_POST['ex'];
  /*tipo de documento*/
  $tip = $_POST['ti'];

  /*nombres*/
  $nom = $_POST['no'];
  /*apellidos*/
  $ape = $_POST['ap'];
  /*numero de celular*/
  $cel = $_POST['ce'];
  /*numero de referencia*/
  $ref = $_POST['re'];
  /*nombre de usuario*/
  $usu = $_POST['us'];
  /*clave*/
  $cla = $_POST['cl'];

  $result = $cliente->nuevo_usuario($num,$ext,$tip,$nom,$ape,$cel,$ref,$usu,$cla);
  
  echo $result;
}

/*metodo del controlador para registrar una estadia*/
function nueva_estadia()
{
  /*Instancia del modelo Registros*/
  require('model/registrosModel.php');
  $estadia = new Registros();
  /*Variables pasadas por el AJAX*/
  /*Variables para introducir los pagos*/
  /*acuenta*/
  $ac = $_POST['ac'];
  /*pagado*/
  $pa = $_POST['pa'];
  /*por pagar*/
  $xp = $_POST['xp'];
  /*total*/
  $to = $_POST['to'];

  /*Datos de solicitud*/
  /*tipo de solicitud*/
  $ts = $_POST['ts'];
  /*fecha inicial*/
  $fi = $_POST['fi'];
  /*fecha final*/
  $ff = $_POST['ff'];
  /*dias*/
  $ds = $_POST['ds'];
  /*numero de habitacion*/
  $nh = $_POST['nh'];
  /*id de cliente*/
  $ci = $_POST['ci'];

  $result = $estadia->nueva_estadia($ac,$pa,$xp,$to,$ts,$fi,$ff,$ds,$nh,$ci);
  
  echo $result;
}

/*metodo del controlador para liberar una habitacion*/
function liberar_habitacion()
{
  /*Instancia del modelo Registros*/
  require('model/registrosModel.php');
  $habitacion = new Registros();

  $num = $_POST['n'];

  $result = $habitacion->liberar_habitacion($num);

  echo $result;

}

function editar_habitacion()
{
  /*Instancia del modelo Registros*/
  require('model/registrosModel.php');
  $habitacion = new Registros();
  /*Variables pasadas por el AJAX*/
  /*Variables para editar la habitacion*/
  /*numero*/
  $numero = $_POST['n'];
  /*tipo*/
  $tipo = $_POST['t'];
  /*precio*/
  $precio = $_POST['p'];
  /*limpieza*/
  $limpieza = $_POST['e'];

  $result = $habitacion->editar_habitacion($numero,$tipo,$precio,$limpieza);

  echo $result;

}

function editar_pago()
{
  /*Instancia del modelo Registros*/
  require('model/registrosModel.php');
  $pago = new Registros();
  /*Variables pasadas por el AJAX*/
  /*Variables para editar la habitacion*/
  /*numero de registro*/
  $sol = $_GET['nr'];
  /*acuenta*/
  $acu = $_POST['a'];
  /*pagado*/
  $pag = $_POST['p'];
  /*por pagar*/
  $xpa = $_POST['x'];
  /*total*/
  $tot = $_POST['t'];

  $result = $pago->editarPago($sol,$acu,$pag,$xpa,$tot);

  echo $result;

}

/*metodo del controlador para liberar una habitacion*/
function confirmar_estadia()
{
  /*Instancia del modelo Registros*/
  require('model/registrosModel.php');
  $habitacion = new Registros();

  $num = $_POST['n'];

  $result = $habitacion->confirmarEstadia($num);

  echo $result;

}

