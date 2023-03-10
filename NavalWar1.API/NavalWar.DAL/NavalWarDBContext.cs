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

        public DbSet<Game> Games { get; set; }

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

                entity.Property(e => e.Id).HasColumnName("id").ValueGeneratedNever(); ;

                entity.Property(e => e.Score).HasColumnName("score");

            });

            modelBuilder.Entity<Game>(entity =>
            {
                entity.HasKey(e => e.Id);

                entity.ToTable("Game");

                entity.Property(e => e.Id).HasColumnName("id").ValueGeneratedNever();

                entity.Property(e => e.p1).HasColumnName("p1");
                entity.Property(e => e.p2).HasColumnName("p2");
                entity.Property(e => e.currentPlayer).HasColumnName("currentPlayer");
                entity.Property(e => e.hasTouched).HasColumnName("hasTouched");
                entity.Property(e => e.hasPlayed).HasColumnName("hasPlayed");




            });

        }
    }
}