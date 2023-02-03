namespace NavalWar2.DTO
{
    /// <summary>
    /// Define a Cell
    /// </summary>
    public class CellDTO
    {
        public Tuple<int, int> Positions { get; set; }

        public bool isVisited { get; set; }

        public ShipDTO Ship { get; set; }
        
        public CellDTO(Tuple<int, int> positions) 
        {
            isVisited = false;
            Ship = null;
            Positions = positions;
        }

        /// <summary>
        /// Indicates if the cell contains a ship
        /// </summary>
        /// <returns>true if contains a ship</returns>
        public bool isContainingAShip()
        {
            return Ship!= null;
        }

        /// <summary>
        /// Fires a missile on the cell
        /// </summary>
        public void visit()
        {
            isVisited= true;
            if (isContainingAShip())
            {
                Ship.addCellTouched();
            }
        }

        /// <summary>
        /// Indicates if the cell contains a touched boat
        /// </summary>
        /// <returns></returns>
        public bool isTouched()
        {
            return isContainingAShip() && isVisited;
        }

        /// <summary>
        /// Indicates if the cell contains a sunk boat
        /// </summary>
        /// <returns></returns>
        public bool isSunk()
        {
            return Ship.isSunk();
        }

        public override string ToString()
        {
            if (!isVisited || !isTouched())
            {
                return "O";
            }
            else return "X";
        }

    }
}