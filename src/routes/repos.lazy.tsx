import FullscreenLoader from "@/components/layout/FullscreenLoader";
import { Listing } from "@/components/layout/Listing";
import { RepoTeaser } from "@/features/repo/component/RepoTeaser";
import { useQueryOctocatRepos } from "@/features/repo/connectivity/queries.repo";
import { ROUTE_KEY } from "@/utils/routerUtils";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(ROUTE_KEY.REPOS)({
  component: ReposPage,
});

function ReposPage() {
  const { isPending, error, data: repos } = useQueryOctocatRepos();

  if (isPending) return <FullscreenLoader />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="container mx-auto mt-12">
      <Listing
        list={repos}
        keyProp="id"
        ListItemComponent={RepoTeaser}
        listItemProp="repo"
      />
    </div>
  );
}
