using DemoBank.Feature.LanguageSwitcher.Rendering.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Linq;
using System.Threading.Tasks;

namespace DemoBank.Feature.LanguageSwitcher.Rendering.ViewComponents
{
    public class LanguageSwitcherViewComponent : ViewComponent
    {
        private readonly IOptions<RequestLocalizationOptions> _localizationOptions;

        public LanguageSwitcherViewComponent(IOptions<RequestLocalizationOptions> localizationOptions)
        {
            _localizationOptions = localizationOptions;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var cultureFeature =  HttpContext.Features.Get<IRequestCultureFeature>();
            var languageSwitcherModel = new LanguageSwitcherModel
            {
                SupportedCultures = _localizationOptions.Value.SupportedCultures.ToList(),
                CurrentUICulture = cultureFeature.RequestCulture.Culture,
                CurrentSitecoreRoute = this.HttpContext.Request.RouteValues["sitecoreRoute"]?.ToString() ?? ""
            };
            return  View(languageSwitcherModel);
        }
    }
}
