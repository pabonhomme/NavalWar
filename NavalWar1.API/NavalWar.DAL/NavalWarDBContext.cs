using Microsoft.EntityFrameworkCore;
using NavalWar.DAL.Models;

namespace NavalWar.DAL
{
    public class NavalWarDBContext : DbContext
    {
        public NavalWarDBContext(DbContextOptions<NavalWarDBContext> options) : base(options)
        {

        }

        public DbSet<Player> Players { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Player>(entity =>
            {
                entity.HasKey(e => e.Id);

                entity.ToTable("Player");

                entity.Property(e => e.Pseudo)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("pseudo");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Score).HasColumnName("score");

            });
            
        }
    }
}