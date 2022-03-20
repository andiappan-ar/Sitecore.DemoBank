using DemoBank.Feature.Sitemap.Rendering.Consumer;
using Microsoft.Extensions.DependencyInjection;

namespace DemoBank.Feature.Sitemap.Rendering.Extensions
{
    public static class ServiceCollectionExtensions
	{
        public static void AddFeatureSitemap(this IServiceCollection serviceCollection, string sitemapServiceUrl)
        {
            serviceCollection.AddScoped(s=>new SitemapConsumer(sitemapServiceUrl));
        }
    }
}
