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

	if ($.trim(documento).length > 0 && $.trim(tipoE).length > 0 && $.trim(finicial).length > 0 && $.trim(ffinal).length > 0 &&
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
        result = '<div class="alert alert-dismissible alert-success">';
        result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
        result += '<strong>EXITO: </strong>Se ha registrado la estadía correctamente.';
        result += '</div>';
        $('#_div_registroe_').html(result);
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


function fun_asignar(e) {
  if (e.keyCode == 13) {
    registrarEstadia();
  }
}

