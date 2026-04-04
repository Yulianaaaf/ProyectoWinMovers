using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


[Authorize]
public class DashboardsController : Controller;

namespace TuProyecto.Controllers
{
    public class DashboardsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult CargarVista(string nombre)
        {
            switch (nombre)
            {
                case "clientes":
                    return PartialView("~/Views/Dashboards/Clientes.cshtml");

                case "inventario":
                    return PartialView("~/Views/Dashboards/Inventario.cshtml");

                case "empleados":
                    return PartialView("~/Views/Dashboards/Empleados.cshtml");

                case "cotizaciones":
                    return PartialView("~/Views/Dashboards/Cotizaciones.cshtml");

                case "mudanzas":
                    return PartialView("~/Views/Dashboards/Mudanzas.cshtml");

                default:
                    return PartialView("~/Views/Dashboards/Dashboard.cshtml");
            }
        }
    }
}