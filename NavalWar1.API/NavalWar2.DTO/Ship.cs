namespace NavalWar2.DTO
{
    public class ShipDTO
    {
        public Tuple<int, int> Positions { get; set; }

        public OrientationDTO Direction { get; set; }

        public int Size { get; set; }

        public int CellTouched { get; set; }

        public ShipDTO(int line, int column, OrientationDTO direction, int size) {
            Positions = new Tuple<int, int>(line, column);
            Direction = direction;
            Size = size;
            CellTouched = 0;
        }


    }
}