using NavalWar.DTO;
using NavalWar2.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NavalWar.BL.Interfaces
{
    public interface IGameService
    {
        public GameDTO Get();

        public bool Add(GameDTO game);

        public bool Update(GameDTO game);

        public bool Remove(GameDTO game);

        public bool StartGame();

        public GameDTO PutBoat(ShipDTO ship);

        public GameDTO Shoot(int row, int column);

        public GameDTO ChangeTurn(GameDTO game);

        public GameDTO ChangePlayer(GameDTO game);

        public bool SaveGame(GameDTO game);

        public bool isGameFinished();

    }
}
