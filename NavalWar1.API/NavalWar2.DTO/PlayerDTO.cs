using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NavalWar.DTO
{
    public class PlayerDTO
    {
        public int Id { get; set; }
        public string Pseudo { get; set; }

        public int Score { get; set; }

        public BoardDTO Board { get; set; }

        public BoardDTO OppositeBoard { get; set; }

        public PlayerDTO()
        {
            Pseudo = "";
            Score = 0;
            Board = new BoardDTO();
        }

        public PlayerDTO(string pseudo, int score)
        {
            Pseudo = pseudo;
            Score = score;
        }
        
        /// <summary>
        /// Increment the score of the player
        /// </summary>
        public void incrementScore()
        {
            Score++;
        }
        
    }
}
