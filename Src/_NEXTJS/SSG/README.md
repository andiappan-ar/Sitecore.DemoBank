<h1 align="center">Sitecore DemoBank JSS - NEXTJS - SSG - Rest</h1>
This is a sample NEXTJS project with SSG/REST template. This is built on top of NEXTJS getstarter template

# Project details
* NEXTJS 
* SSG - Server side generation
* REST communication for layout service
* Sitecore 10.3
* Headless service (Sitecore Headless Services Server XP 21.0.583)

# Setup
## Summary
* Setup your sitecore and headless service
* Clone this repository
* Deploy definition config and serialisation content item
* Install JSS CLI and NPM modules
* Now you can run the project

## Detailed setup instruction
### STEP1: Validate Pre-Requisites 
(This sample is built with below but You can choose your respective versions.)
* Sitecore 10.3
* Headless service (Sitecore Headless Services Server XP 21.0.583)
* Node 18 with NPM
* JSS CLI ^21.0.2

### STEP2: Clone the repository
* Clone this repository
* Go to the location /Src/_NEXTJS/SSG
* Install JSS CLI using below command. [Follow the docs more detail](https://doc.sitecore.com/xp/en/developers/hd/200/sitecore-headless-development/install-the-jss-cli-globally.html)
```
npm install -g @sitecore-jss/sitecore-jss-cli
```
* Install NPM modules. using below command
```
npm install
```

### STEP3: Setup serialisation
> If you are front end developer and you have centralised Development DB you can avoid the step 3.
* Go to this path Src/_NEXTJS/SSG/SitecoreSerialization/DemoBank.NextJS.SSG
* Open the TDS Project and push the items to your sitecore.
(Please take care of TDS project build configurations. Ex: Sitecore web URL, Sitecore deploy folder)

### STEP4: Configure your sitecore instance
* Configure your sitecore instance details in /Src/_NEXTJS/SSG/scjssconfig.json
> If you are front end developer , you can avoid below settings instancePath,deployUrl,deploySecret.
```
{
  "sitecore": {
    "instancePath": "C:\\inetpub\\wwwroot\\sc-10.3sc.dev.local",
    "layoutServiceHost": "http://sc-10.3sc.dev.local",
    "deployUrl": "http://sc-10.3sc.dev.local/sitecore/api/jss/import",
    "apiKey": "{AACE4459-B4A5-4FBA-A96C-704A06079689}",
    "deploySecret": "eg0qd1fs7kwsbf76382rkyjrg4zb0j0hejrlwgr6ios"    
  }
}
```
* Deploy config using below command
> If you are front end developer and you have centralised Development DB you can avoid this.
```
jss deploy config
```
* Refresh your sitecore instance and wait for few minutes to your sitecore instance get load.

### STEP5: Final step - Run the project
* Go to the location /Src/_NEXTJS/SSG
* Run the project using below command
```
jss start:connected
```
* Site will be available as mentioned in the .ENV file. 
[PUBLIC_URL=http://localhost:3000](PUBLIC_URL=http://localhost:3000)

Finaly Site looks like below

![localhost_3000_](https://user-images.githubusercontent.com/11770345/210639234-858fea70-7f53-49e6-ae0e-33255a233e97.png)


# Supporting Features

| Feature  | Description | Status |
| ------------- | ------------- | ------------- |
| Helix principle  | All sources will follow standard helix features  | ⏳	InProgress |
| Without docker  | No dependency in docker. You can play with this sample with your existing Sitecore instance  | ✅	Available |
| Multiple site  | Multiple projects shares the same helix base solution  | ⏳	InProgress |
| Multilingual  | Multilingual sample & Language swither sample  | ✅	Available |
| Experience editor  | Experience editor support with rendering host post  | ✅	Available |
| Sitemap  | Sitemap sample with Headless extension (https://github.com/andiappan-ar/Sitecore.Headless.SEOExtention)  | ✅	Available |
| Generic components  | MainMenu , Carousal , Custom form submission , language switcher| ✅	Available |
| GraphQL default  | Search functionality with GraphQL implementation | ✅	Available |
| Custom routing  | Custom routing| ⏳	InProgress |
| Custom form submission  | Custom form submission| ⏳	InProgress |
| 404  | Not found page implementation| ✅	Available |
| GraphQL Advaced  | GraphQL advance concepts custom index, caching, complex filter | ⏳	InProgress |
| Deployment script  | Auto buildscript or development environement | ⏳	InProgress |
| Sitecore forms  | Pending with sitecore | ⏳	InProgress |




