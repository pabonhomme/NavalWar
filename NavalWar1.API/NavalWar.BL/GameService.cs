using Microsoft.EntityFrameworkCore.Metadata.Internal;
using NavalWar.BL.Interfaces;
using NavalWar.DAL.Interfaces;
using NavalWar.DAL.Models;
using NavalWar.DTO;
using NavalWar2.DTO;
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
        public GameDTO Get()
        {
            GameDTO game = _gameRepository.Get(0);
            return game;
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
                game.currentPlayer = 1;
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

        public GameDTO PutBoat(ShipDTO ship)
        {
            GameDTO game = Get();
            switch (game.currentPlayer)
            {
                case 1:
                    if (game.p1.Board.PutBoat(ship)) // if we can place the boat on the board
                    {
                        SaveGame(game);
                        return game;
                    }
                    break;
                case 2:
                    if (game.p2.Board.PutBoat(ship)) // if we can place the boat on the board
                    {
                        SaveGame(game);
                        return game;
                    }
                    break;
            }
            return null;
        }

        public GameDTO Shoot(int row, int column)
        {
            GameDTO game = Get();
            switch (game.currentPlayer)
            {
                case 1:
                    if (!game.p2.Board.IsVisited(row, column))
                    {
                        game.p2.Board.Visit(row, column);
                        game.hasTouched = game.p2.Board.IsTouched(row, column);
                        game.hasPlayed = true;
                        SaveGame(game);
                        return game;
                    }
                    break;
                case 2:
                    if (!game.p1.Board.IsVisited(row, column))
                    {
                        game.p1.Board.Visit(row, column);
                        game.hasTouched = game.p1.Board.IsTouched(row, column);
                        game.hasPlayed = true;
                        SaveGame(game);
                        return game;
                    }
                    break;
            }
            
            return null;
        }

        public GameDTO ChangeTurn(GameDTO game)
        {
            game = ChangePlayer(game);
            game.hasTouched = false;
            game.hasPlayed=false;
            SaveGame(game);
            return game;
        }

        public GameDTO ChangePlayer(GameDTO game)
        {
            if(game.currentPlayer == game.p1.Id)
            {
                game.currentPlayer = 2;
            }
            else
            {
                game.currentPlayer = 1;
            }
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

        public bool isGameFinished()
        {
            GameDTO game = Get();

            return game.currentPlayer == 1 ? game.p2.Board.IsBoardSunk() : game.p1.Board.IsBoardSunk(); // if current player equal 1 then we look if the p2's board is sunk so the game might be finished
        }
    }
}
