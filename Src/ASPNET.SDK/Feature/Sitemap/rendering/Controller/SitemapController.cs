using DemoBank.Feature.Sitemap.Rendering.Consumer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using System.Threading.Tasks;

namespace DemoBank.Feature.Sitemap.Rendering.Rendering
{
    public class SitemapController : Controller
    {
        private readonly SitemapConsumer _consumer;

        public SitemapController(SitemapConsumer consumer)
        {
            _consumer = consumer;
        }

        [Route("/sitemap.xml")]       
        public async Task SitemapXml()
        {
            byte[] data = _consumer.GetSitemapContent().Result;
            await HttpContext.Response.Body.WriteAsync(data);
        }

       
    }
}
