using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using System.Xml;

namespace DemoBank.Feature.Form.Rendering
{
    public class FormController : Controller
    {
        [HttpPost]
        public async Task<JsonResult> Login(string username,string password)
        {
            string result = string.Empty;
            string domain = "sitecore";
            string SSCURL = "https://arsc.dev.local/sitecore/api/ssc/auth/login";   
            
            try
            {
                CookieContainer cookies = new CookieContainer();

                HttpClientHandler handler = new HttpClientHandler();

                handler.CookieContainer = cookies;

                var client = new HttpClient(handler);

                var webRequest = new HttpRequestMessage(HttpMethod.Post, SSCURL)
                {
                    Content = new StringContent("{ \n    \"domain\": \"" + domain + "\", \n    \"username\": \"" + username + "\", \n    \"password\": \"" + password + "\" \n}", Encoding.UTF8, "application/json")
                };

                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var response = await client.SendAsync(webRequest);

                var reader = new StreamReader(await response.Content.ReadAsStreamAsync());

               string responseStr = reader.ReadToEnd();

                Uri uri = new Uri(SSCURL);
                IEnumerable<Cookie> responseCookies = cookies.GetCookies(uri).Cast<Cookie>();

                result = (responseCookies.Count() > 0) ? responseCookies.Where(x => x.Name.Equals(".AspNet.Cookies")).FirstOrDefault().Value : "";

                Response.Cookies.Append(".AspNet.Cookies", result);

            }
            catch (Exception ex)
            {
                throw ex;
            }

            return Json(new { });
        }

       
    }
}
