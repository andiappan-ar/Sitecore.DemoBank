import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { SetStateAction, useState } from 'react';
import * as $ from 'jquery';
import config from 'temp/config';

type CustomLoginFormProps = ComponentProps & {
  fields: {
    CF_Title: Field<string>;
    CF_UserNameLabel: Field<string>;
    CF_PasswordLabel: Field<string>;
    CF_LoginButtonLabel: Field<string>;
    CF_InvalidCredetials: Field<string>;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const CustomLoginForm = ({ fields }: CustomLoginFormProps): JSX.Element => {
  const [userInput, setuserInput] = useState('');
  const [passInput, setpassInput] = useState('');

  const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
    setuserInput(event.target.value);
  };
  const handleChangePass = (event: { target: { value: SetStateAction<string> } }) => {
    setpassInput(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    // Prevent page reload
    event.preventDefault();

    // const xhr = new XMLHttpRequest();
    // xhr.open('POST', 'https://arsc.dev.local//sitecore/api/ssc/auth/login');
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    // xhr.setRequestHeader('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS');
    // xhr.setRequestHeader(
    //   'Access-Control-Allow-Headers',
    //   'Content-Type, Authorization, X-Requested-With'
    // );
    // xhr.onreadystatechange = function () {
    //   if (this.readyState == 4) {
    //     alert(
    //       'Status: ' +
    //         this.status +
    //         '\nHeaders: ' +
    //         JSON.stringify(this.getAllResponseHeaders()) +
    //         '\nBody: ' +
    //         this.responseText
    //     );
    //   }
    // };

    // xhr.send(
    //   '{ \n    "domain": "sitecore", \n    "' +
    //     userInput +
    //     '": "admin", \n    "' +
    //     passInput +
    //     '": "b" \n}'
    // );

    $.ajax({
      type: 'POST',
      url: 'https://r-sc102sc.dev.local/sitecore/api/ssc/auth/login',
      data: {
        admin: userInput,
        domain: 'sitecore',
        u: passInput,
      },
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
      },
      dataType: 'json',
      crossDomain: true,
      success: function (response) {
        const resp = JSON.parse(response);
        alert(resp.status);
      },
      error: function () {
        alert('error');
      },
    });

    $.ajax({
      type: 'GET',
      url: config.graphQLEndpoint,
      data: {
        query: `{
          layout(site: "demobank-nextjs-jss", routePath: "/login", language: "en") {
            item {
              rendered
            }
          }
        }`,
        sc_apikey: config.sitecoreApiKey,
      },
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
      },
      //dataType: 'jsonp',
      crossDomain: true,
      success: function (response) {
        console.log(response);
      },
      error: function (xhr) {
        console.log(xhr);
      },
    });
  };

  return (
    <>
      <section className="page-section">
        <div className="p-5 mb-4rounded-3 ">
          <div className="container py-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">
                  <Text field={fields.CF_UserNameLabel}></Text>
                </label>
                <input
                  id="user-input"
                  className="form-control"
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  required
                  onChange={handleChange}
                  value={userInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <Text field={fields.CF_PasswordLabel}></Text>
                </label>
                <input
                  id="pass-input"
                  className="form-control"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                  onChange={handleChangePass}
                  value={passInput}
                />
              </div>

              <button className="btn btn-primary" type="submit">
                <Text field={fields.CF_LoginButtonLabel}></Text>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default withDatasourceCheck()<CustomLoginFormProps>(CustomLoginForm);
