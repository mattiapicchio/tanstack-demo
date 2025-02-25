import { QUERY_KEY } from "@/utils/queryKeys";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getDemoIssues, getOctocatRepos } from "./api.repo";

export const useQueryOctocatRepos = () =>
  useQuery({
    queryKey: [QUERY_KEY.REPOS],
    queryFn: getOctocatRepos,
  });

export const useInfiniteQueryDemoIssues = () =>
  useInfiniteQuery({
    queryKey: [QUERY_KEY.ISSUES],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getDemoIssues({ page: pageParam, pageSize: 10 }),
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });
