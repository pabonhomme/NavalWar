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
        /// <summary>
        /// Get a game
        /// </summary>
        /// <returns></returns>
        public GameDTO Get()
        {
            GameDTO game = _gameRepository.Get(0);
            return game;
        }
        #endregion

        #region POST
        /// <summary>
        /// Add a game to the database
        /// </summary>
        /// <param name="game"></param>
        /// <returns></returns>
        public bool Add(GameDTO game)
        {
            return _gameRepository.Add(game);
        }

        /// <summary>
        /// start the game by creating a game and the players
        /// </summary>
        /// <param name="pseudo1"></param>
        /// <param name="pseudo2"></param>
        /// <returns></returns>
        public bool StartGame(string pseudo1, string pseudo2)
        {
            try
            {
                GameDTO game = new GameDTO();
                game.p1 = new PlayerDTO(1, pseudo1);
                game.p2 = new PlayerDTO(2, pseudo2);
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
        /// <summary>
        /// update a game in the database
        /// </summary>
        /// <param name="game"></param>
        /// <returns></returns>
        public bool Update(GameDTO game)
        {
            var state = _gameRepository.Update(game);
            return state;
        }
        #endregion

        #region DELETE
        /// <summary>
        /// Delete a game in the database
        /// </summary>
        /// <param name="game"></param>
        /// <returns></returns>
        public bool Remove(GameDTO game)
        {
            return _gameRepository.Remove(game);
        }
        #endregion
        /// <summary>
        /// Put a boat for the current player
        /// </summary>
        /// <param name="ship"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Shoot a boat on a opposite player of the current player
        /// </summary>
        /// <param name="row"></param>
        /// <param name="column"></param>
        /// <returns></returns>
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

        /// <summary>
        /// change the current player
        /// </summary>
        /// <param name="game"></param>
        /// <returns></returns>
        public GameDTO ChangeTurn(GameDTO game)
        {
            game = ChangePlayer(game);
            game.hasTouched = false;
            game.hasPlayed=false;
            SaveGame(game);
            return game;
        }

        /// <summary>
        /// Change the player
        /// </summary>
        /// <param name="game"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Save the game in the database
        /// </summary>
        /// <param name="game"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Tell if the game is finished by looking if a board is sunk
        /// </summary>
        /// <returns></returns>
        public bool isGameFinished()
        {
            GameDTO game = Get();

            return game.currentPlayer == 1 ? game.p2.Board.IsBoardSunk() : game.p1.Board.IsBoardSunk(); // if current player equal 1 then we look if the p2's board is sunk so the game might be finished
        }
    }
}
