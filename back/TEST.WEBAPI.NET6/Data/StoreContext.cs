using Microsoft.EntityFrameworkCore;
using TEST.WEBAPI.NET6.Entities;

namespace TEST.WEBAPI.NET6.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
    }
}