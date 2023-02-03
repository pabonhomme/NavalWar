// See https://aka.ms/new-console-template for more information
using NavalWar.DTO;
using NavalWar2.DTO;

Console.WriteLine("Hello, World!");


PlayerDTO p = new PlayerDTO();

Console.WriteLine(p.Board.ToString());

p.Board.putBoat(new ShipDTO(1, 2, OrientationDTO.Horizontal, 4));

p.Board.visit(5, 5);

p.Board.visit(1, 2);



Console.WriteLine(p.Board.ToString());