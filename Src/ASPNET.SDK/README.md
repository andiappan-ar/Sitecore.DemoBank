<h1 align="center">Sitecore.DemoBank</h1>
This is an ASP.NET Core MVC sample project using ASP.NET SDK without docker.

# Solution structure
This is the overall solution structure. It is in an exactly similar way to legendary helix-based architecture. 

![image](https://user-images.githubusercontent.com/11770345/159176124-7f5d23af-d764-4bc9-9f6c-183355ac5002.png)

Here will have a combination of Headless/Head codes. Some key structures.

* **Headless codes are Rendering host** = Project with ending in *.rendering
* **Head codes are Sitecore XP codes** = Project with ending in *.platform

![image](https://user-images.githubusercontent.com/11770345/159176286-be905379-a6e2-4632-b29a-2e04c343a314.png)


#### /Project layer
As common in helix, all project layer-related items will present here. Most of the presentation layouts and host applications. In the headless world, this will be a dedicated website.

#### /Feature layer
All the reusable components can be placed here. This can be reusable across multiple projects.

#### /Foundation layer
This is the base layer as we all know in helix. Mostly platform-related items and shared foundations can be present here.

## Setup
#### Pre-requisite
* Sitecore XP with Headless service compatability
* JSS/Headless service
* .Net core MVC rendering host application

#### Serialization
You can choose any option inthe below,
* Use **Sitecore packages** to install the required content items, template, rendering, and placeholder.
* Use **TDS** to serialize required content items, template, rendering, and placeholder.

**Serialization path:** https://github.com/andiappan-ar/Sitecore.DemoBank/tree/master/Src/ASPNET.SDK/Project/DBankSite/Serialization

#### Platform project artifacts
Deploy Platform related artifacts in Sitecore XP. Sample Project-Siteefinition, Foundation-Pipelines

#### Appsetting.json
Setup APIKEY & URL's

#### Rendering host
The rendering host is ready to run.

## Site modules
This sample site contains common components, multiple sites, multilingual implementation, and so on.
Get more technical details in respective source modules.

| Feature  | Description | Status |
| ------------- | ------------- | ------------- |
| Helix principle  | All sources will follow standard helix features  | ✅	Available |
| Without docker  | No dependency in docker. You can play with this sample with your existing Sitecore instance  | ✅	Available |
| Multiple site  | Multiple projects shares the same helix base solution  | ✅	Available |
| Multilingual  | Multilingual sample & Language swither sample  | ✅	Available |
| Experience editor  | Experience editor support with rendering host post  | ✅	Available |
| Sitemap  | Sitemap sample with Headless extension (https://github.com/andiappan-ar/Sitecore.Headless.SEOExtention)  | ✅	Available |
| Generic components  | MainMenu , Carousal , Custom form submission , language switcher| ✅	Available |
| GraphQL default  | Search functionality with GraphQL implementation | ✅	Available |
| Custom routing  | Custom routing| ✅	Available |
| Custom form submission  | Custom form submission| ✅	Available |
| 404  | Not found page implementation| ✅	Available |
| GraphQL Advaced  | GraphQL advance concepts custom index, caching, complex filter | ⏳	InProgress |
| Deployment script  | Auto buildscript or development environement | ⏳	InProgress |
| Sitecore forms  | Pending with sitecore | ⚠️	Pending |

## Site looks like below

![localhost_5001_](https://user-images.githubusercontent.com/11770345/159174749-00fe05c5-12b5-4919-9aa7-0c3e3e258cff.png)
