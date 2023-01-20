namespace NavalWar2.DTO
{
    /// <summary>
    /// Define a boat
    /// </summary>
    public class ShipDTO
    {
        public Tuple<int, int> Positions { get; set; }

        public OrientationDTO Orientation { get; set; }

        public int Size { get; set; }

        public int CellTouched { get; set; }

        public ShipDTO(int line, int column, OrientationDTO orientation, int size) {
            Positions = new Tuple<int, int>(line, column);
            Orientation = orientation;
            Size = size;
            CellTouched = 0;
        }

        /// <summary>
        /// Indicates if the boat is sunk
        /// </summary>
        /// <returns>true if sunk</returns>
        public bool isSunk()
        {
            return CellTouched == Size;
        }

        /// <summary>
        /// Increments CellTouched when a boat's cell is touched
        /// </summary>
        public void addCellTouched()
        {
            if(CellTouched < Size)
            {
                CellTouched++;
            }
        }


    }
}