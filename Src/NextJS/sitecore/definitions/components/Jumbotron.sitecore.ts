import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Jumbotron component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function Jumbotron(manifest: Manifest): void {
  manifest.addComponent({
    name: 'Jumbotron',
    templateName: 'Jumbotron',
    // totally optional, but fun
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'CardTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'CardDescription', type: CommonFieldTypes.RichText },
      { name: 'CardParagraph', type: CommonFieldTypes.MultiLineText },
      { name: 'CardImage', type: CommonFieldTypes.Image },
      { name: 'CardLink', type: CommonFieldTypes.GeneralLink },
    ],
  });
}
