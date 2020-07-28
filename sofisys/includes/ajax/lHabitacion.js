$(document).ready(function(){
	liberar();
}); 

function liberar()
{
	$.ajax({
    url:"?view=consultas&tipo=hab",
    contentType:'application/json; charset=utf-14',
    method:"GET",
    data:"",
    cache:"false",
    dataType: 'json',
    beforeSend:function() {
      result = '<div class="alert alert-dismissible alert-warning">';
      result += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
      result += '<strong>ESPERE: </strong>Recuperando datos del servidor.';
      result += '</div>';
      $('#_div_habitacion').html(result);
    },
    success:function(data) {
      if (data != '0') {
        for (var i = 0; i < data.length; i++) {
          
          var nh = data[i]['numeroh'];

          switch(nh)
          {
            case '1' :
              $('#nh1').html('Habitación # ' + data[i]['numeroh']);
              $('#lh1').html('Tipo : ' + data[i]['tipoh']);
              $('#eh1').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp1').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh1').text();
              var lim = $('#elhp1').text();

              if (est1.includes('libre')) 
              {
                $("#divh1").addClass("small-box bg-info");
                $('#a1').attr('onclick','alerta(1)');
                $('#a1').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih1').show();
                  $('#iih1').hide();
                  $('#ocu1').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih1').hide();
                  $('#iih1').hide();
                  $('#ocu1').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh1").addClass("small-box bg-danger");
                $('#a1').attr('onclick','liberar_ajax(1)');
                $('#a1').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih1').show();
                  $('#iih1').hide();
                  $('#ocu1').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih1').hide();
                  $('#iih1').show();
                  $('#ocu1').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh1").addClass("small-box bg-warning");
                $('#a1').attr('onclick','liberar_ajax(1)');
                $('#a1').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih1').show();
                  $('#iih1').hide();
                  $('#ocu1').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih1').hide();
                  $('#iih1').hide();
                  $('#ocu1').show();
                }
              }
            break;

            case '2' :
              $('#nh2').html('Habitación # ' + data[i]['numeroh']);
              $('#lh2').html('Tipo : ' + data[i]['tipoh']);
              $('#eh2').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp2').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh2').text();
              var lim = $('#elhp2').text();

              if (est1.includes('libre')) 
              {
                $("#divh2").addClass("small-box bg-info");
                $('#a2').attr('onclick','alerta(2)');
                $('#a2').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih2').show();
                  $('#iih2').hide();
                  $('#ocu2').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih2').hide();
                  $('#iih2').hide();
                  $('#ocu2').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh2").addClass("small-box bg-danger");
                $('#a2').attr('onclick','liberar_ajax(2)');
                $('#a2').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih2').show();
                  $('#iih2').hide();
                  $('#ocu2').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih2').hide();
                  $('#iih2').show();
                  $('#ocu2').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh2").addClass("small-box bg-warning");
                $('#a2').attr('onclick','liberar_ajax(2)');
                $('#a2').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih2').show();
                  $('#iih2').hide();
                  $('#ocu2').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih2').hide();
                  $('#iih2').hide();
                  $('#ocu2').show();
                }
              }
            break;

            case '3' :
              $('#nh3').html('Habitación # ' + data[i]['numeroh']);
              $('#lh3').html('Tipo : ' + data[i]['tipoh']);
              $('#eh3').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp3').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh3').text();
              var lim = $('#elhp3').text();

              if (est1.includes('libre')) 
              {
                $("#divh3").addClass("small-box bg-info");
                $('#a3').attr('onclick','alerta(3)');
                $('#a3').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih3').show();
                  $('#iih3').hide();
                  $('#ocu3').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih3').hide();
                  $('#iih3').hide();
                  $('#ocu3').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh3").addClass("small-box bg-danger");
                $('#a3').attr('onclick','liberar_ajax(3)');
                $('#a3').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih3').show();
                  $('#iih3').hide();
                  $('#ocu3').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih3').hide();
                  $('#iih3').show();
                  $('#ocu3').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh3").addClass("small-box bg-warning");
                $('#a3').attr('onclick','liberar_ajax(3)');
                $('#a3').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih3').show();
                  $('#iih3').hide();
                  $('#ocu3').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih3').hide();
                  $('#iih3').hide();
                  $('#ocu3').show();
                }
              }
            break;
            
            case '4' :
              $('#nh4').html('Habitación # ' + data[i]['numeroh']);
              $('#lh4').html('Tipo : ' + data[i]['tipoh']);
              $('#eh4').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp4').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh4').text();
              var lim = $('#elhp4').text();

              if (est1.includes('libre')) 
              {
                $("#divh4").addClass("small-box bg-info");
                $('#a4').attr('onclick','alerta(4)');
                $('#a4').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih4').show();
                  $('#iih4').hide();
                  $('#ocu4').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih4').hide();
                  $('#iih4').hide();
                  $('#ocu4').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh4").addClass("small-box bg-danger");
                $('#a4').attr('onclick','liberar_ajax(4)');
                $('#a4').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih4').show();
                  $('#iih4').hide();
                  $('#ocu4').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih4').hide();
                  $('#iih4').show();
                  $('#ocu4').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh4").addClass("small-box bg-warning");
                $('#a4').attr('onclick','liberar_ajax(4)');
                $('#a4').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih4').show();
                  $('#iih4').hide();
                  $('#ocu4').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih4').hide();
                  $('#iih4').hide();
                  $('#ocu4').show();
                }
              }
            break;
            
            case '5' :
              $('#nh5').html('Habitación # ' + data[i]['numeroh']);
              $('#lh5').html('Tipo : ' + data[i]['tipoh']);
              $('#eh5').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp5').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh5').text();
              var lim = $('#elhp5').text();

              if (est1.includes('libre')) 
              {
                $("#divh5").addClass("small-box bg-info");
                $('#a5').attr('onclick','alerta(5)');
                $('#a5').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih5').show();
                  $('#iih5').hide();
                  $('#ocu5').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih5').hide();
                  $('#iih5').hide();
                  $('#ocu5').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh5").addClass("small-box bg-danger");
                $('#a5').attr('onclick','liberar_ajax(5)');
                $('#a5').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih5').show();
                  $('#iih5').hide();
                  $('#ocu5').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih5').hide();
                  $('#iih5').show();
                  $('#ocu5').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh5").addClass("small-box bg-warning");
                $('#a5').attr('onclick','liberar_ajax(5)');
                $('#a5').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih5').show();
                  $('#iih5').hide();
                  $('#ocu5').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih5').hide();
                  $('#iih5').hide();
                  $('#ocu5').show();
                }
              }
            break;
            
            case '6' :
              $('#nh6').html('Habitación # ' + data[i]['numeroh']);
              $('#lh6').html('Tipo : ' + data[i]['tipoh']);
              $('#eh6').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp6').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh6').text();
              var lim = $('#elhp6').text();

              if (est1.includes('libre')) 
              {
                $("#divh6").addClass("small-box bg-info");
                $('#a6').attr('onclick','alerta(6)');
                $('#a6').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih6').show();
                  $('#iih6').hide();
                  $('#ocu6').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih6').hide();
                  $('#iih6').hide();
                  $('#ocu6').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh6").addClass("small-box bg-danger");
                $('#a6').attr('onclick','liberar_ajax(6)');
                $('#a6').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih6').show();
                  $('#iih6').hide();
                  $('#ocu6').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih6').hide();
                  $('#iih6').show();
                  $('#ocu6').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh6").addClass("small-box bg-warning");
                $('#a6').attr('onclick','liberar_ajax(6)');
                $('#a6').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih6').show();
                  $('#iih6').hide();
                  $('#ocu6').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih6').hide();
                  $('#iih6').hide();
                  $('#ocu6').show();
                }
              }
            break;

            case '7' :
              $('#nh7').html('Habitación # ' + data[i]['numeroh']);
              $('#lh7').html('Tipo : ' + data[i]['tipoh']);
              $('#eh7').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp7').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh7').text();
              var lim = $('#elhp7').text();

              if (est1.includes('libre')) 
              {
                $("#divh7").addClass("small-box bg-info");
                $('#a7').attr('onclick','alerta(7)');
                $('#a7').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih7').show();
                  $('#iih7').hide();
                  $('#ocu7').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih7').hide();
                  $('#iih7').hide();
                  $('#ocu7').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh7").addClass("small-box bg-danger");
                $('#a7').attr('onclick','liberar_ajax(7)');
                $('#a7').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih7').show();
                  $('#iih7').hide();
                  $('#ocu7').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih7').hide();
                  $('#iih7').show();
                  $('#ocu7').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh7").addClass("small-box bg-warning");
                $('#a7').attr('onclick','liberar_ajax(7)');
                $('#a7').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih7').show();
                  $('#iih7').hide();
                  $('#ocu7').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih7').hide();
                  $('#iih7').hide();
                  $('#ocu7').show();
                }
              }
            break;

            case '8' :
              $('#nh8').html('Habitación # ' + data[i]['numeroh']);
              $('#lh8').html('Tipo : ' + data[i]['tipoh']);
              $('#eh8').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp8').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh8').text();
              var lim = $('#elhp8').text();

              if (est1.includes('libre')) 
              {
                $("#divh8").addClass("small-box bg-info");
                $('#a8').attr('onclick','alerta(8)');
                $('#a8').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih8').show();
                  $('#iih8').hide();
                  $('#ocu8').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih8').hide();
                  $('#iih8').hide();
                  $('#ocu8').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh8").addClass("small-box bg-danger");
                $('#a8').attr('onclick','liberar_ajax(8)');
                $('#a8').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih8').show();
                  $('#iih8').hide();
                  $('#ocu8').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih8').hide();
                  $('#iih8').show();
                  $('#ocu8').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh8").addClass("small-box bg-warning");
                $('#a8').attr('onclick','liberar_ajax(8)');
                $('#a8').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih8').show();
                  $('#iih8').hide();
                  $('#ocu8').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih8').hide();
                  $('#iih8').hide();
                  $('#ocu8').show();
                }
              }
            break;

            case '9' :
              $('#nh9').html('Habitación # ' + data[i]['numeroh']);
              $('#lh9').html('Tipo : ' + data[i]['tipoh']);
              $('#eh9').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp9').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh9').text();
              var lim = $('#elhp9').text();

              if (est1.includes('libre')) 
              {
                $("#divh9").addClass("small-box bg-info");
                $('#a9').attr('onclick','alerta(9)');
                $('#a9').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih9').show();
                  $('#iih9').hide();
                  $('#ocu9').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih9').hide();
                  $('#iih9').hide();
                  $('#ocu9').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh9").addClass("small-box bg-danger");
                $('#a9').attr('onclick','liberar_ajax(9)');
                $('#a9').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih9').show();
                  $('#iih9').hide();
                  $('#ocu9').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih9').hide();
                  $('#iih9').show();
                  $('#ocu9').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh9").addClass("small-box bg-warning");
                $('#a9').attr('onclick','liberar_ajax(9)');
                $('#a9').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih9').show();
                  $('#iih9').hide();
                  $('#ocu9').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih9').hide();
                  $('#iih9').hide();
                  $('#ocu9').show();
                }
              }
            break;

            case '10' :
              $('#nh10').html('Habitación # ' + data[i]['numeroh']);
              $('#lh10').html('Tipo : ' + data[i]['tipoh']);
              $('#eh10').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp10').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh10').text();
              var lim = $('#elhp10').text();

              if (est1.includes('libre')) 
              {
                $("#divh10").addClass("small-box bg-info");
                $('#a10').attr('onclick','alerta(10)');
                $('#a10').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih10').show();
                  $('#iih10').hide();
                  $('#ocu10').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih10').hide();
                  $('#iih10').hide();
                  $('#ocu10').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh10").addClass("small-box bg-danger");
                $('#a10').attr('onclick','liberar_ajax(10)');
                $('#a10').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih10').show();
                  $('#iih10').hide();
                  $('#ocu10').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih10').hide();
                  $('#iih10').show();
                  $('#ocu10').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh10").addClass("small-box bg-warning");
                $('#a10').attr('onclick','liberar_ajax(10)');
                $('#a10').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih10').show();
                  $('#iih10').hide();
                  $('#ocu10').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih10').hide();
                  $('#iih10').hide();
                  $('#ocu10').show();
                }
              }
            break;

            case '11' :
              $('#nh11').html('Habitación # ' + data[i]['numeroh']);
              $('#lh11').html('Tipo : ' + data[i]['tipoh']);
              $('#eh11').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp11').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh11').text();
              var lim = $('#elhp11').text();

              if (est1.includes('libre')) 
              {
                $("#divh11").addClass("small-box bg-info");
                $('#a11').attr('onclick','alerta(11)');
                $('#a11').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih11').show();
                  $('#iih11').hide();
                  $('#ocu11').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih11').hide();
                  $('#iih11').hide();
                  $('#ocu11').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh11").addClass("small-box bg-danger");
                $('#a11').attr('onclick','liberar_ajax(11)');
                $('#a11').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih11').show();
                  $('#iih11').hide();
                  $('#ocu11').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih11').hide();
                  $('#iih11').show();
                  $('#ocu11').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh11").addClass("small-box bg-warning");
                $('#a11').attr('onclick','liberar_ajax(11)');
                $('#a11').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih11').show();
                  $('#iih11').hide();
                  $('#ocu11').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih11').hide();
                  $('#iih11').hide();
                  $('#ocu11').show();
                }
              }
            break;

            case '12' :
              $('#nh12').html('Habitación # ' + data[i]['numeroh']);
              $('#lh12').html('Tipo : ' + data[i]['tipoh']);
              $('#eh12').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp12').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh12').text();
              var lim = $('#elhp12').text();

              if (est1.includes('libre')) 
              {
                $("#divh12").addClass("small-box bg-info");
                $('#a12').attr('onclick','alerta(12)');
                $('#a12').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih12').show();
                  $('#iih12').hide();
                  $('#ocu12').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih12').hide();
                  $('#iih12').hide();
                  $('#ocu12').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh12").addClass("small-box bg-danger");
                $('#a12').attr('onclick','liberar_ajax(12)');
                $('#a12').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih12').show();
                  $('#iih12').hide();
                  $('#ocu12').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih12').hide();
                  $('#iih12').show();
                  $('#ocu12').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh12").addClass("small-box bg-warning");
                $('#a12').attr('onclick','liberar_ajax(12)');
                $('#a12').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih12').show();
                  $('#iih12').hide();
                  $('#ocu12').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih12').hide();
                  $('#iih12').hide();
                  $('#ocu12').show();
                }
              }
            break;

            case '13' :
              $('#nh13').html('Habitación # ' + data[i]['numeroh']);
              $('#lh13').html('Tipo : ' + data[i]['tipoh']);
              $('#eh13').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp13').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh13').text();
              var lim = $('#elhp13').text();

              if (est1.includes('libre')) 
              {
                $("#divh13").addClass("small-box bg-info");
                $('#a13').attr('onclick','alerta(13)');
                $('#a13').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih13').show();
                  $('#iih13').hide();
                  $('#ocu13').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih13').hide();
                  $('#iih13').hide();
                  $('#ocu13').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh13").addClass("small-box bg-danger");
                $('#a13').attr('onclick','liberar_ajax(13)');
                $('#a13').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih13').show();
                  $('#iih13').hide();
                  $('#ocu13').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih13').hide();
                  $('#iih13').show();
                  $('#ocu13').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh13").addClass("small-box bg-warning");
                $('#a13').attr('onclick','liberar_ajax(13)');
                $('#a13').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih13').show();
                  $('#iih13').hide();
                  $('#ocu13').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih13').hide();
                  $('#iih13').hide();
                  $('#ocu13').show();
                }
              }
            break;
            
            case '14' :
              $('#nh14').html('Habitación # ' + data[i]['numeroh']);
              $('#lh14').html('Tipo : ' + data[i]['tipoh']);
              $('#eh14').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp14').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh14').text();
              var lim = $('#elhp14').text();

              if (est1.includes('libre')) 
              {
                $("#divh14").addClass("small-box bg-info");
                $('#a14').attr('onclick','alerta(14)');
                $('#a14').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih14').show();
                  $('#iih14').hide();
                  $('#ocu14').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih14').hide();
                  $('#iih14').hide();
                  $('#ocu14').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh14").addClass("small-box bg-danger");
                $('#a14').attr('onclick','liberar_ajax(14)');
                $('#a14').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih14').show();
                  $('#iih14').hide();
                  $('#ocu14').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih14').hide();
                  $('#iih14').show();
                  $('#ocu14').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh14").addClass("small-box bg-warning");
                $('#a14').attr('onclick','liberar_ajax(14)');
                $('#a14').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih14').show();
                  $('#iih14').hide();
                  $('#ocu14').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih14').hide();
                  $('#iih14').hide();
                  $('#ocu14').show();
                }
              }
            break;

            case '15' :
              $('#nh15').html('Habitación # ' + data[i]['numeroh']);
              $('#lh15').html('Tipo : ' + data[i]['tipoh']);
              $('#eh15').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp15').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh15').text();
              var lim = $('#elhp15').text();

              if (est1.includes('libre')) 
              {
                $("#divh15").addClass("small-box bg-info");
                $('#a15').attr('onclick','alerta(15)');
                $('#a15').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih15').show();
                  $('#iih15').hide();
                  $('#ocu15').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih15').hide();
                  $('#iih15').hide();
                  $('#ocu15').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh15").addClass("small-box bg-danger");
                $('#a15').attr('onclick','liberar_ajax(15)');
                $('#a15').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih15').show();
                  $('#iih15').hide();
                  $('#ocu15').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih15').hide();
                  $('#iih15').show();
                  $('#ocu15').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh15").addClass("small-box bg-warning");
                $('#a15').attr('onclick','liberar_ajax(15)');
                $('#a15').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih15').show();
                  $('#iih15').hide();
                  $('#ocu15').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih15').hide();
                  $('#iih15').hide();
                  $('#ocu15').show();
                }
              }
            break;
            
            case '16' :
              $('#nh16').html('Habitación # ' + data[i]['numeroh']);
              $('#lh16').html('Tipo : ' + data[i]['tipoh']);
              $('#eh16').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp16').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh16').text();
              var lim = $('#elhp16').text();

              if (est1.includes('libre')) 
              {
                $("#divh16").addClass("small-box bg-info");
                $('#a16').attr('onclick','alerta(16)');
                $('#a16').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih16').show();
                  $('#iih16').hide();
                  $('#ocu16').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih16').hide();
                  $('#iih16').hide();
                  $('#ocu16').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh16").addClass("small-box bg-danger");
                $('#a16').attr('onclick','liberar_ajax(16)');
                $('#a16').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih16').show();
                  $('#iih16').hide();
                  $('#ocu16').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih16').hide();
                  $('#iih16').show();
                  $('#ocu16').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh16").addClass("small-box bg-warning");
                $('#a16').attr('onclick','liberar_ajax(16)');
                $('#a16').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih16').show();
                  $('#iih16').hide();
                  $('#ocu16').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih16').hide();
                  $('#iih16').hide();
                  $('#ocu16').show();
                }
              }
            break;

            case '17' :
              $('#nh17').html('Habitación # ' + data[i]['numeroh']);
              $('#lh17').html('Tipo : ' + data[i]['tipoh']);
              $('#eh17').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp17').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh17').text();
              var lim = $('#elhp17').text();

              if (est1.includes('libre')) 
              {
                $("#divh17").addClass("small-box bg-info");
                $('#a17').attr('onclick','alerta(17)');
                $('#a17').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih17').show();
                  $('#iih17').hide();
                  $('#ocu17').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih17').hide();
                  $('#iih17').hide();
                  $('#ocu17').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh17").addClass("small-box bg-danger");
                $('#a17').attr('onclick','liberar_ajax(17)');
                $('#a17').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih17').show();
                  $('#iih17').hide();
                  $('#ocu17').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih17').hide();
                  $('#iih17').show();
                  $('#ocu17').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh17").addClass("small-box bg-warning");
                $('#a17').attr('onclick','liberar_ajax(17)');
                $('#a17').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih17').show();
                  $('#iih17').hide();
                  $('#ocu17').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih17').hide();
                  $('#iih17').hide();
                  $('#ocu17').show();
                }
              }
            break;

            case '18' :
              $('#nh18').html('Habitación # ' + data[i]['numeroh']);
              $('#lh18').html('Tipo : ' + data[i]['tipoh']);
              $('#eh18').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp18').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh18').text();
              var lim = $('#elhp18').text();

              if (est1.includes('libre')) 
              {
                $("#divh18").addClass("small-box bg-info");
                $('#a18').attr('onclick','alerta(18)');
                $('#a18').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih18').show();
                  $('#iih18').hide();
                  $('#ocu18').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih18').hide();
                  $('#iih18').hide();
                  $('#ocu18').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh18").addClass("small-box bg-danger");
                $('#a18').attr('onclick','liberar_ajax(18)');
                $('#a18').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih18').show();
                  $('#iih18').hide();
                  $('#ocu18').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih18').hide();
                  $('#iih18').show();
                  $('#ocu18').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh18").addClass("small-box bg-warning");
                $('#a18').attr('onclick','liberar_ajax(18)');
                $('#a18').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih18').show();
                  $('#iih18').hide();
                  $('#ocu18').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih18').hide();
                  $('#iih18').hide();
                  $('#ocu18').show();
                }
              }
            break;
           
            case '19' :
              $('#nh19').html('Habitación # ' + data[i]['numeroh']);
              $('#lh19').html('Tipo : ' + data[i]['tipoh']);
              $('#eh19').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp19').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh19').text();
              var lim = $('#elhp19').text();

              if (est1.includes('libre')) 
              {
                $("#divh19").addClass("small-box bg-info");
                $('#a19').attr('onclick','alerta(19)');
                $('#a19').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih19').show();
                  $('#iih19').hide();
                  $('#ocu19').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih19').hide();
                  $('#iih19').hide();
                  $('#ocu19').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh19").addClass("small-box bg-danger");
                $('#a19').attr('onclick','liberar_ajax(19)');
                $('#a19').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih19').show();
                  $('#iih19').hide();
                  $('#ocu19').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih19').hide();
                  $('#iih19').show();
                  $('#ocu19').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh19").addClass("small-box bg-warning");
                $('#a19').attr('onclick','liberar_ajax(19)');
                $('#a19').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih19').show();
                  $('#iih19').hide();
                  $('#ocu19').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih19').hide();
                  $('#iih19').hide();
                  $('#ocu19').show();
                }
              }
            break;

            case '20' :
              $('#nh20').html('Habitación # ' + data[i]['numeroh']);
              $('#lh20').html('Tipo : ' + data[i]['tipoh']);
              $('#eh20').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp20').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh20').text();
              var lim = $('#elhp20').text();

              if (est1.includes('libre')) 
              {
                $("#divh20").addClass("small-box bg-info");
                $('#a20').attr('onclick','alerta(20)');
                $('#a20').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih20').show();
                  $('#iih20').hide();
                  $('#ocu20').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih20').hide();
                  $('#iih20').hide();
                  $('#ocu20').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh20").addClass("small-box bg-danger");
                $('#a20').attr('onclick','liberar_ajax(20)');
                $('#a20').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih20').show();
                  $('#iih20').hide();
                  $('#ocu20').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih20').hide();
                  $('#iih20').show();
                  $('#ocu20').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh20").addClass("small-box bg-warning");
                $('#a20').attr('onclick','liberar_ajax(20)');
                $('#a20').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih20').show();
                  $('#iih20').hide();
                  $('#ocu20').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih20').hide();
                  $('#iih20').hide();
                  $('#ocu20').show();
                }
              }
            break;

            case '21' :
              $('#nh21').html('Habitación # ' + data[i]['numeroh']);
              $('#lh21').html('Tipo : ' + data[i]['tipoh']);
              $('#eh21').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp21').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh21').text();
              var lim = $('#elhp21').text();

              if (est1.includes('libre')) 
              {
                $("#divh21").addClass("small-box bg-info");
                $('#a21').attr('onclick','alerta(21)');
                $('#a21').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih21').show();
                  $('#iih21').hide();
                  $('#ocu21').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih21').hide();
                  $('#iih21').hide();
                  $('#ocu21').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh21").addClass("small-box bg-danger");
                $('#a21').attr('onclick','liberar_ajax(21)');
                $('#a21').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih21').show();
                  $('#iih21').hide();
                  $('#ocu21').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih21').hide();
                  $('#iih21').show();
                  $('#ocu21').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh21").addClass("small-box bg-warning");
                $('#a21').attr('onclick','liberar_ajax(21)');
                $('#a21').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih21').show();
                  $('#iih21').hide();
                  $('#ocu21').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih21').hide();
                  $('#iih21').hide();
                  $('#ocu21').show();
                }
              }
            break;

            case '22' :
              $('#nh22').html('Habitación # ' + data[i]['numeroh']);
              $('#lh22').html('Tipo : ' + data[i]['tipoh']);
              $('#eh22').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp22').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh22').text();
              var lim = $('#elhp22').text();

              if (est1.includes('libre')) 
              {
                $("#divh22").addClass("small-box bg-info");
                $('#a22').attr('onclick','alerta(22)');
                $('#a22').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih22').show();
                  $('#iih22').hide();
                  $('#ocu22').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih22').hide();
                  $('#iih22').hide();
                  $('#ocu22').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh22").addClass("small-box bg-danger");
                $('#a22').attr('onclick','liberar_ajax(22)');
                $('#a22').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih22').show();
                  $('#iih22').hide();
                  $('#ocu22').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih22').hide();
                  $('#iih22').show();
                  $('#ocu22').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh22").addClass("small-box bg-warning");
                $('#a22').attr('onclick','liberar_ajax(22)');
                $('#a22').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih22').show();
                  $('#iih22').hide();
                  $('#ocu22').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih22').hide();
                  $('#iih22').hide();
                  $('#ocu22').show();
                }
              }
            break;

            case '23' :
              $('#nh23').html('Habitación # ' + data[i]['numeroh']);
              $('#lh23').html('Tipo : ' + data[i]['tipoh']);
              $('#eh23').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp23').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh23').text();
              var lim = $('#elhp23').text();

              if (est1.includes('libre')) 
              {
                $("#divh23").addClass("small-box bg-info");
                $('#a23').attr('onclick','alerta(23)');
                $('#a23').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih23').show();
                  $('#iih23').hide();
                  $('#ocu23').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih23').hide();
                  $('#iih23').hide();
                  $('#ocu23').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh23").addClass("small-box bg-danger");
                $('#a23').attr('onclick','liberar_ajax(23)');
                $('#a23').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih23').show();
                  $('#iih23').hide();
                  $('#ocu23').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih23').hide();
                  $('#iih23').show();
                  $('#ocu23').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh23").addClass("small-box bg-warning");
                $('#a23').attr('onclick','liberar_ajax(23)');
                $('#a23').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih23').show();
                  $('#iih23').hide();
                  $('#ocu23').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih23').hide();
                  $('#iih23').hide();
                  $('#ocu23').show();
                }
              }
            break;

            case '24' :
              $('#nh24').html('Habitación # ' + data[i]['numeroh']);
              $('#lh24').html('Tipo : ' + data[i]['tipoh']);
              $('#eh24').html('Estado : ' + data[i]['estadoOcupado']);
              $('#elhp24').text(data[i]['estadoLimpieza']);

              var est1 = $('#eh24').text();
              var lim = $('#elhp24').text();

              if (est1.includes('libre')) 
              {
                $("#divh24").addClass("small-box bg-info");
                $('#a24').attr('onclick','alerta(24)');
                $('#a24').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih24').show();
                  $('#iih24').hide();
                  $('#ocu24').hide();
                }else if (lim.includes('desordenada')){
                  $('#ih24').hide();
                  $('#iih24').hide();
                  $('#ocu24').show();
                }
              }else 
              if(est1.includes('ocupada'))
              {
                $("#divh24").addClass("small-box bg-danger");
                $('#a24').attr('onclick','liberar_ajax(24)');
                $('#a24').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih24').show();
                  $('#iih24').hide();
                  $('#ocu24').hide();
                }else if (lim.includes('desordenada')) {}{
                  $('#ih24').hide();
                  $('#iih24').show();
                  $('#ocu24').hide();
                }
              }else 
              if(est1.includes('reservada'))
              {
                $("#divh24").addClass("small-box bg-warning");
                $('#a24').attr('onclick','liberar_ajax(24)');
                $('#a24').removeAttr('href');
                if (lim.includes('limpia')) 
                {
                  $('#ih24').show();
                  $('#iih24').hide();
                  $('#ocu24').hide();
                }else 
                if (lim.includes('desordenada'))
                {
                  $('#ih24').hide();
                  $('#iih24').hide();
                  $('#ocu24').show();
                }
              }
            break;
            
          }

        }
      } else {
        $.toast({
          heading: 'ERROR',
          text: 'El error es '+data,
          showHideTransition: 'slide',
          icon: 'error'
        })
      }
    },
    complete:function() {
      $('#_div_habitacion').html('');
    }
  });
}

function alerta(p)
{
  $.toast({
    heading: 'ESPERE',
    text: 'La habitación <strong>'+p+'</strong> ya se encuentra libre <a href="?view=menus&tipo=lib">Volver</a>',
    showHideTransition: 'slide',
    icon: 'warning'
  })
}

function liberar_ajax(n)
{
  $.ajax({
  url:"?view=registros&tipo=lib",
    method:"POST",
    data:{n:n},
    cache:"false",
    beforeSend:function()
    {
      $.toast({
          heading: 'ESPERE',
          text: 'Confirmando. . .',
          icon: 'warning'
      })
    },
    success:function(data)
    {
      if (data == '1') {
        $(location).attr('href','?view=menus&tipo=ini');
        alert('Se ha liberado la habitación, favor verificar el estado de limpieza!');
      } else {
        $.toast({
          heading: 'Error',
          text: 'Ha ocurrido un error inesperado',
          showHideTransition: 'slide',
          icon: 'error'
        })
      }
    },
    complete:function()
    {
      
    }
  });
}