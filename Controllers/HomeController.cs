using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TP10_Final.Models;

namespace TP10_Final.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

   public IActionResult Index()
    {
        ViewBag.Series = BD.ObtenerSeries();
        return View();
    }

    public List<Temporadas> ObtenerTemporadasSerieAjax(int IdSerie){
        return BD.ObtenerTemporadasSerie(IdSerie);
    }

        public List<string> ObtenerActoresSerieAjax(int IdSerie){
        return BD.ObtenerActoresSerie(IdSerie);
    }

    public Series ObtenerMasInfo(int IdSerie){
        return BD.ObtenerInfoSerie(IdSerie);
    }



    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
