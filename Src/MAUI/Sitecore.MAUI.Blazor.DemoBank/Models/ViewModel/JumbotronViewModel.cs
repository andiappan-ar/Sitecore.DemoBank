using SitecoreMAUI.RenderingEngine.Model.SCFields;

namespace Sitecore.MAUI.Blazor.DemoBank.Models.ViewModel
{
    public class JumbotronViewModel
    {      
        public SCSingleLineText CardTitle { get; set; }
        public SCRichText CardDescription { get; set; }        
        public SCImage CardImage { get; set; }
        public SCRichText CardParagraph { get; set; }
        public SCLink CardLink { get; set; }

    }

}
