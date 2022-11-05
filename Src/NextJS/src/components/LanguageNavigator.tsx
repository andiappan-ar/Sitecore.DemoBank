import {
  Text,
  Field,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { useI18n } from 'next-localization';

import { useEffect } from 'react';

type LanguageNavigatorProps = ComponentProps & {
  fields: {
    LanguageCode : Field<string>;
    LanguageDisplayName : Field<string>;
    Elements: LanguageNavigatorProps[];
  };
};

function Get_uniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

let currentUrlPath = "";

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const LanguageNavigator = ({ fields }: LanguageNavigatorProps): JSX.Element => {
  const { locale } = useI18n();
  useEffect(() => {
    // Client-side-only code
    currentUrlPath = window.location.pathname.replace(locale(),"");
  })
  return (
    <>
      <div className="dropdown" style={{ paddingRight: '45px' }}>
        <a className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          {locale()}
        </a>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <>
            {
            fields.Elements.map((innerNav) => (
              <li key={Get_uniqueId()}>
                <a
                  key={Get_uniqueId()}
                  className="dropdown-item"
                  href={'/'+innerNav.fields.LanguageCode.value+currentUrlPath}
                >
                  <Text field={innerNav.fields.LanguageDisplayName}></Text>
                </a>
              </li>
            ))
            }
          </>
        </ul>
      </div>
    </>
  );
};

export default withDatasourceCheck()<LanguageNavigatorProps>(LanguageNavigator);
