import * as React from "react";
import { NavLink } from "react-router-dom";

function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to=""
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="characters"
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink to="About"
          style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            >
                About
        
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavList