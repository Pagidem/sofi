$(document).ready(function(){
  estadias();
  clientes();

}); 


function estadias() {
  $.ajax({
    url:"?view=consultas&tipo=regest",
    contentType:'application/json; charset=utf-8',
    method:"GET",
    data:"",
    cache:"false",
    dataType: 'json',
    beforeSend:function() {
      result = '<div class="alert alert-dismissible alert-warning">';
        result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
        result += '<strong>ESPERE: </strong>Recuperando datos del servidor.';
        result += '</div>';
        $('#_div_testadias1_').html(result);
    },
    success:function(data) {
      if (data != '0') {
        for (var i = 0; i < data.length; i++) {
          
          $('#testadias1').append('<tr><td>' + data[i]['ids'] + '</td><td>' + data[i]['tipoh'] + '</td><td>' + data[i]['tipo'] + '</td><td>' + data[i]['fechaIni'] + '</td><td>' + data[i]['fechaFin'] + '</td><td>' + data[i]['dias'] + '</td><td>' + data[i]['nombres'] + '</td><td>' + data[i]['apellidos'] + '</td><td>' + data[i]['total'] + '</td><td><a class="btn btn-success" href="?view=menus&tipo=detest&reg='+data[i]['ids']+'"><i class="fa fa-home" aria-hidden="true"></i></a></td></tr>');

        }
      } else {
        result = '<div class="alert alert-dismissible alert-danger">';
        result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
        result += '<strong>ESPERE: </strong>No hay registro de estadias.';
        result += '</div>';
        $('#_div_testadias1_').html(result);
      }
    },
    complete:function() {
      $('#registrar_btn').removeAttr('disabled');
    }
  });
}

function clientes() {
  $.ajax({
    url:"?view=consultas&tipo=clireg",
    contentType:'application/json; charset=utf-8',
    method:"GET",
    data:"",
    cache:"false",
    dataType: 'json',
    beforeSend:function() {
      result = '<div class="alert alert-dismissible alert-warning">';
        result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
        result += '<strong>ESPERE: </strong>Recuperando datos del servidor.';
        result += '</div>';
        $('#_div_clientesreg1_').html(result);
    },
    success:function(data) {
      if (data != '0') {
        for (var i = 0; i < data.length; i++) {
          
          $('#clientesreg1').append('<tr><td>' + data[i]['idc'] + '</td><td>' + data[i]['nombres'] + '</td><td>' + data[i]['apellidos'] + '</td><td>' + data[i]['numerod'] + '</td><td>' + data[i]['origen_cliente'] + '</td><td>' + data[i]['celular'] + '</td><td>' + data[i]['referencias'] + '</td><td>' + data[i]['edad'] + '</td></tr>');

        }
      } else {
        result = '<div class="alert alert-dismissible alert-danger">';
        result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
        result += '<strong>ESPERE: </strong>No hay registro de estadias.';
        result += '</div>';
        $('#_div_clientesreg1_').html(result);
      }
    },
    complete:function() {
      $('#registrar_btn').removeAttr('disabled');
    }
  });
}

function pagos() {
  $.ajax({
    url:"?view=consultas&tipo=pag",
    contentType:'application/json; charset=utf-8',
    method:"GET",
    data:"",
    cache:"false",
    dataType: 'json',
    beforeSend:function() {
      result = '<div class="alert alert-dismissible alert-warning">';
        result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
        result += '<strong>ESPERE: </strong>Recuperando datos del servidor.';
        result += '</div>';
        $('#_div_pagosreg1_').html(result);
    },
    success:function(data) {
      if (data != '0') {
        for (var i = 0; i < data.length; i++) {
          
          $('#pagosreg1').append('<tr><td >' + data[i]['ids'] + '</td><td >' + data[i]['tipo'] + '</td><td>' + data[i]['fechaIni'] + '</td><td>' + data[i]['fechaFin'] + '</td><td class="text-center ac">' + data[i]['acuenta'] + '</td><td class="pa">' + data[i]['pagado'] + '</td><td class="xp">' + data[i]['porpagar'] + '</td><td class="to">' + data[i]['total'] + '</td><td><a class="btn btn-primary" href="?view=menus&tipo=detpag&reg='+data[i]['ids']+'"><i class="fa fa-home" aria-hidden="true"></i></a></td></tr>');
          
        }
        pagado();
        deudas();
        total();


      } else {
        result = '<div class="alert alert-dismissible alert-danger">';
        result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
        result += '<strong>ESPERE: </strong>No hay registro de estadias.';
        result += '</div>';
        $('#_div_pagosreg1_').html(result);
      }
    },
    complete:function() {
      $('#registrar_btn').removeAttr('disabled');
    }
  });
}

