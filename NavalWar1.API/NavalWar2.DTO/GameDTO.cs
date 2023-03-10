using NavalWar2.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NavalWar.DTO
{
    public class GameDTO
    {
        public int Id { get; set; }

        //public PlayerDTO winner { get; set; }

        //public PlayerDTO loser { get; set; }

        public PlayerDTO p1 { get; set; }

        public PlayerDTO p2 { get; set; }

        public int currentPlayer { get; set; }

        public bool hasTouched { get; set; }

        public bool hasPlayed { get; set; }

        public GameDTO() { Id = 0; }   

        public GameDTO(PlayerDTO winner, PlayerDTO loser)
        {
            Id = 0;
            //this.winner = winner;
            //this.loser = loser;
        }

        //public void updateScore()
        //{
        //    foreach(ShipDTO ship in winner.OppositeBoard.Ships)
        //    {
        //        if (ship.isSunk())
        //        {
        //            winner.incrementScore();
        //        }
        //    }
        //    foreach (ShipDTO ship in loser.OppositeBoard.Ships)
        //    {
        //        if (ship.isSunk())
        //        {
        //            loser.incrementScore();
        //        }
        //    }
        //}
    }
}
