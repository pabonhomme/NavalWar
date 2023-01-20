// See https://aka.ms/new-console-template for more information
using NavalWar.DTO;

Console.WriteLine("Hello, World!");


PlayerDTO p = new PlayerDTO();

Console.WriteLine(p.Board.ToString());

p.Board.visit(5, 5);

Console.WriteLine(p.Board.ToString());