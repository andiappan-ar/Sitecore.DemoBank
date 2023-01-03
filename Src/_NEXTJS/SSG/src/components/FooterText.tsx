import {
  LinkField,
  ImageField,
  Text,
  Field,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FooterTextProps = ComponentProps & {
  fields: {
    CardTitle: Field<string>;
    CardDescription: Field<string>;
    CardParagraph: Field<string>;
    CardImage: ImageField;
    CardLink: LinkField;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const FooterText = ({ fields }: FooterTextProps): JSX.Element => (
  <div className="container px-4 px-lg-5">
    <div className="small text-center text-muted">
      <Text field={fields.CardTitle} />
    </div>
  </div>
);

export default withDatasourceCheck()<FooterTextProps>(FooterText);
