using DemoBank.Feature.Form.Rendering.Models;
using Sitecore.AspNet.RenderingEngine.Configuration;
using Sitecore.AspNet.RenderingEngine.Extensions;

namespace DemoBank.Feature.Form.Rendering.Extensions
{
    public static class RenderingEngineOptionsExtensions
    {
        public static RenderingEngineOptions AddFeatureForm(this RenderingEngineOptions options)
        {
            options.AddModelBoundView<CustomLoginFormModel>("CustomLoginForm")
                  ;
            return options;
        }
    }
}