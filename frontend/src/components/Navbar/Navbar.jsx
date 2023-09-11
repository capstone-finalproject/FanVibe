import { NavLink } from "react-router-dom";
import { useContext } from "react";

import useWindowScrollDetection from "../../hooks/useWindowScrollDetection";

import CurrentUserContext from "../../contexts/current-user-context";

import './styles.css';

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);
  const [isScrolling] = useWindowScrollDetection();

  return (
    <nav className={`nav ${isScrolling ? 'scroll' : 'absolute'} w-full p-6`}>
      <ul className="flex items-center justify-between">
        <li className="flex flex-row items-center justify-between">
          <a id="logo" href="/" className="mx-auto flex flex-row">
            <img src="http://localhost:3000/fanvibe-logo.png" alt="fanvibe-logo" className="site-logo mx-auto h-10 w-auto"/>
            <h1 className="site-name ml-2">
              Fanvibe
            </h1>
          </a>
          <NavLink to="/" className="px-6">
            Home
          </NavLink>
        </li>
        <li className="justify-self-end">
          {currentUser ? (
            <NavLink to={`/users/${currentUser.id}`} className="px-6">
              {currentUser.username}
            </NavLink>
          ) : (
            <>
              <NavLink to="/login" className="px-2">
                Sign In
              </NavLink>
              <NavLink to="/sign-up" className="px-2">
                Sign Up
              </NavLink>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
}
