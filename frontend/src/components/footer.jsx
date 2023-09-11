import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteFooter() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <footer className="bg-neutral-200 text-center dark:bg-neutral-700 w-full relative bottom-0">
      <div className="p-4 flex justify-center items-center text-neutral-700 dark:text-neutral-200">
        <a id="logo" href="/" className="ml-4 flex items-center">
          <img src="http://localhost:3000/fanvibe-logo.png" alt="fanvibe-logo" className="site-logo h-10 w-auto" />
          
        </a>
         © 2023 Copyright: Fanvibe
      </div>
    </footer>

  );
}
