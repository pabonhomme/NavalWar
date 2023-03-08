using Microsoft.AspNetCore.Mvc;
using NavalWar.BL;
using NavalWar.BL.Interfaces;
using NavalWar.DAL.Interfaces;
using NavalWar.DTO;
using NavalWar2.DTO;

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
        [Route("")]
        public GameDTO Get()
        {
            return _gameService.Get();

        }

        [HttpGet]
        [Route("isGameFinished")]
        public bool isGamefinished()
        {
            return _gameService.isGameFinished();

        }
        #endregion

        #region POST
        [HttpPost]
        [Route("start/{pseudo1}/{pseudo2}")]
        public bool StartGame(string pseudo1, string pseudo2)
        {
            var state = _gameService.StartGame(pseudo1, pseudo2);
            return state;
        }

        [HttpPost]
        [Route("shoot/{row}/{column}")]
        public ActionResult Shoot(int row, int column)
        {
            GameDTO game = Get();
            game = _gameService.Shoot(row, column);
            if(game == null)
            {
                return BadRequest("Cell already visited");
            }
            return Ok(game);
        }

        [HttpPost]
        [Route("changeTurn")]
        public ActionResult ChangeTurn()
        {
            GameDTO game = Get();
            game = _gameService.ChangeTurn(game);
            return Ok(game);
        }

        [HttpPost]
        [Route("putBoat/{row}/{column}/{orientation}/{size}")]
        public ActionResult PutBoat(int row, int column, OrientationDTO orientation, int size)
        {
            ShipDTO ship = new ShipDTO(row, column, orientation, size);
            GameDTO game = _gameService.PutBoat(ship);
            if(game == null)
            {
                return BadRequest("The boat hasn't been placed");
            }
            return Ok(game);
        }
        #endregion

        #region DELETE
        [HttpDelete]
        [Route("")]
        public ActionResult Delete()
        {
            var playerDTO = Get();

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
