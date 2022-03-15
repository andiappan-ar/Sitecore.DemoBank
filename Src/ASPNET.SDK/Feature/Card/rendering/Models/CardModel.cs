using Sitecore.LayoutService.Client.Response.Model.Fields;

namespace DemoBank.Feature.Card.Rendering.Models
{
    public class CardModel
    {

        public TextField CardTitle { get; set; }
        public RichTextField CardDescription { get; set; }
        public TextField CardParagraph { get; set; }
        public ImageField CardImage { get; set; }

        public HyperLinkField CardLink { get; set; }

        public ContentListField<CardModel> Elements { get; set; }
    }
}
