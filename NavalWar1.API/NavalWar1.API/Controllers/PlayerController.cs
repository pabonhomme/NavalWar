using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NavalWar.DAL.Interfaces;
using NavalWar.DTO;

namespace NavalWar.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlayerController : Controller
    {
        private IPlayerService _playerService;
        public PlayerController(IPlayerService playerService)
        {
            _playerService = playerService;
        }


        #region GET
        /// <summary>
        /// Get a list of all players
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("")]
        public IEnumerable<PlayerDTO> Get()
        {
            var list = _playerService.Get();
            return list;

        }

        /// <summary>
        /// Get a player by its id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("{id}")]
        public PlayerDTO Get(int id)
        {
            return _playerService.Get(id);

        }
        #endregion

        #region POST
        /// <summary>
        /// Add a player to the database
        /// </summary>
        /// <param name="player"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("")]
        public bool Add(PlayerDTO player)
        {
            var state = _playerService.Add(player);
            return state;
        }
        #endregion

        #region PUT
        /// <summary>
        /// Update a player in the database
        /// </summary>
        /// <param name="player"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("")]
        public bool Update(PlayerDTO player)
        {
            var state = _playerService.Update(player);
            return state;
        }
        #endregion

        #region DELETE
        /// <summary>
        /// Delete a player in the database
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("{id}")]
        public ActionResult Delete(int id)
        {
            var playerDTO = Get(id);

            if (playerDTO is null)
            {
                return NotFound();
            }

            var state = _playerService.Remove(playerDTO);
            return Ok(state);
        }
        #endregion


    }
}
