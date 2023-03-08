﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using NavalWar.DAL;

#nullable disable

namespace NavalWar.DAL.Migrations
{
    [DbContext(typeof(NavalWarDBContext))]
    [Migration("20230305230602_init")]
    partial class init
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("NavalWar.DAL.Models.Game", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int")
                        .HasColumnName("id");

                    b.Property<int>("currentPlayer")
                        .HasColumnType("int")
                        .HasColumnName("currentPlayer");

                    b.Property<bool>("hasPlayed")
                        .HasColumnType("bit")
                        .HasColumnName("hasPlayed");

                    b.Property<bool>("hasTouched")
                        .HasColumnType("bit")
                        .HasColumnName("hasTouched");

                    b.Property<int>("p1")
                        .HasColumnType("int")
                        .HasColumnName("p1");

                    b.Property<int>("p2")
                        .HasColumnType("int")
                        .HasColumnName("p2");

                    b.HasKey("Id");

                    b.ToTable("Game", (string)null);
                });

            modelBuilder.Entity("NavalWar.DAL.Models.Player", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int")
                        .HasColumnName("id");

                    b.Property<string>("Board")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pseudo")
                        .IsRequired()
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("pseudo");

                    b.Property<int>("Score")
                        .HasColumnType("int")
                        .HasColumnName("score");

                    b.HasKey("Id");

                    b.ToTable("Player", (string)null);
                });
#pragma warning restore 612, 618
        }
    }
}