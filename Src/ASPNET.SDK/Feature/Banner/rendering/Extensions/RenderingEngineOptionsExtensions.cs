using DemoBank.Feature.Banner.Rendering.Models;
using Sitecore.AspNet.RenderingEngine.Configuration;
using Sitecore.AspNet.RenderingEngine.Extensions;

namespace DemoBank.Feature.Banner.Rendering.Extensions
{
    public static class RenderingEngineOptionsExtensions
    {
        public static RenderingEngineOptions AddFeatureBanner(this RenderingEngineOptions options)
        {
            options.AddModelBoundView<BannerModel>("Jumbotron")
                  ;
            return options;
        }
    }
}