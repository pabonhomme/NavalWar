using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NavalWar.DAL.Models
{
    public class Player
    {

        public Player()
        {

        }

        public int Id { get; set; }
        public string Pseudo { get; set; }

        public int Score { get; set; }
    }
}
