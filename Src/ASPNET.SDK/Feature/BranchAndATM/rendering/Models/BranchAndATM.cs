using Sitecore.LayoutService.Client.Response.Model.Fields;

namespace DemoBank.Feature.BranchAndATM.Rendering.Models
{
    public class BranchAndATMModel
    {

        public TextField BA_Title { get; set; }
        public RichTextField BA_Description { get; set; }
        public TextField BA_TypeFilterLabel { get; set; }

        public ContentListField<Types> BA_TypeSource { get; set; }
        public ContentListField<Types> BA_ResultCoumns { get; set; }

        public HyperLinkField BA_RootItemUrl { get; set; }

        public NumberField BA_PageSize { get; set; }

    }

    public class Types
    {
        public TextField Key { get; set; }
        public TextField Value { get; set; }
    }

}
