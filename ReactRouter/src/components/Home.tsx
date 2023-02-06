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
        <div>
          <h1>All About Dogs</h1>
          <img src='/src/assets/images/homepage.jpg' />
        </div>
      </>
    );
  }