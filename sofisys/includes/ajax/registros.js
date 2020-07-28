/*Metodo para registrar un nuevo cliente en caso de que no haya registros de el solicitante*/
function nuevoCliente()
{
  /*Datos del documento*/
  var num = $('#ndoc').val();
  var ext = $('#ext').val();
  var tip= $('#tipodoc').val();
  var edad = $('#edadc1').val();
  /*Datos del cliente*/
  var nac  = $('#nacionalidad').val();
  var nom  = $('#nombres').val();
  var ape  = $('#apellidos').val();
  var cel  = $('#celular').val();
  var ref  = $('#referencia').val();
  var eciv  = $('#estadoCivil').val();
  var ocu  = $('#ocupacion').val();


  if ($.trim(num).length > 0 && $.trim(ext).length > 0 && $.trim(tip).length > 0 && $.trim(edad).length > 0 && $.trim(nac).length > 0 && 
    $.trim(nom).length > 0 && $.trim(ape).length > 0 && $.trim(cel).length > 0 && 
    $.trim(ref).length > 0 && $.trim(eciv).length > 0 && $.trim(ocu).length > 0) 
  {
    nuevocliente_ajax(num,ext,tip,edad,nac,nom,ape,cel,ref,eciv,ocu);
  }
  else
  {
    result = '<div class="alert alert-dismissible alert-danger">';
    result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
    result += '<strong>ERROR: </strong>Todos los campos deben estar llenos.';
    result += '</div>';
    $('#_AJAX_CLI_').html(result);
  }
}
/*Metodo ajax registrar nuevo cliente*/
function nuevocliente_ajax(num,ext,tip,edad,nac,nom,ape,cel,ref,eciv,ocu)
{
  $.ajax
  ({
    url:"?view=registros&tipo=cli",
    method:"POST",
    data:{nu:num,ex:ext,ti:tip,ed:edad,na:nac,no:nom,ap:ape,ce:cel,re:ref,eci:eciv,oc:ocu},
    cache:"false",
    beforeSend:function() {
      result = '<div class="alert alert-dismissible alert-warning">';
      result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
      result += '<strong>PROCESANDO: </strong>Se esta procesando el registro.';
      result += '</div>';
      $('#_AJAX_CLI_').html(result);
    },
    success:function(data) {
      if (data == '1') {
        $(location).attr('href','?view=menus&tipo=ocu');
        alert('Se ha registrado exitosamente al cliente!');
        $('#_AJAX_CLI_').html(result);
      } else {
        result = '<div class="alert alert-dismissible alert-danger">';
        result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
        result += '<strong>ERROR: </strong>Ha ocurrido un error inesperado.<br />';
        result += '</div>' + data;
        $('#_AJAX_CLI_').html(result);
      }
    },
    complete:function() {
      
    }
  });
}

/*Metodo para registrar un nuevo usuario del sistemas*/
function nuevoUsuario()
{
  /*Datos del documento*/
  var num = $('#num_doc').val();
  var ext = $('#ext_doc').val();
  var tip= $('#tipod').val();

  /*Datos de persona*/
  var nom  = $('#nombres1').val();
  var ape  = $('#apellidos1').val();
  var cel  = $('#celular1').val();
  var ref  = $('#referencia1').val();

  /*Datos del usuario*/
  var usu  = $('#usuario1').val();
  var cla  = $('#clave1').val();


  if ($.trim(num).length > 0 && $.trim(ext).length > 0 && 
    $.trim(nom).length > 0 && $.trim(ape).length > 0 && $.trim(cel).length > 0 && 
    $.trim(ref).length > 0 && $.trim(usu).length > 0 && $.trim(cla).length > 0) 
  {
    nuevousuario_ajax(num,ext,tip,nom,ape,cel,ref,usu,cla);
  }
  else
  {
    result = '<div class="alert alert-dismissible alert-danger">';
    result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
    result += '<strong>ERROR: </strong>Todos los campos deben estar llenos.';
    result += '</div>';
    $('#_AJAX_USU_').html(result);
  }
}

/*Metodo ajax registrar nuevo cliente*/
function nuevousuario_ajax(num,ext,tip,nom,ape,cel,ref,usu,cla)
{
  $.ajax
  ({
    url:"?view=registros&tipo=usu",
    method:"POST",
    data:{nu:num,ex:ext,ti:tip,no:nom,ap:ape,ce:cel,re:ref,us:usu,cl:cla},
    cache:"false",
    beforeSend:function() {
      result = '<div class="alert alert-dismissible alert-warning">';
      result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
      result += '<strong>PROCESANDO: </strong>Se esta procesando el registro.';
      result += '</div>';
      $('#_AJAX_USU_').html(result);
    },
    success:function(data) {
      if (data == '1') {
        result = '<div class="alert alert-dismissible alert-success">';
        result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
        result += '<strong>COMPLETADO: </strong>Se ha registrado el usuario correctamente.';
        result += '</div>';
        $('#_AJAX_USU_').html(result);
      } else {
        result = '<div class="alert alert-dismissible alert-danger">';
        result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
        result += '<strong>ERROR: </strong>Ha ocurrido un error inesperado.<br />';
        result += '</div>' + data;
        $('#_AJAX_USU_').html(result);
      }
    },
    complete:function() {
      limpiarUsu();
    }
  });
}


/*Metodos para limpiar los campos de registros de formularios*/
function limpiarUsu()
{
  $('#ndoc').val('');
  $('#ext').val('');
  $('#año').val('');
  $('#edad').val('');
  /*Datos del cliente*/
  $('#nacionalidad').val('');
  $('#nombres').val('');
  $('#apellidos').val('');
  $('#celular').val('');
  $('#referencia').val('');
  $('#estadoCivil').val('');
  $('#ocupacion').val('');
}

function limpiarCli()
{
  $('#ndoc').val('');
  $('#ext').val('');
  $('#tipodoc').val('');
  $('#año').val('');
  $('#edad').val('');
  /*Datos del cliente*/
  $('#nacionalidad').val('');
  $('#nombres').val('');
  $('#apellidos').val('');
  $('#celular').val('');
  $('#referencia').val('');
  $('#estadoCivil').val('');
  $('#ocupacion').val('');
  $('#_AJAX_CLI_').html('');
}

function fun_registrar(e) {
  if (e.keyCode == 13) {
    nuevoCliente();
  }
}

/*Obtener fecha de nacimiento*/
$(function(){
  $("#añoc1").datepicker({
    changeMonth: true,
    changeYear: true,
    altField: "#añoc1",
    altFormat: "yy-mm-dd",
    dateFormat: "yy-mm-dd",
    onSelect: function(dateText){
      $('#nacimiento').val(dateText);
    }
  });
});

function calcularEdad() {
    var nacimiento = $('#nacimiento').val();
    var hoy = new Date();
    var cumpleanos = new Date(nacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    $('#edadc1').val(edad);
}