function pagos1()
{
  var inicio = $('#ingreso1').val();
  var fin = $('#salida1').val();
  if ($.trim(inicio).length > 0 && $.trim(fin).length > 0) 
  {
    pagos_ajax(inicio,fin);
  }else{
    result = '<div class="alert alert-dismissible alert-warning">';
    result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
    result += '<strong>ESPERE: </strong>Por favor elija las fechas de inicio y fin.';
    result += '</div>';
    $('#fec1').html(result);
  }
}

function pagos_ajax(inicio,fin) {
  $.ajax({
    url:"?view=consultas&tipo=pagx",
    contentType:'application/json; charset=utf-8',
    method:"GET",
    data:{ini:inicio,sal:fin},
    cache:"false",
    dataType: 'json',
    beforeSend:function() {
      result = '<div class="alert alert-dismissible alert-warning">';
        result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
        result += '<strong>ESPERE: </strong>Recuperando datos del servidor.';
        result += '</div>';
        $('#_div_pagosreg1').html(result);
    },
    success:function(data) {
      if (data != 'Sin resultados') {
        
        for (var i = 0; i < data.length; i++) {
          
          $('#pagosreg1').append('<tr><td >' + data[i]['ids'] + '</td><td >' + data[i]['tipo'] + '</td><td>' + data[i]['fechaIni'] + '</td><td>' + data[i]['fechaFin'] + '</td><td class="text-center ac">' + data[i]['acuenta'] + '</td><td class="pa">' + data[i]['pagado'] + '</td><td class="xp">' + data[i]['porpagar'] + '</td><td class="to">' + data[i]['total'] + '</td><td><a class="btn btn-primary" href="?view=menus&tipo=detpag&reg='+data[i]['ids']+'"><i class="fa fa-home" aria-hidden="true"></i></a></td></tr>');
          $('#_div_pagosreg1').html('');
        }
        pagado();
        deudas();
        total();



      } else {
        result = '<div class="alert alert-dismissible alert-danger">';
        result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
        result += '<strong>ESPERE: </strong>No hay registro de estadias.';
        result += '</div>';
        $('#_div_pagosreg1').html(result);
      }
    },
    complete:function() {
      $('#registrar_btn').removeAttr('disabled');
    }
  });
}




function pagado()
{

  var sum = 0;
    $('.pa').each(function(){
        sum+=Number($(this).text());  
    });
    $('#tpagado1').val(sum+" Bs.");

}

function deudas()
{

  var deu = 0;
    $('.xp').each(function(){
        deu+=Number($(this).text());  
    });
    $('#tdeuda1').val(deu+" Bs.");

}

function total()
{
  var tot = 0;
  $('.to').each(function()
    {
      tot+= Number($(this).text());
    });
  $('#ttotal1').val(tot+" Bs.");
}


$('#btnPagos').on('click',function() {
    pagos1();
    if ($('#fec1').html() != '') 
    {
      $(this).prop("disabled",false);
    }else{
      $(this).prop("disabled",true);
    }
});

/*Obtener fecha inicial*/
$(function(){
  $("#deingreso1").datepicker({
    changeMonth: true,
    changeYear: true,
    altField: "#ingreso1",
    altFormat: "yy-mm-dd",
    dateFormat: "yy-mm-dd",
    onSelect: function(dateText){
      $('#ingreso1').val(dateText);
    }
  });
});
/*Obtener fecha final*/
$(function(){
  $("#desalida1").datepicker({
    changeMonth: true,
    changeYear: true,
    altField: "#salida1",
    altFormat: "yy-mm-dd",
    dateFormat: "yy-mm-dd",
    onSelect: function(dateText2){
      $('#salida1').val(dateText2);
      
      

    }
  });
});










/*Funciones para ordenar resultados de tabla*/
$('th').click(function() {
  var table = $(this).parents('table').eq(0)
  var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
  this.asc = !this.asc
  if (!this.asc) {
    rows = rows.reverse()
  }
  for (var i = 0; i < rows.length; i++) {
    table.append(rows[i])
  }
  setIcon($(this), this.asc);
})

function comparer(index) {
  return function(a, b) {
    var valA = getCellValue(a, index),
    valB = getCellValue(b, index)
    return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
  }
}

function getCellValue(row, index) {
  return $(row).children('td').eq(index).html()
}

function setIcon(element, asc) {
  $("th").each(function(index) {
    $(this).removeClass("sorting");
    $(this).removeClass("asc");
    $(this).removeClass("desc");
  });
  element.addClass("sorting");
  if (asc) element.addClass("asc");
  else element.addClass("desc");
}