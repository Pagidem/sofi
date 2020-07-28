$(document).ready(function(){
	detallePago();
}); 


function detallePago()
{
	var numero = urlParam('nh');

	
	$.ajax({
		url:"?view=consultas&tipo=detres&nr="+numero,
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
			$('#_div_dpag2').html(result);
		},
		success:function(data)
		{
			if (data != '0') {
				for (var i = 0; i < data.length; i++)
				{
					/*Numero de solicitud*/
					$('#detEst2').html(data[i]['ids']);
					/*Datos de cliente*/
					$('#denombre2').val(data[i]['nombres']);
					$('#deapellido2').val(data[i]['apellidos']);
					$('#dedocumento2').val(data[i]['numerod']);
					$('#decelular2').val(data[i]['celular']);
					/*Datos de habitacion*/
					$('#dehabitacion2').val(data[i]['numeroh']);
					$('#detipo2').val(data[i]['tipoh']);
					$('#deingreso2').val(data[i]['fechaIni']);
					$('#dedias2').val(data[i]['dias']);
					$('#deprecio2').val(data[i]['total']);
					/*Datos de paga*/

					

					$('#depagado2').val(data[i]['pagado']);
					$('#dedeuda2').val(data[i]['porpagar']);
					if ($('#dedeuda2').val() == 0) 
					{
						$('#deacuenta2').prop('disabled',true);
					}else{
						$('#deacuenta2').prop('disabled',false);
					}
					$('#detotal2').val(data[i]['total']);
				}
			}
		},
		complete:function() {
			$('#_div_dpag2').html('');
		}
	});
}

function editarPago()
{
	var acuenta = $('#deacuenta2').val();
	var pagado = $('#depagado2').val();
	var xpagar = $('#dedeuda2').val();
	var total = $('#detotal2').val();


	if (acuenta > 0) 
	{
		editarpago_ajax(acuenta,pagado,xpagar,total);
	}else
	{
		result = '<div class="alert alert-dismissible alert-warning">';
		result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
		result += '<strong>ERROR: </strong>Por favor ingrese un monto minimo!.';
		result += '</div>';
		$('#_div_dpag2').html(result);
	}
}

function editarpago_ajax(acu,pag,xpa,tot)
{
	var solicitud = urlParam('reg');
	$.ajax({
		url:"?view=registros&tipo=edipag&nr="+solicitud,
		method:"POST",
		data:{a:acu,p:pag,x:xpa,t:tot},
		cache:"false",
		beforeSend:function()
		{
			result = '<div class="alert alert-dismissible alert-warning">';
			result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
			result += '<strong>ESPERE: </strong>Se esta procesando el registro.';
			result += '</div>';
			$('#_div_dpag2').html(result);
		},
		success:function(data)
		{
			if (data == '1') {

				$(location).attr('href','?view=menus&tipo=ini');
				alert('Se ha registrado el pago exitosamente!');

			} else {
				result = '<div class="alert alert-dismissible alert-danger">';
				result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
				result += '<strong>ERROR: </strong>Ha ocurrido un error inesperado.<br />';
				result += '</div>' + data;
				$('#_div_dpag2').html(result);
			}
		},
		complete:function()
		{

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

/*metodo para calcular el total a pagar*/
function ediPago () 
{


	var acuenta = $('#deacuenta2').val();
	var pag = $('#depagado2').val();
	var total = $('#detotal2').val();

	if ($.trim(total).length > 0 && acuenta >= 0) 
	{
		/* Suma del pago actual con el pagado anteriormente*/
		var pagado = (parseInt(acuenta) + parseInt(pag));

		if (pagado > total) 
		{
			result = '<div class="alert alert-dismissible alert-danger">';
			result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
			result += '<strong>ERROR: </strong>El monto ingresado excede el monto a pagar, favor corrija!';
			result += '</div>';
			$('#_div_dpag2').html(result);
			$('#deacuenta2').val('0');
		}else if(pagado == total)
		{
			result = '<div class="alert alert-dismissible alert-success">';
			result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
			result += '<strong>PROCEDA: </strong>Los montos cuadran, por favor registre si desea!';
			result += '</div>';
			var deuda = (parseInt(total) - parseInt(pagado));
			$('#depagado2').val(pagado);
			$('#dedeuda2').val(deuda);
			$('#_div_dpag2').html(result);
		}else
		{
			result = '<div class="alert alert-dismissible alert-success">';
			result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
			result += '<strong>PROCEDA: </strong>Aún queda un monto pendiente por pagar, por favor registre si desea!';
			result += '</div>';
			var deuda = (parseInt(total) - parseInt(pagado));
			$('#depagado2').val(pagado);
			$('#dedeuda2').val(deuda);
			$('#_div_dpag2').html(result);
		}
		
		
	}else{
		result = '<div class="alert alert-dismissible alert-danger">';
		result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
		result += '<strong>ERROR: </strong>Debe ingresar un monto minimo a pagar!';
		result += '</div>';
		$('#_div_dpag2').html(result);
	}

}