using Microsoft.AspNetCore.Mvc;
using NavalWar.BL;
using NavalWar.BL.Interfaces;
using NavalWar.DAL.Interfaces;
using NavalWar.DTO;

namespace NavalWar.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GameController : Controller
    {

        private IGameService _gameService;
        public GameController(IGameService gameService)
        {
            _gameService = gameService;
        }

        #region GET
        [HttpGet]
        [Route("{id}")]
        public GameDTO Get(int id)
        {
            return _gameService.Get(id);

        }
        #endregion

        #region POST
        [HttpPost]
        [Route("start")]
        public bool StartGame()
        {
            var state = _gameService.StartGame();
            return state;
        }

        [HttpPost]
        [Route("putBoat")]
        public bool PutBoat()
        {
            var state = _gameService.StartGame();
            return state;
        }
        #endregion

        #region DELETE
        [HttpDelete]
        [Route("{id}")]
        public ActionResult Delete(int id)
        {
            var playerDTO = Get(id);

            if (playerDTO is null)
            {
                return NotFound();
            }

            var state = _gameService.Remove(playerDTO);
            return Ok(state);
        }
        #endregion
    }
}
