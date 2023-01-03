import { ComponentProps } from 'lib/component-props';
import config from 'temp/config';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import * as $ from 'jquery';


type GraphQLClientSideFetchFormProps = ComponentProps & {
  fields: {
    name: Field<string>;
  };
};

const getQueryString = (queries: any) => {
  return Object.keys(queries).reduce((result, key) => {
    return [...result, `${encodeURIComponent(key)}=${encodeURIComponent(queries[key])}`]
  }, []).join('&');
};


const GraphQLClientSideFetchForm = ({ }: GraphQLClientSideFetchFormProps): JSX.Element => {

  /** S: Client side Ajax request logic */
  const clientSideGQLQueryString = `{
    layout(site: "demobank-nextjs-jss", routePath: "/login", language: "en") {
      item {
        rendered
      }
    }
  }`;

  const clientSideGQLQueryStringData = {
    query: clientSideGQLQueryString
  };
  let clientSideGQLResultData = {
    IsResultAvailable: false,
    Result: {}
  };
  const GetclientSideGQLData = (event: { preventDefault: () => void }) => {
    // Prevent page reload
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: config.graphQLEndpoint,
      data: clientSideGQLQueryStringData,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('sc_apikey', config.sitecoreApiKey);
      },
      crossDomain: true,
      success: function (response) {
        clientSideGQLResultData.IsResultAvailable = true;
        clientSideGQLResultData.Result = response;
        $("#clientSideGQL-Card textarea").val(JSON.stringify(response));
        console.log(response);
      },
      error: function (xhr) {
        console.log(xhr);
      },
    });
  };
  /** E: Client side Ajax request logic */

  return (
    <>
      <section className="page-section">
        <div className='container'>
          <br />
          <div id="clientSideGQL-Card" className="card">
            <div className="card-header">Client side Ajax fetch</div>
            <div className="card-body">
              <h5 className="card-title">Consume graphql queries by ajax call.</h5>
              <p className="card-text">Graph ql queries are statically binded in Javacript.</p>
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <p className="lead">query:{clientSideGQLQueryStringData.query}</p>
                </div>
              </div>
              <a href="#" className="btn btn-primary" onClick={GetclientSideGQLData}>Get GraphQL result</a>
              <div className='row'>
                <br></br>
              </div>

              <div className='row'>
                <textarea readOnly value="Result here..."></textarea></div>
            </div>
          </div>
          <br />
        </div>
      </section>
    </>
  );
};

export default GraphQLClientSideFetchForm;
