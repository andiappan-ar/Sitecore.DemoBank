import {
  Image,
  LinkField,
  ImageField,
  Text,
  Field,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ImageCardsProps = ComponentProps & {
  fields: {
    CardTitle: Field<string>;
    CardDescription: Field<string>;
    CardParagraph: Field<string>;
    CardImage: ImageField;
    CardLink: LinkField;
    Elements: ImageCardsProps[];
  };
};

let buttonCounter = 0;
let elementCounter = 0;
let idSelector = '';
let isActivee = 'false';

function set_idSelector(val: string) {
  idSelector = val.replace(' ', '');
}

function set_isActivee(val: string) {
  isActivee = val;
}

function increase_buttonCounter() {
  buttonCounter++;
}

function increase_elementCounter() {
  elementCounter++;
}

function resetCounters() {
  buttonCounter = 0;
  elementCounter = 0;
  isActivee = 'false';
}

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const ImageCards = ({ fields }: ImageCardsProps): JSX.Element => (
  <>
    <>{set_idSelector(fields.CardTitle.value)}</>
    <div className="container-fluid">
      <div id={idSelector} className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {fields.Elements.map((card) => (
            <>
              <>{set_isActivee(buttonCounter == 0 ? 'active' : '')}</>
              <button
                type="button"
                data-bs-target={'#' + idSelector}
                data-bs-slide-to={buttonCounter}
                className={isActivee}
                aria-label={'Slide ' + buttonCounter}
                data-val={card.fields.CardTitle}
              ></button>
              <>{increase_buttonCounter()}</>
            </>
          ))}
        </div>

        <div className="carousel-inner">
          <>{resetCounters()}</>
          {fields.Elements.map((cardElement) => (
            <>
              <>{set_isActivee(elementCounter == 0 ? 'active' : '')}</>

              <div className={'carousel-item ' + isActivee}>
                <Image className="d-block w-100" field={cardElement.fields.CardImage}></Image>

                <div className="carousel-caption d-none d-md-block">
                  <h1 className="fw-bold">
                    {' '}
                    <Text field={cardElement.fields.CardTitle}></Text>{' '}
                  </h1>
                  <h5>
                    <Text field={cardElement.fields.CardDescription}></Text>
                  </h5>
                  <p>
                    <Text field={cardElement.fields.CardParagraph}></Text>
                  </p>
                </div>
              </div>

              <>{increase_elementCounter()}</>
            </>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={'#' + idSelector}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={'#' + idSelector}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </>
);

export default withDatasourceCheck()<ImageCardsProps>(ImageCards);
