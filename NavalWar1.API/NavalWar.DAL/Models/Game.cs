using NavalWar.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NavalWar.DAL.Models
{
    public class Game
    {
        public int Id { get; set; }
        public int p1 { get; set; }

        public int p2 { get; set; }

        public int currentPlayer { get; set; }

        public bool hasTouched { get; set; }

        public bool hasPlayed { get; set; }

        public Game()
        {

        }
    }
}
