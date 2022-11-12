import { ComponentProps } from 'lib/component-props';
import config from 'temp/config';
import { ComponentRendering, Field, GetServerSideComponentProps, useComponentProps, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { useQuery } from 'react-query';


type GraphQLServerSideFetchFormProps = ComponentProps & {
  rendering: ComponentRendering;
};

const getQueryString = (queries: any) => {
  return Object.keys(queries).reduce((result, key) => {
    return [...result, `${encodeURIComponent(key)}=${encodeURIComponent(queries[key])}`]
  }, []).join('&');
};

/** S: Server side Fetch request logic */
type serverSidePostEntity = {
  data: {},
  isLoading: {},
  error: {},
};

const serverSideGQLQueryString = `{
  layout(site: "demobank-nextjs-jss", routePath: "/login", language: "en") {
    item {
      rendered
    }
  }
}`;

const serverSideGQLQueryStringData = {
  query: serverSideGQLQueryString
};

const fetchGET = () =>

fetch(config.graphQLEndpoint + "?" + getQueryString(serverSideGQLQueryStringData), {
  method: "GET",
  headers: {
    "Access-Control-Allow-Origin": '*',
    "sc_apikey": config.sitecoreApiKey
  }
}).then((res) =>
res.json());

export const getStaticProps: GetServerSideComponentProps = async () => {
  debugger;
  const post = await fetchGET();
  return post;
};

/** E: Server side Fetch request logic */


const GraphQLServerSideFetchForm = ({ rendering }: GraphQLServerSideFetchFormProps): JSX.Element => {

  const serverSideGQLComponentProps = useComponentProps<serverSidePostEntity>(rendering.uid);

  return (
    <>
      <section className="page-section">
        <div className='container'>
          <br />
          <div id="clientSideGQL-Card" className="card">
            <div className="card-header">Server side data fetch</div>
            <div className="card-body">
              <h5 className="card-title">Consume graphql queries in the server side.</h5>
              <p className="card-text"></p>
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <p className="lead">query:{serverSideGQLQueryStringData.query}</p>
                </div>
              </div>
              <div className='row'>
                <br></br>
              </div>

              <div className='row'>
                {serverSideGQLComponentProps && (
                  <div>
                    {JSON.stringify(serverSideGQLComponentProps)}
                  </div>
                )}
              </div>
            </div>
          </div>
          <br />
        </div>
      </section>
    </>
  );
};

export default withDatasourceCheck()<GraphQLServerSideFetchFormProps>(
  GraphQLServerSideFetchForm
);


