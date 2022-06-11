using Microsoft.AspNetCore.Components;
using Sitecore.MAUI.Blazor.DemoBank.Models.ViewModel;
using SitecoreMAUI.RenderingEngine.Model.SCFields;

namespace Sitecore.MAUI.Blazor.DemoBank.Shared
{
    public partial class ImageCards
    {
        [Parameter]
        public IDictionary<string,object> DynamicComponentModel { get; set; }

        public CardViewModel Model { get; set; }

        protected override async Task OnInitializedAsync()
        {
            Model = SCComponentBaseExtensions<CardViewModel>.SerializeToModel(DynamicComponentModel);
        }
    }

}
