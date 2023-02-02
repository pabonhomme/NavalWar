using NavalWar.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NavalWar.DAL.Interfaces
{
    public interface IPlayerService
    {
        public IEnumerable<PlayerDTO> Get();
    }
}
