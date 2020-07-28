$(document).ready(function(){
	estadia();
}); 


function estadia()
{
	var numero = urlParam('nh');

	
	$.ajax({
		url:"?view=consultas&tipo=rest&nh="+numero,
		contentType:'application/json; charset=utf-8',
		method:"GET",
		data:"",
		cache:"false",
		dataType: 'json',
		beforeSend:function()
		{
			result = '<div class="alert alert-dismissible alert-warning">';
			result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
			result += '<strong>ESPERE: </strong>Recuperando datos del servidor.';
			result += '</div>';
			$('#_div_restadia_').html(result);
		},
		success:function(data)
		{
			if (data != '0') {
				for (var i = 0; i < data.length; i++)
				{
					/*asignar el numero de habitacion*/
					$('#enh1').val(data[i]['numeroh']);
          $('#enh1').text(data[i]['numeroh']);
					/*asignar el tipo de habitacion*/
					$('#eth1').val(data[i]['tipoh']);
					/*asignar el precio de habitacion*/
					$('#eph1').val(data[i]['precioh']);
				}
			}
		},
		complete:function() {
			$('#_div_restadia_').html('');
		}
	});
}

function urlParam (name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}

/*Obtener fecha inicial*/
$(function(){
  $("#fecha1").datepicker({
    changeMonth: true,
    changeYear: true,
    altField: "#fecha1",
    altFormat: "yy-mm-dd",
    dateFormat: "yy-mm-dd",
    onSelect: function(dateText){
      $('#f1').val(dateText);
    }
  });
});
/*Obtener fecha final*/
$(function(){
  $("#fecha2").datepicker({
    changeMonth: true,
    changeYear: true,
    altField: "#fecha2",
    altFormat: "yy-mm-dd",
    dateFormat: "yy-mm-dd",
    onSelect: function(dateText2){
      $('#f2').val(dateText2);
      
      

    }
  });
});
/*Metodo para calcular dias y el precio de estadia dependiendo la fecha*/
function calcDias()
{

  var date2 = new Date($("#f2").val()).getTime();
  var date1 = new Date($("#f1").val()).getTime();
  
  var dif = date2 - date1;

  var dias = Math.round(dif/(1000*60*60*24));

  $("#dias").val(dias);

  var precio = $('#eph1').val();

  $('#peh1').val(precio * dias);
  $('#total1').val(precio * dias);
}

/*metodo para calcular el total a pagar*/
function restar () {

  
    total = $('#total1').val();
    acuenta = $('#acu1').val();
    
    if ($.trim(total).length > 0) 
    {
        /* Esta es la resta. */
      total = (parseInt(total) - parseInt(acuenta));
    
      // Colocar el resultado de la suma en el control "span".
      pagado = $('#pag1').val(acuenta);
      xpagar = $('#xpag1').val(total);
      $('#_div_restadia_').html('');
    }
    else
    {
      result = '<div class="alert alert-dismissible alert-danger">';
      result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
      result += '<strong>ERROR: </strong>Debe ingresar un total de pagos!';
      result += '</div>';
      $('#_div_restadia_').html(result);
    }
}

function existe()
{
  var ci = $('#eci2').val();
  if ($.trim(ci).length > 0) {
    existe_ajax(ci);
  }else{
    result = '<div class="alert alert-dismissible alert-warning">';
    result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
    result += '<strong>ESPERE: </strong>Por favor introduzca el numero de documento.';
    result += '</div>';
    $('#_div_ecliente1_').html(result);
  }
}

