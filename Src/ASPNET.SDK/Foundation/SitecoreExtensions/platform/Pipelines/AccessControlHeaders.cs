using Sitecore.Pipelines.HttpRequest;

namespace DemoBank.Foundation.SitecoreExtensions.Platform.Pipelines
{
    public class AccessControlHeaders : HttpRequestProcessor
    {

        public override void Process(HttpRequestArgs args)
        {
            string url = args.HttpContext.Request.RawUrl;
            args.HttpContext.Response.AppendHeader("Access-Control-Allow-Origin", "*");
            args.HttpContext.Response.AppendHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
            args.HttpContext.Response.AppendHeader("Access-Control-Allow-Headers", "Content-Type");
        }

    }
}