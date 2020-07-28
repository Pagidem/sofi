$(document).ready(function(){
	ehab();
}); 


function ehab()
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
			$('#_div_editarh_').html(result);
		},
		success:function(data)
		{
			if (data != '0') {
				for (var i = 0; i < data.length; i++)
				{
					/*asignar el numero de habitacion*/
					$('#enh2').val(data[i]['numeroh']);
					/*asignar el tipo de habitacion*/
					$('#eth2').val(data[i]['tipoh']);
					/*asignar el precio de habitacion*/
					$('#eph2').val(data[i]['precioh']);

					var lim = data[i]['estadoOcupado'];
					if (lim == 'libre') 
					{
						result = '<div class="alert alert-dismissible alert-success">';
						result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
						result += '<strong>CONTINUE: </strong>la habitación se encuentra vacia y '+data[i]['estadoLimpieza']+'!';
						result += '</div>';
						$('#_div_estadolim_').html(result);
					}else if(lim == 'reservada')
					{
						result = '<div class="alert alert-dismissible alert-warning">';
						result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
						result += '<strong>ESPERE: </strong>la habitación se encuentra reservada y '+data[i]['estadoLimpieza']+'!';
						result += '</div>';
						$('#_div_estadolim_').html(result);
					}else if(lim == 'ocupada')
					{
						result = '<div class="alert alert-dismissible alert-danger">';
						result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
						result += '<strong>ESPERE: </strong>la habitación se encuentra ocupada y '+data[i]['estadoLimpieza']+'!';
						result += '</div>';
						$('#_div_estadolim_').html(result);
					}

				}
			}
		},
		complete:function() {
			$('#_div_editarh_').html('');
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

function editarHab()
{
	var num = $('#enh2').val();
	var tipo = $('#eth2').val();
	var precio = $('#eph2').val();
	var limpio = $('#eeh2').val();

	if ($.trim(tipo).length > 0 && $.trim(precio).length > 0) 
	{
		editarhab_ajax(num,tipo,precio,limpio);
	}else{
		result = '<div class="alert alert-dismissible alert-warning">';
		result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
		result += '<strong>ERROR: </strong>Todos los campos deben estar llenos.';
		result += '</div>';
		$('#_div_editarh_').html(result);
	}
}

function editarhab_ajax(num,tipo,precio,estado)
{
	$.ajax({
  	url:"?view=registros&tipo=edi",
    method:"POST",
    data:{n:num,t:tipo,p:precio,e:estado},
    cache:"false",
    beforeSend:function()
    {
      result = '<div class="alert alert-dismissible alert-warning">';
		result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
		result += '<strong>ESPERE: </strong>Se esta procesando el registro.';
		result += '</div>';
		$('#_div_editarh_').html(result);
    },
    success:function(data)
    {
      if (data == '1') {
        
      	$(location).attr('href','?view=menus&tipo=edi');
        alert('Se ha editado exitosamente la habitación!');

      } else {
        result = '<div class="alert alert-dismissible alert-danger">';
        result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
        result += '<strong>ERROR: </strong>Ha ocurrido un error inesperado.<br />';
        result += '</div>' + data;
        $('#_div_editarh_').html(result);
      }
    },
    complete:function()
    {
      
    }
  });
}