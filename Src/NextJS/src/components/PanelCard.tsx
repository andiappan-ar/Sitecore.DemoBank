import { Link, LinkField, ImageField, Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type PanelCardProps = ComponentProps & {
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
const PanelCard = ({ fields }: PanelCardProps): JSX.Element => (
  <section className="page-section bg-primary">

    <div className="p-5 mb-4 bg-light rounded-3 ">
      <div className="container-fluid py-5 text-center">
        <h1 className="display-5 fw-bold">
          <Text field={fields.CardTitle} />
        </h1>
        <hr className="divider divider-light" />
        <div className="fs-4 text-center">
          <RichText field={fields.CardDescription} />
        </div>
        <Link className="btn btn-primary btn-xl" field={fields.CardLink}></Link>
      </div>
    </div>
  </section>
);

export default withDatasourceCheck()<PanelCardProps>(PanelCard);
