// See https://aka.ms/new-console-template for more information
using NavalWar.DTO;
using NavalWar2.DTO;

Console.WriteLine("Hello, World!");


PlayerDTO p1 = new PlayerDTO();
PlayerDTO p2 = new PlayerDTO();

p1.OppositeBoard = p2.Board;
p2.OppositeBoard = p1.Board;

Console.WriteLine(p2.Board.ToString());

p2.Board.putBoat(new ShipDTO(1, 2, OrientationDTO.Horizontal, 4));

p1.OppositeBoard.visit(5, 5);

p1.OppositeBoard.visit(1, 2);

Console.WriteLine(p2.Board.ToString());