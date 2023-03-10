using NavalWar2.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Security.AccessControl;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace NavalWar.DTO
{
    [Serializable]
    public class BoardDTO
    {
        [NonSerialized]
        public static readonly int BoardSize = 10;

        [NonSerialized]
        public static readonly List<int> SizeShips = new List<int> { 2 };

        [NonSerialized]
        public static readonly int Nb_Boat = SizeShips.Count();

        public List<ShipDTO> Ships { get; set; }

        public List<CellDTO> Grid { get; set; }
        public BoardDTO()
        {
            Ships = new List<ShipDTO>();
            Grid = new List<CellDTO>();
        }

        public BoardDTO(int id)
        {
            Ships = new List<ShipDTO>();
            Grid = new List<CellDTO>();
            CreateGrid();
        }

        private void CreateGrid()
        {
            for(int line = 0; line < BoardSize; line++)
            {
                for(int column = 0; column < BoardSize; column++)
                {
                    Grid.Add(new CellDTO(new Tuple<int, int>(line, column)));
                }
            }
        }

        /// <summary>
        /// Get a cell for a given raw and column
        /// </summary>
        /// <param name="row"></param>
        /// <param name="column"></param>
        /// <returns>Cell if found, null otherwise</returns>
        public CellDTO GetCell(int row, int column)
        {
            if((row >= 0 && row < BoardSize) && (column >= 0 && column < BoardSize))
            {
                foreach(CellDTO cell in Grid)
                {
                    if(cell.Positions.Item1 == row && cell.Positions.Item2 == column )
                    {
                        return cell;
                    }
                }
            }
            return null;
        }

        /// <summary>
        /// Indicates if the cell contains a ship
        /// </summary>
        /// <param name="raw"></param>
        /// <param name="column"></param>
        /// <returns>true if contains a ship</returns>
        public bool IsContainingAShip(int raw, int column)
        {
            CellDTO cell = GetCell(raw, column);
            if(cell != null)
            {
                return cell.IsContainingAShip();
            }
            return false;
        }

        /// <summary>
        /// Verify if we can place a boat at a given position
        /// </summary>
        /// <param name="row">starting Cell's row of the boat</param>
        /// <param name="column">starting Cell's column of th eboat</param>
        /// <param name="orientation">orientation of the boat</param>
        /// <param name="size">size of the boat</param>
        /// <returns>true if we can place the boat</returns>
        public bool IsFree(int row, int column, OrientationDTO orientation, int size)
        {
            // First case : HORIZONTAL
            if(orientation == OrientationDTO.Horizontal)
            {
                for(int bisColumn = column; bisColumn <= column + size - 1; bisColumn++)
                {
                    if((IsContainingAShip(row, column) || bisColumn >= BoardSize)){
                        return false;
                    }
                }
                return true;

            }// Second case : VERTICAL
            else
            {
                for(int bisRow = row; bisRow <= row + size - 1; bisRow++)
                {
                    if(IsContainingAShip(row, column) || bisRow >= BoardSize)
                    {
                        return false;
                    }
                }
                return true;
            }
        }

        /// <summary>
        /// Put a boat on the board and verify that is is possible
        /// </summary>
        /// <param name="ship"></param>
        /// <returns></returns>
        public bool PutBoat(ShipDTO ship)
        {
            if(IsFree(ship.Positions.Item1, ship.Positions.Item2, ship.Orientation, ship.Size)) // Verify if it is free for the boat
            {
                if(ship.Orientation == OrientationDTO.Horizontal)
                {
                    for(int newColumn = ship.Positions.Item2; newColumn <= ship.Positions.Item2 + ship.Size - 1; newColumn++)
                    {
                        GetCell(ship.Positions.Item1, newColumn).Ship = ship;
                    }
                    Ships.Add(ship);
                    return true; // if the ship is well placed
                }
                else
                {
                    for(int newRow = ship.Positions.Item1; newRow <= ship.Positions.Item1 + ship.Size - 1; newRow++)
                    {
                        GetCell(newRow, ship.Positions.Item2).Ship = ship;
                    }
                    Ships.Add(ship);
                    return true; // if the ship is well placed 
                }
            }
            return false; // Not free so the ship can't be placed
        }

        /// <summary>
        /// Delete all the boats so the player can replace them
        /// </summary>
        public void ResetShips()
        {
            foreach(CellDTO cell in Grid)
            {
                if (cell.IsContainingAShip())
                {
                    cell.Ship = null;
                }
            }
            Ships.Clear();
        }

        /// <summary>
        /// Indicates if the cell was touched once
        /// </summary>
        /// <param name="row"></param>
        /// <param name="column"></param>
        /// <returns></returns>
        public bool IsVisited(int row, int column)
        {
            CellDTO Cell = GetCell(row, column);
            if(Cell != null)
            {
                return Cell.isVisited;
            }
            return false;
        }

        /// <summary>
        /// Indicates if the cell contains a touched boat
        /// </summary>
        /// <param name="row"></param>
        /// <param name="column"></param>
        /// <returns></returns>
        public bool IsTouched(int row, int column)
        {
            CellDTO Cell = GetCell(row, column);
            if (Cell != null)
            {
                return Cell.IsTouched();
            }
            return false;
        }

        /// <summary>
        /// Fires a missile on the cell
        /// </summary>
        /// <param name="row"></param>
        /// <param name="column"></param>
        /// <returns></returns>
        public void Visit(int row, int column)
        {
            CellDTO Cell = GetCell(row, column);
            if (Cell != null)
            {
                Cell.Visit();
                ShipDTO shipCell = Cell.Ship; // We get the boat in the visitedCell so we can increment the number of dead cell in the list of ships
                if(IsContainingAShip(row, column))
                {
                    Ships.FirstOrDefault(s => s.Positions.Item1 == shipCell.Positions.Item1 && s.Positions.Item2 == shipCell.Positions.Item2).AddCellTouched();
                }
            }
        }

        /// <summary>
        /// Get all the sunk ships
        /// </summary>
        /// <returns></returns>
        public int NumberShipsSunk()
        {
            int i = 0;
            foreach(ShipDTO ship in Ships)
            {
                if (ship.IsSunk())
                {
                    i++;
                }
            }
            return i;
        }

        /// <summary>
        /// Indicates if a board is completely sunk
        /// </summary>
        /// <returns>true if all ships are sunk</returns>
        public bool IsBoardSunk()
        {
            return NumberShipsSunk() == Nb_Boat;
        }

        public override string ToString()
        {
            string stringBoard = "";
            for(int row = 0; row < BoardSize; row++)
            {
                for(int column = 0; column < BoardSize; column++)
                {
                    stringBoard += GetCell(row, column).ToString();
                }
                stringBoard+= "\n";
            }
            return stringBoard;

        }


    }
}
