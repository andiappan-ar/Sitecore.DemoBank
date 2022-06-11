using SitecoreMAUI.RenderingEngine.Model.SCFields;

namespace Sitecore.MAUI.Blazor.DemoBank.Models.ViewModel
{
    public class CardViewModel
    {
        public SCSingleLineText CardTitle { get; set; }
        public SCRichText CardDescription { get; set; }
        public SCSingleLineText CardParagraph { get; set; }
        public SCImage CardImage { get; set; }
        public SCLink CardLink { get; set; }
        public List<SCMultiList<CardViewModel>> Elements { get; set; }
    }

}
