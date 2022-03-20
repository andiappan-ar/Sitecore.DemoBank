using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace DemoBank.Feature.Sitemap.Rendering.Consumer
{
    public class SitemapConsumer
    {        
        private readonly string _url;
        public SitemapConsumer(string url)
        {            
            _url = url;
        }

        public async Task<byte[]> GetSitemapContent()
        {
            string str = string.Empty;

            using (var client = new HttpClient())
            {
                //HTTP GET
                str = await client.GetStringAsync(_url);
            }

            byte[] bytes = Encoding.ASCII.GetBytes(str);
            return bytes;
        }
    }
}
