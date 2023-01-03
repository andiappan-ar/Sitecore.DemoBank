import {
  NextImage,
  Link,
  LinkField,
  ImageField,
  Text,
  Field,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type IconCardsProps = ComponentProps & {
  fields: {
    CardTitle: Field<string>;
    CardDescription: Field<string>;
    CardParagraph: Field<string>;
    CardImage: ImageField;
    CardLink: LinkField;
    Elements: IconCardsProps[];
  };
};

function Get_uniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const IconCards = ({ fields }: IconCardsProps): JSX.Element => (
  <section className="page-section" id="services">
    <div className="container px-4 px-lg-5">
      <hr className="divider" />
      <h2 className="text-center mt-0">
        <Text field={fields.CardTitle}></Text>
      </h2>
      <hr className="divider" />
      <div className="row gx-4 gx-lg-5">
        {fields.Elements.map((card) => (
          <div key={Get_uniqueId()} className="col-lg-3 col-md-6">
            <div className="mt-5 card">
              <NextImage className="card-img-top" field={card.fields.CardImage}></NextImage>
              <div className="card-body" style={{ width: '18rem' }}>
                <h5 className="card-title">
                  <Text field={card.fields.CardTitle}></Text>
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">*</h6>
                <p className="card-text">
                  <Text field={card.fields.CardDescription}></Text>
                </p>
                <Link className="card-link" field={card.fields.CardLink}></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="divider" />
    </div>
    <hr className="divider" />
  </section>
);

export default withDatasourceCheck()<IconCardsProps>(IconCards);
