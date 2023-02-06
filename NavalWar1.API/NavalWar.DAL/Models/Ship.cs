using NavalWar2.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NavalWar.DAL.Models
{
    public class Ship
    {   public int ID { get; set; }

        public Tuple<int, int> Positions { get; set; }

        public bool Orientation { get; set; }

        public int Size { get; set; }

        public int CellTouched { get; set; }

        public Ship() { }
    }
}
