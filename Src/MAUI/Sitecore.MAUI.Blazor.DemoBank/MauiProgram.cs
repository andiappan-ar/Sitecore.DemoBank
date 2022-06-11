using Microsoft.AspNetCore.Components.WebView.Maui;
using Microsoft.Extensions.Configuration;
using Sitecore.MAUI.Blazor.DemoBank.Data;
using SitecoreMAUI.RenderingEngine.Service;
using System.Reflection;

namespace Sitecore.MAUI.Blazor.DemoBank
{
    public static class MauiProgram
    {
        public static MauiApp CreateMauiApp()
        {
            var builder = MauiApp.CreateBuilder();
            builder
                .UseMauiApp<App>()
                .ConfigureFonts(fonts =>
                {
                    fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                });

            var a = Assembly.GetExecutingAssembly();
            using var stream = a.GetManifestResourceStream("Sitecore.MAUI.Blazor.DemoBank.appsettings.json");
            var config = new ConfigurationBuilder()
                        .AddJsonStream(stream)
                        .Build();
            builder.Configuration.AddConfiguration(config);
            
            ServiceSettings.AppSettings = config.GetRequiredSection("Sitecore").Get<AppSettings>();
            ServiceSettings.AppSettings.CurrentContextUrlPath = ServiceSettings.AppSettings.DefaultPage;

            builder.Services.AddMauiBlazorWebView();
#if DEBUG
            builder.Services.AddBlazorWebViewDeveloperTools();
#endif

            builder.Services.AddSingleton<WeatherForecastService>();

            return builder.Build();
        }
    }
}