using DemoBank.Feature.Navigation.Rendering.Models;
using Sitecore.AspNet.RenderingEngine.Configuration;
using Sitecore.AspNet.RenderingEngine.Extensions;

namespace DemoBank.Feature.Navigation.Rendering.Extensions
{
    public static class RenderingEngineOptionsExtensions
    {
        public static RenderingEngineOptions AddFeatureNavigation(this RenderingEngineOptions options)
        {
            options.AddModelBoundView<MainNavigationMenu>("MainNavigationMenu")
                  ;
            return options;
        }
    }
}