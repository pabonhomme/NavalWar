using NavalWar.BL.Interfaces;
using NavalWar.DAL.Interfaces;
using NavalWar.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NavalWar.BL
{
    public class GameService : IGameService
    {
        private IGameRepository _gameRepository;
        private IPlayerService _playerService;

        public GameService(IGameRepository gameRepository, IPlayerService playerService)
        {
            _gameRepository = gameRepository;
            _playerService = playerService;
        }

        #region GET
        public IEnumerable<GameDTO> Get()
        {
            return _gameRepository.Get();
        }

        public GameDTO Get(int id)
        {
            return _gameRepository.Get(id);
        }
        #endregion

        #region POST

        public bool Add(GameDTO game)
        {
            return _gameRepository.Add(game);
        }

        public bool StartGame()
        {
            try
            {
                GameDTO game = new GameDTO();
                game.p1 = new PlayerDTO(1);
                game.p2 = new PlayerDTO(2);
                game.p1.OppositeBoard = game.p2.OppositeBoard;
                game.p2.OppositeBoard = game.p1.OppositeBoard;
                game.currentPlayer = game.p1;
                game.hasPlayed = false;
                game.hasTouched = false;
                _playerService.Add(game.p1);
                _playerService.Add(game.p2);
                _gameRepository.Add(game);
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return false;
            
        }
        #endregion

        #region PUT
        public bool Update(GameDTO game)
        {
            var state = _gameRepository.Update(game);
            return state;
        }
        #endregion

        #region DELETE

        public bool Remove(GameDTO game)
        {
            return _gameRepository.Remove(game);
        }
        #endregion

        public GameDTO LoadGame()
        {
            GameDTO game = Get(0);
            game.p1.OppositeBoard = game.p2.OppositeBoard;
            game.p2.OppositeBoard = game.p1.OppositeBoard;
            return game;
        }

        public bool SaveGame(GameDTO game)
        {
            try
            {
                _playerService.Update(game.p1);
                _playerService.Update(game.p2);
                _gameRepository.Update(game);
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return false;
        }
    }
}
