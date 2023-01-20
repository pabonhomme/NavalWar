using NavalWar2.DTO;
using System;
using System.Collections.Generic;
using System.Linq;

namespace NavalWar.DTO
{
    public class Test
    {
        static void Main(string[] args)
        {
            PlayerDTO p = new PlayerDTO();

            Console.WriteLine(p.Board.ToString());

        }
    }
}
