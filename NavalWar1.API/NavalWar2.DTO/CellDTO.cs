﻿namespace NavalWar2.DTO
{
    /// <summary>
    /// Define a Cell
    /// </summary>
    [Serializable]
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

        public CellDTO() { }

        /// <summary>
        /// Indicates if the cell contains a ship
        /// </summary>
        /// <returns>true if contains a ship</returns>
        public bool IsContainingAShip()
        {
            return Ship != null;
        }

        /// <summary>
        /// Fires a missile on the cell
        /// </summary>
        public void Visit()
        {
            isVisited= true;
            if (IsContainingAShip())
            {
                Ship.AddCellTouched();
            }
        }

        /// <summary>
        /// Indicates if the cell contains a touched boat
        /// </summary>
        /// <returns></returns>
        public bool IsTouched()
        {
            return IsContainingAShip() && isVisited;
        }

        /// <summary>
        /// Indicates if the cell contains a sunk boat
        /// </summary>
        /// <returns></returns>
        public bool IsSunk()
        {
            return Ship.IsSunk();
        }

        public override string ToString()
        {
            if (!isVisited && !IsTouched())
            {
                return "O";
            }
            else if (isVisited && !IsTouched())
            {
                return "x";
            }
            else return "X";
        }

    }
}