using DAL.Extensions;
using Microsoft.EntityFrameworkCore;
using NavalWar.DAL.Extensions;
using NavalWar.DAL.Interfaces;
using NavalWar.DAL.Models;
using NavalWar.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace NavalWar.DAL
{
    public class GameRepository : IGameRepository
    {
        private IPlayerRepository _playerRepository;

        private NavalWarDBContext _dbContext;

        public GameRepository(NavalWarDBContext dBContext, IPlayerRepository playerRepository)
        {
            _dbContext = dBContext;
            _playerRepository = playerRepository;
        }

        #region GET
        public IEnumerable<GameDTO> Get()
        {
            try
            {
                return _dbContext.Games.ToList().Select(g => g.ToDTO()).ToList();
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public GameDTO Get(int id)
        {
            try
            {
                Game game = _dbContext.Games.FirstOrDefault(g => g.Id == id);
                PlayerDTO player1 = _playerRepository.Get(game.p1);
                PlayerDTO player2 = _playerRepository.Get(game.p2);
                GameDTO gameDTO = game.ToDTO();
                gameDTO.p1 = player1;
                gameDTO.p2 = player2;
                return gameDTO;
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        #endregion

        #region POST

        public bool Add(GameDTO game)
        {
            var isAdded = false;
            try
            {
                var entity = game.ToEntity();
                _dbContext.Add(entity);
                _dbContext.SaveChanges();
                isAdded = true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            return isAdded;
        }
        #endregion

        #region PUT
        public bool Update(GameDTO game)
        {
            try
            {
                var entity = game.ToEntity();
                _dbContext.Update(entity);
                _dbContext.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            return false;
        }
        #endregion

        #region DELETE

        public bool Remove(GameDTO game)
        {
            try
            {
                var entity = game.ToEntity();

                if (_dbContext.Entry(entity).State == EntityState.Detached)
                {
                    _dbContext.Entry(entity).State = EntityState.Modified;
                }

                _dbContext.Games.Remove(entity);

                _dbContext.SaveChanges();
                return true;

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            return false;
        }
        #endregion
    }
}
