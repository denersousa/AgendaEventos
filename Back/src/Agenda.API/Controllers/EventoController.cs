using Agenda.API.Data;
using Agenda.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Agenda.API.AddControllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class AgendaController : ControllerBase
    {
        private readonly DataContext _context;
        public AgendaController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Evento> Obter()
        {
            return _context.Eventos;
        }
        
        [HttpGet("{id}")]
        public Evento ObterPorId(int id)
        {
            return _context.Eventos.FirstOrDefault(
                x => x.EventoId == id
                );
        }
    }
}