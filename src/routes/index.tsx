import { ErrorPage } from "@/components/layout/ErrorPage";
import FullscreenLoader from "@/components/layout/FullscreenLoader";
import { UserCard } from "@/features/user/components/UserCard";
import { useQueryOctocatUser } from "@/features/user/connectivity/queries.user";
import { ROUTE_KEY } from "@/utils/routerUtils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTE_KEY.HOME)({
  component: Index,
});

function Index() {
  const { isPending, error, data: user } = useQueryOctocatUser();

  if (isPending) return <FullscreenLoader />;

  if (error) return <ErrorPage error={error} />;

  return (
    <div className="container mx-auto mt-12">
      <UserCard user={user} />
    </div>
  );
}
