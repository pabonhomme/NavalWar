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

        [HttpGet]
        [Route("")]
        public IEnumerable<PlayerDTO> Get()
        {
            return _playerService.Get();

        }
    }
}
