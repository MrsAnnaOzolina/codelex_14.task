import './App.css'
// import { NavLink } from "react-router-dom";

export default function Home() {
//   let activeStyle = {
//     textDecoration: "underline",
//   };
    /* <NavLink
            to="characters"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            <a href={`/characters`}>Characters</a>
          </NavLink>   */
    return (
      <>
        <div id="root">
          <h1>Home page </h1>
          <div>
          </div>
          <nav>
            <ul>
              <li>
          <a href={`/characters`}>Characters</a>
              </li>
              <li>
              <a href={`/about`}>About</a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }