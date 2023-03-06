using NavalWar.DTO;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace NavalWar.DAL.Extensions
{
    public static class BoardExtension
    {
        public static BoardDTO toDTO(this string board)
        {
            BoardDTO dto = JsonConvert.DeserializeObject<BoardDTO>(board);
            return dto;
        }

        public static string toString(this BoardDTO board)
        {
            string stringboard = JsonConvert.SerializeObject(board);
            return stringboard;
        }
    }
}