function existe_ajax(ci)
{
  $.ajax({
    url:"?view=consultas&tipo=ecli",
    contentType:'application/json; charset=utf-8',
    method:"GET",
    data:{ci:ci},
    cache:"false",
    dataType: 'json',
    beforeSend:function()
    {
      result = '<div class="alert alert-dismissible alert-warning">';
      result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
      result += '<strong>ESPERE: </strong>Recuperando datos del servidor.';
      result += '</div>';
      $('#_div_ecliente1_').html(result);
    },
    success:function(data)
    {
      if (data != '0') {
        for (var i = 0; i < data.length; i++)
        {
          /*asignar el numero de documento*/
          $('#iddoc1').val(data[i]['idd']);

          result = '<div class="alert alert-dismissible alert-success">';
          result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
          result += '<strong>Cliente registrado : </strong>Continue con los datos de habitación.';
          result += '</div>';
          $('#_div_ecliente1_').html(result);
        }
      }else{
          result = '<div class="alert alert-dismissible alert-danger">';
          result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
          result += '<strong>ESPERE: </strong>Cliente no registrado, favor registrar!.';
          result += '</div>';
          $('#_div_ecliente1_').html(result);
      }
    },
    complete:function() {
      
    }
  });
}

function eliminarAlerta()
{
  $('#_div_restadia_').html('');
  $('#_div_ecliente1_').html('');
  $('#_div_registroe_').html('');
}

function registrarEstadia()
{
  /*Ya hay registrado documento consultar ID*/
  var documento = $('#iddoc1').val();
  /*Datos para habitacion*/
  var tipoE = $('#tEstadia').val();
  var finicial = $('#f1').val();
  var ffinal = $('#f2').val();
  var dias = $('#dias').val();

  var habitacion = $('#enh1').val();

  /*Datos para tabla pagos*/
  
  var acu = $('#acu1').val();
  var pagado = $('#pag1').val();
  var xpagar = $('#xpag1').val();
  var total = $('#total1').val();

  if ($.trim(documento).length > 0 && $.trim(tipoE).length > 0 && $.trim(finicial).length > 0 && 
    $.trim(dias).length > 0 && $.trim(habitacion).length > 0 && $.trim(acu).length > 0 && 
    $.trim(pagado).length > 0 && $.trim(xpagar).length > 0 && $.trim(total).length > 0 )
  {
    estadia_ajax(acu,pagado,xpagar,total,tipoE,finicial,ffinal,dias,habitacion,documento);
  }
  else
  {
    result = '<div class="alert alert-dismissible alert-danger">';
    result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
    result += '<strong>ERROR: </strong>Todos los campos deben estar llenos.';
    result += '</div>';
    $('#_div_registroe_').html(result);
  }
}

function estadia_ajax(acu,pag,xpa,tot,ts,fis,ffs,ds,nh,ci)
{
  $.ajax({
  url:"?view=registros&tipo=est",
    method:"POST",
    data:{ac:acu,pa:pag,xp:xpa,to:tot,ts:ts,fi:fis,ff:ffs,ds:ds,nh:nh,ci:ci},
    cache:"false",
    beforeSend:function()
    {
      result = '<div class="alert alert-dismissible alert-warning">';
      result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
      result += '<strong>PROCESANDO: </strong>Se esta procesando el registro.';
      result += '</div>';
      $('#_div_registroe_').html(result);
    },
    success:function(data)
    {
      if (data == '1') {
        $(location).attr('href','?view=principal');
        alert('Se ha registrado exitosamente la estadia!');
      } else {
        result = '<div class="alert alert-dismissible alert-danger">';
        result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
        result += '<strong>ERROR: </strong>Ha ocurrido un error inesperado.<br />';
        result += '</div>' + data;
        $('#_div_registroe_').html(result);
      }
    },
    complete:function()
    {
      iHabitacion();
    }
  });
}

function iHabitacion()
{
  /*Ya hay registrado documento consultar ID*/
  $('#iddoc1').attr('disabled','disabled');
  /*Datos para habitacion*/
  var tipoE = $('#tEstadia').val();
  var finicial = $('#f1').attr('disabled','disabled');
  var ffinal = $('#f2').attr('disabled','disabled');
  var dias = $('#dias').val();

  var habitacion = $('#enh1').attr('disabled','disabled');

  /*Datos para tabla pagos*/
  
  var acuenta = $('#acu1').attr('disabled','disabled');
  var pagado = $('#pag1').val();
  var xpagar = $('#xpag1').val();
  var total = $('#total1').val();
}