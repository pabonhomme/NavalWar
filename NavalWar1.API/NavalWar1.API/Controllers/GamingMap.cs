using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NavalWar.DTO;

namespace NavalWar1.API.Controllers
{
    public class GamingMap : Controller
    {
        // GET: GamingMap
        public ActionResult Index()
        {
            return Ok(new MapDTO());
        }

        // GET: GamingMap/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: GamingMap/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: GamingMap/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: GamingMap/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: GamingMap/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: GamingMap/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: GamingMap/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
