using DemoBank.Feature.BranchAndATM.Rendering.Models;
using Sitecore.AspNet.RenderingEngine.Configuration;
using Sitecore.AspNet.RenderingEngine.Extensions;

namespace DemoBank.Feature.BranchAndATM.Rendering.Extensions
{
    public static class RenderingEngineOptionsExtensions
    {
        public static RenderingEngineOptions AddFeatureBranchAndATM(this RenderingEngineOptions options)
        {
            options.AddModelBoundView<BranchAndATMModel>("BranchAndATM")
                  ;
            return options;
        }
    }
}