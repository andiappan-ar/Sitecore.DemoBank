import { Link, LinkField, ImageField, Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type JumbotronProps = ComponentProps & {
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
const Jumbotron = ({ fields }: JumbotronProps): JSX.Element => (
  <div className="sec-jumbotron-herobanner">
    <div className="p-5 text-white jumbotron-herobanner" style={{ backgroundImage: `url(${fields.CardImage.value?.src})` }}    >
      <hr className="my-4 banner-hr" />
      <h1 className="fw-bold">
        <Text field={fields.CardTitle} />
      </h1>
      <div className="fs-5">
        <RichText field={fields.CardDescription} />
      </div>
      <hr className="my-4 banner-hr" />
      <div className="text-warning">
        <Text field={fields.CardParagraph} />
      </div>
      <div className="lead">
        <Link field={fields.CardLink} showLinkTextWithChildrenPresent={true} className="btn btn-primary btn-xl" data-otherattributes="pass-through-to-anchor-tag" />
      </div>
    </div>
  </div>
);

export default withDatasourceCheck()<JumbotronProps>(Jumbotron);
