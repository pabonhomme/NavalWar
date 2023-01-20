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

        public PlayerDTO winner { get; set; }

        public PlayerDTO loser { get; set; }

        public GameDTO() { }   

        public GameDTO(PlayerDTO winner, PlayerDTO loser)
        {
            Id = 0;
            this.winner = winner;
            this.loser = loser;
        }

        public void updateScore()
        {
            foreach(ShipDTO ship in winner.OppositeBoard.Ships)
            {
                if (ship.isSunk())
                {
                    winner.incrementScore();
                }
            }
            foreach (ShipDTO ship in loser.OppositeBoard.Ships)
            {
                if (ship.isSunk())
                {
                    loser.incrementScore();
                }
            }
        }
    }
}
