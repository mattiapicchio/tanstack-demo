import { ROUTE_KEY } from "@/utils/routerUtils";
import { Link } from "@tanstack/react-router";

export const NavBar = () => {
  return (
    <nav className="p-3 flex gap-4 text-xl border-b border-voltgreen">
      <Link
        to={ROUTE_KEY.HOME}
        className="[&.active]:text-voltgreen no-underline text-white"
      >
        User
      </Link>
      <Link
        to={ROUTE_KEY.REPOS}
        className="[&.active]:text-voltgreen no-underline text-white"
      >
        Repos
      </Link>
    </nav>
  );
};
