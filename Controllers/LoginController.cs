using Microsoft.AspNetCore.Mvc;

namespace TuProyecto.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult IniciarSesion(string correo, string password)
        {
            // 🔥 USUARIO DEMO (luego lo conectas a BD)
            if (correo == "admin@winmovers.com" && password == "1234")
            {
                return RedirectToAction("Index", "Dashboards");
            }

            ViewBag.Error = "Credenciales incorrectas";
            return View("Index");
        }
    }
}