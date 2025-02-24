import { useQueryOctocatRepos } from "@/features/repo/connectivity/queries.repo";
import { ROUTE_KEY } from "@/utils/routerUtils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(ROUTE_KEY.REPOS)({
  component: ReposPage,
});

function ReposPage() {
  const { isPending, error, data: repos } = useQueryOctocatRepos();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log("repos", repos);

  return <div className="p-2">Repos</div>;
}
