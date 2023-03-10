using NavalWar.DAL;
using NavalWar.DAL.Interfaces;
using NavalWar.DTO;
using System.Runtime.InteropServices;

namespace NavalWar.BL
{
    public class PlayerService : IPlayerService
    {
        private IPlayerRepository _playerRepository;

        public PlayerService(IPlayerRepository playerRepository)
        {
            _playerRepository = playerRepository;
        }

        #region GET
        public IEnumerable<PlayerDTO> Get()
        {
            return _playerRepository.Get();
        }

        public PlayerDTO Get(int id)
        {
            return _playerRepository.Get(id);
        }
        #endregion

        #region POST

        public bool Add(PlayerDTO player)
        {
            return _playerRepository.Add(player);
        }
        #endregion

        #region PUT
        public bool Update(PlayerDTO player)
        {
            var state = _playerRepository.Update(player);
            return state;
        }
        #endregion

        #region DELETE

        public bool Remove(PlayerDTO player)
        {
            return _playerRepository.Remove(player);
        }
        #endregion


    }
}