import { ErrorPage } from "@/components/layout/ErrorPage";
import FullscreenLoader from "@/components/layout/FullscreenLoader";
import InlineLoader from "@/components/layout/inlineLoader";
import { Listing } from "@/components/layout/Listing";
import { IssuePreview } from "@/features/repo/component/IssuePreview";
import { useInfiniteQueryDemoIssues } from "@/features/repo/connectivity/queries.repo";
import { ROUTE_KEY } from "@/utils/routerUtils";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Route = createFileRoute(ROUTE_KEY.ISSUES)({
  component: IssuesPage,
});

function IssuesPage() {
  const { ref, inView } = useInView();
  const {
    data,
    error,
    isFetching,
    isPending,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQueryDemoIssues();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (isPending) return <FullscreenLoader />;

  if (error) return <ErrorPage error={error} />;

  const issues = data?.pages.flatMap((page) => page) || [];

  return (
    <div className="container mx-auto mt-12">
      <div>
        <Listing
          list={issues}
          keyProp="id"
          ListItemComponent={IssuePreview}
          listItemProp="issue"
        />
        <div ref={ref}>
          {isFetchingNextPage && <InlineLoader />}
          {!hasNextPage && <div>Nothing more to load</div>}
        </div>
        <div>
          {isFetching && !isFetchingNextPage ? "Background Updating..." : null}
        </div>
      </div>
    </div>
  );
}
