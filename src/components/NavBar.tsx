import { Link } from "@tanstack/react-router";

export const NavBar = () => {
  return (
    <nav className="p-2 flex gap-2 ">
      <Link
        to="/"
        className="[&.active]:text-voltgreen no-underline text-white"
      >
        User
      </Link>
      <Link
        to="/about"
        className="[&.active]:text-voltgreen no-underline text-white"
      >
        Repos
      </Link>
    </nav>
  );
};
