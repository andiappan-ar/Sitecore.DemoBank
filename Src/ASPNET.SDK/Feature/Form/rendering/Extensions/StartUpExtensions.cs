using Microsoft.AspNetCore.Builder;

namespace DemoBank.Feature.Form.Rendering.Extensions
{
    public static class StartUpExtensions
    {

        public static void UseFeatureForms(this IApplicationBuilder app)
        {
            app.UseEndpoints(endpoints =>
            {

                endpoints.MapControllerRoute(
                      name: "login",
                      pattern: "form/login",
                      new { controller = "form", action = "login" }
                 );               
            });
        }
    }
}