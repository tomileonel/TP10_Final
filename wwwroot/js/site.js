// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function Temporada(idSerie)
{
    $.ajax(
            {
                type: 'POST',
                dataType:'JSON',
                url: '/Home/ObtenerTemporadasSerieAjax',
                data: {IdSerie:idSerie},
                success:
                     function(response)
                     {
                      console.log(response)

                      let temporadasHtml = '';
                      for (let i = 0; i < response.length; i++) {
                        temporadasHtml += response[i].numeroTemporada + ' - ' + response[i].tituloTemporada + '</br>';
                      }
                      $('#info').html(temporadasHtml);
                      $('#nombreModal').html("Temporadas");

                                                
                     }
                     }

            );
}

function Actores(idSerie)
{
    $.ajax(
            {
                type: 'POST',
                dataType:'JSON',
                url: '/Home/ObtenerActoresSerieAjax',
                data: {IdSerie:idSerie},
                success:
                     function(response)
                     {
                      let actoresHtml = '';
                      for (let i = 0; i < response.length; i++) {
                        actoresHtml += response[i]+ '</br>';
                      }
                      $('#info').html(actoresHtml);
                      $('#nombreModal').html("Actores");
                                                
                     }
                     }

            );
}

function MasInfo(idSerie)
{
    $.ajax(
            {
                type: 'POST',
                dataType:'JSON',
                url: '/Home/ObtenerMasInfo',
                data: {IdSerie:idSerie},
                success:
                     function(response)
                     {
                      console.log(response)
                      $('#info').html("Sinopsis: " + response.sinopsis + '</br>' + "Año inicio: " + response.añoInicio);
                      $('#nombreModal').html("Más Info");                         
                     }
                     }
                     
            );
}