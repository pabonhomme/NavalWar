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
        [HttpGet]
        [Route("")]
        public IEnumerable<PlayerDTO> Get()
        {
            var list = _playerService.Get();
            return list;

        }

        [HttpGet]
        [Route("{id}")]
        public PlayerDTO Get(int id)
        {
            return _playerService.Get(id);

        }
        #endregion

        #region POST
        [HttpPost]
        [Route("")]
        public bool Add(PlayerDTO player)
        {
            var state = _playerService.Add(player);
            return state;
        }
        #endregion

        #region PUT
        [HttpPut]
        [Route("")]
        public bool Update(PlayerDTO player)
        {
            var state = _playerService.Update(player);
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

            var state = _playerService.Remove(playerDTO);
            return Ok(state);
        }
        #endregion


    }
}
