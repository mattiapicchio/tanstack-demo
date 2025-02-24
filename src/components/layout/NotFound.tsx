import { ROUTE_KEY } from "@/utils/routerUtils";
import { Link } from "@tanstack/react-router";

export const NotFound = () => {
  return (
    <div className="container mx-auto mt-12 flex flex-col items-center justify-center">
      <p className="text-lg font-bold">Not Found!</p>
      <Link to={ROUTE_KEY.HOME} className="mt-3">
        Go home
      </Link>
    </div>
  );
};
