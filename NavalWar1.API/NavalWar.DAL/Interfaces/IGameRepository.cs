using NavalWar.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NavalWar.DAL.Interfaces
{
    public interface IGameRepository
    {
        public IEnumerable<GameDTO> Get();

        public GameDTO Get(int id);

        public bool Add(GameDTO game);

        public bool Update(GameDTO game);

        public bool Remove(GameDTO game);
    }
}
