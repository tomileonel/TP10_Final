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
                        response.forEach((temp) => 
                    {
                        $("#ModalLocura").append(//no se si esta bien, no anda porque estan mal los id de los models
                            `
                              <li>
                                <h3>${temp.TituloTemporada}</h3>
                                <p>${temp.NumeroTemporada}</p>
                              </li>
                            `
                          );
                    });                            
                          }
                     }

            );
}