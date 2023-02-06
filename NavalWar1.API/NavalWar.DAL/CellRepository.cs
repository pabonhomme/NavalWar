using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NavalWar.DAL
{
    public class CellRepository
    {
        private NavalWarDBContext _dbContext;
        public CellRepository(NavalWarDBContext dBContext)
        {
            _dbContext = dBContext;
        }



    }
}
