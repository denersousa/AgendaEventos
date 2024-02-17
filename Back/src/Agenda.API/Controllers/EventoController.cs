using Agenda.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace Agenda.API.AddControllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class AgendaController : ControllerBase
    {
        public IEnumerable<Evento> _evento = [
            new Evento() {
                EvenoId = 1,
                QtdPessoas = 10,
                Tema = "Angular 11",
                Lote = "1° Lote",
                Local = "São Paulo",
                DataEvento = DateTime.Now.AddDays(2).ToString(),
                ImagemUrl = "125"
            },
            new Evento() {
                EvenoId = 2,
                QtdPessoas = 10,
                Tema = "Angular 11",
                Lote = "2° Lote",
                Local = "São Paulo",
                DataEvento = DateTime.Now.AddDays(5).ToString(),
                ImagemUrl = "125"
            }
        ];  
        public AgendaController()
        {
        }

        [HttpGet]
        public IEnumerable<Evento> Obter()
        {
            return _evento;
        }
        
        [HttpGet("{id}")]
        public IEnumerable<Evento> ObterPorId(int id)
        {
            return _evento.Where(x => x.EvenoId == id);
        }
    }


}