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
        /// <summary>
        /// deserialize a string board to a boardDTO
        /// </summary>
        /// <param name="board"></param>
        /// <returns></returns>
        public static BoardDTO toDTO(this string board)
        {
            BoardDTO dto = JsonConvert.DeserializeObject<BoardDTO>(board);
            return dto;
        }

        /// <summary>
        /// Serialize a boardDTO to a string
        /// </summary>
        /// <param name="board"></param>
        /// <returns></returns>
        public static string toString(this BoardDTO board)
        {
            string stringboard = JsonConvert.SerializeObject(board);
            return stringboard;
        }
    }
}
