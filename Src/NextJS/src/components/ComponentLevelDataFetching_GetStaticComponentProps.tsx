import {
  Text,
  Field,
  withDatasourceCheck,
  useComponentProps,
  ComponentRendering,
  GetStaticComponentProps,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ComponentLevelDataFetching_GetStaticComponentPropsProps = ComponentProps & {
  rendering: ComponentRendering;
  fields: {
    StaticTitleFromSitecore: Field<string>;
    StaticDescriptionFromSitecore: Field<string>;
    ComponentInformation: Field<string>;
  };
};

type PostEntity = {
  date: string;
  dateTime: string;
  timeZone: string;
};

const fetchPost = () =>
  fetch('https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam').then((res) =>
    res.json()
  );

export const getStaticProps: GetStaticComponentProps = async () => {
  const posts = await fetchPost();
  return posts;
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const ComponentLevelDataFetching_GetStaticComponentProps = ({
  fields,
  rendering,
  
}: ComponentLevelDataFetching_GetStaticComponentPropsProps): JSX.Element => {
  const externalData1_GetStaticComponentProps = useComponentProps<PostEntity>(rendering.uid);

  return (
    <>
      <div className="card">
        <div className="card-body">
          {/* Sitecore content here */}
          <h5 className="card-title">
            <Text field={fields.StaticTitleFromSitecore}></Text>
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <Text field={fields.StaticDescriptionFromSitecore}></Text>
          </h6>
          
          <p className="lead">
            <Text field={fields.ComponentInformation}></Text>
          </p>
          {/* External datas here */}
          {externalData1_GetStaticComponentProps && (
            <div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  {externalData1_GetStaticComponentProps?.timeZone}
                </li>
                <li className="list-group-item">
                  {externalData1_GetStaticComponentProps?.dateTime}
                </li>
                <li className="list-group-item">{externalData1_GetStaticComponentProps?.date}</li>
              </ul>
            </div>
          )}

          
        </div>
      </div>
    </>
  );
};

export default withDatasourceCheck()<ComponentLevelDataFetching_GetStaticComponentPropsProps>(
  ComponentLevelDataFetching_GetStaticComponentProps
);
