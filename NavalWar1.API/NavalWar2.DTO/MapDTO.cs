using NavalWar2.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace NavalWar.DTO
{
    public class MapDTO
    {
        public static readonly int MapSize = 10;

        public static readonly List<int> SizeBoats = new List<int> { 5, 4, 3, 3, 2 };

        public static readonly int Nb_Boat = SizeBoats.Count();

        public List<ShipDTO> Boats = new List<ShipDTO>();

        public readonly List<CellDTO> Grid= new List<CellDTO>();
        public MapDTO()
        {
            CreateGrid();
        }

        public void CreateGrid()
        {
            for(int line = 0; line < MapSize; line++)
            {
                for(int column = 0; column < MapSize; column++)
                {
                    Grid.Add(new CellDTO(new Tuple<int, int>(line, column)));
                }
            }
        }
    }
}
