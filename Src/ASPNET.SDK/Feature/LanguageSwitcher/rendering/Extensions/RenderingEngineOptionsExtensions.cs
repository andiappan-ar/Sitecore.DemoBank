using DemoBank.Feature.LanguageSwitcher.Rendering.Models;
using Sitecore.AspNet.RenderingEngine.Configuration;
using Sitecore.AspNet.RenderingEngine.Extensions;

namespace DemoBank.Feature.LanguageSwitcher.Rendering.Extensions
{
    public static class RenderingEngineOptionsExtensions
    {
        public static RenderingEngineOptions AddFeatureLanguageSwitcher(this RenderingEngineOptions options)
        {
            options.AddModelBoundView<LanguageSwitcherModel>("LanguageSwitcher")
                  ;
            return options;
        }
    }
}