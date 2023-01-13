namespace NavalWar2.DTO
{
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

    }
}