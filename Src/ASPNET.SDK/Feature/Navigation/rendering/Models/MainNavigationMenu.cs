using Sitecore.LayoutService.Client.Response.Model.Fields;

namespace DemoBank.Feature.Navigation.Rendering.Models
{
    public class MainNavigationMenu
    {
        public HyperLinkField Link { get; set; }
        public TextField DisplayName { get; set; }
        public ContentListField<MainNavigationMenu> Elements { get; set; }
    }
}
