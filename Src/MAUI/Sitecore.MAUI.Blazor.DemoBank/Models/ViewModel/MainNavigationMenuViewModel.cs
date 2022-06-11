using SitecoreMAUI.RenderingEngine.Model.SCFields;

namespace Sitecore.MAUI.Blazor.DemoBank.Models.ViewModel
{
    public class MainNavigationMenuViewModel
    {      
        public SCLink Link { get; set; }
        public SCSingleLineText DisplayName { get; set; }
        public List<SCMultiList<MainNavigationMenuViewModel>> Elements { get; set; }

    }

}
