using Sitecore.LayoutService.Client.Response.Model.Fields;

namespace DemoBank.Project.DBankSite.Rendering
{
    /// <summary>
    /// An example of binding to component fields (usually a serialized datasource item).
    /// </summary>
    public class Card
    {
       
        public TextField CardTitle { get; set; }
        public RichTextField CardDescription { get; set; }
        public TextField CardParagraph { get; set; }
        public ImageField CardImage { get; set; }

        public HyperLinkField CardLink { get; set; }

        public ContentListField<Card> Elements { get; set; }
    }
}
