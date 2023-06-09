using Microsoft.AspNetCore.Mvc;
using TEST.WEBAPI.NET6.Data;
using TEST.WEBAPI.NET6.Entities;
using Microsoft.EntityFrameworkCore;

namespace TEST.WEBAPI.NET6.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext _context;
        public ProductsController(StoreContext context)
        {
            _context = context;          
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
           var product = await _context.Products.FindAsync(id);
           Console.Write(id);
           if(product == null) return NotFound();
           return product;
        }
    }
}