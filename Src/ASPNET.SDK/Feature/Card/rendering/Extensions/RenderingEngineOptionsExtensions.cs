using DemoBank.Feature.Card.Rendering.Models;
using Sitecore.AspNet.RenderingEngine.Configuration;
using Sitecore.AspNet.RenderingEngine.Extensions;

namespace DemoBank.Feature.Card.Rendering.Extensions
{
    public static class RenderingEngineOptionsExtensions
    {
        public static RenderingEngineOptions AddFeatureCard(this RenderingEngineOptions options)
        {
            options.AddModelBoundView<CardModel>("IconCards")
                  .AddModelBoundView<CardModel>("ImageCards")
                  .AddModelBoundView<CardModel>("PanelCard")
                  .AddModelBoundView<CardModel>("FooterText")
                  ;
            return options;
        }
    }
}