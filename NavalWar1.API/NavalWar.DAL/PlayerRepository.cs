using DAL.Extensions;
using NavalWar.DAL.Interfaces;
using NavalWar.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NavalWar.DAL
{
    public class PlayerRepository : IPlayerRepository
    {
        private NavalWarDBContext _dbContext;
        public PlayerRepository(NavalWarDBContext dBContext)
        {
            _dbContext= dBContext;
        }

        public IEnumerable<PlayerDTO> Get()
        {
            try
            {
               return _dbContext.Players.ToList().Select(p => p.ToDTO()).ToList();
            }
            catch(Exception ex)
            {
                throw;
            }

        }
    }
}
