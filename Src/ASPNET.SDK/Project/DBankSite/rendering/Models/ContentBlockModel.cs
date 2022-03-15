using Sitecore.LayoutService.Client.Response.Model.Fields;

namespace DemoBank.Project.DBankSite.Rendering
{
    /// <summary>
    /// An example of binding to component fields (usually a serialized datasource item).
    /// </summary>
    public class ContentBlockModel
    {
        public TextField heading { get; set; }

        public RichTextField Text { get; set; }
    }
}
