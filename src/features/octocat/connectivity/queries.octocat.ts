import { QUERY_KEY } from "@/utils/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getOctocatRepos, getOctocatUser } from "./api.octocat";

export const useQueryOctocatUser = () =>
  useQuery({
    queryKey: [QUERY_KEY.USER],
    queryFn: getOctocatUser,
  });

export const useQueryOctocatRepos = () =>
  useQuery({
    queryKey: [QUERY_KEY.REPOS],
    queryFn: getOctocatRepos,
  });
