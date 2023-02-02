using NavalWar.DAL;
using NavalWar.DAL.Interfaces;
using NavalWar.DTO;

namespace NavalWar.BL
{
    public class PlayerService : IPlayerService
    {
        private IPlayerRepository _playerRepository;

        public PlayerService(IPlayerRepository playerRepository)
        {
            _playerRepository = playerRepository;
        }

        public IEnumerable<PlayerDTO> Get()
        {
            return _playerRepository.Get();
        }
    }
}