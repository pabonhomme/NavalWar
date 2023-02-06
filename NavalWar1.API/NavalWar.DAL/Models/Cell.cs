using NavalWar2.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NavalWar.DAL.Models
{
    public class Cell
    {
        public int Id { get; set; }

        public Tuple<int, int> Positions { get; set; }

        public bool isVisited { get; set; }

        public Ship Ship { get; set; }

        public Cell() { }
    }
}
