import { Link, LinkField, Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type MainNavigationMenuProps = ComponentProps & {
  fields: {
    DisplayName: Field<string>;
    Link: LinkField;
    Elements: MainNavigationMenuProps[];
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const MainNavigationMenu = ({ fields }: MainNavigationMenuProps): JSX.Element => (
  <>
    <Link className="navbar-brand" field={fields.Link}>
      <Text field={fields.DisplayName}></Text>
    </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        {fields.Elements.map(nav => (
          <li className="nav-item">
            {nav.fields.Elements.length > 0 ? (

              <li className="nav-item dropdown">
                <Link className="nav-link  dropdown-toggle" role="button" data-bs-toggle="dropdown" field={nav.fields.Link}>
                  <Text field={nav.fields.DisplayName}></Text>
                </Link>
                <ul className="dropdown-menu">
                {nav.fields.Elements.map(innerNav => (
                    <Link className="dropdown-item" field={innerNav.fields.Link}>
                      <Text field={innerNav.fields.DisplayName}></Text>
                    </Link>
                  ))}
                </ul>
              </li>

            ) : (

              <Link className="nav-link" field={nav.fields.Link}>
                <Text field={nav.fields.DisplayName}></Text>
              </Link>

            )}
          </li>
        ))}
      </ul>
    </div>
  </>

);

export default withDatasourceCheck()<MainNavigationMenuProps>(MainNavigationMenu);
