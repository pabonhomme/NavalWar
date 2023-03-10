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
        /// <summary>
        /// game service
        /// </summary>
        private IGameService _gameService;
        public GameController(IGameService gameService)
        {
            _gameService = gameService;
        }

        #region GET
        /// <summary>
        /// Get a game
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("")]
        public GameDTO Get()
        {
            return _gameService.Get();

        }

        /// <summary>
        /// Return if the game is finished
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("isGameFinished")]
        public bool isGamefinished()
        {
            return _gameService.isGameFinished();

        }
        #endregion

        #region POST
        /// <summary>
        /// Start the game
        /// </summary>
        /// <param name="pseudo1"></param>
        /// <param name="pseudo2"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("start/{pseudo1}/{pseudo2}")]
        public bool StartGame(string pseudo1, string pseudo2)
        {
            var state = _gameService.StartGame(pseudo1, pseudo2);
            return state;
        }

        /// <summary>
        /// shoot a missile on a cell
        /// </summary>
        /// <param name="row"></param>
        /// <param name="column"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Change the current player
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Route("changeTurn")]
        public ActionResult ChangeTurn()
        {
            GameDTO game = Get();
            game = _gameService.ChangeTurn(game);
            return Ok(game);
        }

        /// <summary>
        /// Put a boat on the board of the current player
        /// </summary>
        /// <param name="row"></param>
        /// <param name="column"></param>
        /// <param name="orientation"></param>
        /// <param name="size"></param>
        /// <returns>Ok if the boat has been placed</returns>
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
        /// <summary>
        /// Delete a game
        /// </summary>
        /// <returns></returns>
        [HttpDelete]
        [Route("")]
        public ActionResult Delete()
        {
            var gameDTO = Get();

            if (gameDTO is null)
            {
                return NotFound();
            }

            var state = _gameService.Remove(gameDTO);
            return Ok(state);
        }
        #endregion
    }
}
