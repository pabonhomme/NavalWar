using NavalWar.DAL.Models;
using NavalWar.DTO;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Extensions
{
    public static class PlantExtension
    {
        public static Player ToEntity(this PlayerDTO dto)
        {
            if (dto is null)
            {
                return null;
            }

            return new Player
            {
                Id = dto.Id,
                Pseudo = dto.Pseudo,
                Score= dto.Score,
            };
        }

        public static PlayerDTO ToDTO(this Player entity)
        {
            if (entity is null)
            {
                return null;
            }

            return new PlayerDTO
            {
                Id = entity.Id,
                Pseudo = entity.Pseudo,
                Score = entity.Score,
            };
        }
    }
}
