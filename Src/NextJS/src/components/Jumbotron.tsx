import {  NextImage, ImageField,Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type JumbotronProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    content: Field<string>;
    CardImage: ImageField;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Jumbotron = ({ fields }: JumbotronProps): JSX.Element => (
  <div className="Jumbotron">
    <Text tag="h2" className="contentTitle" field={fields.heading} />

    <RichText className="contentDescription" field={fields.content} />
    <NextImage field={fields.CardImage}/>
  </div>
);

export default withDatasourceCheck()<JumbotronProps>(Jumbotron);
